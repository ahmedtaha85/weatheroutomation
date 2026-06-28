import { createAdminClient } from '@/utils/supabase/admin';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const token = request.nextUrl.searchParams.get('token');
    const supabase = createAdminClient();

    if (!supabase) {
        return NextResponse.json({ error: 'Database client failed.' }, { status: 500 });
    }

    if (!token) {
        return NextResponse.json({ error: 'Token lama helin.' }, { status: 400 });
    }

    try {
        // 2. Ka raadi token-kan miiska pending_subscribers
        const { data: pending, error: fetchError } = await supabase
            .from('pending_subscribers')
            .select('*')
            .eq('token', token)
            .single();

        if (fetchError || !pending) {
            return NextResponse.json({ error: 'Token-kan waa uu dhacay ama sax ma ahan.' }, { status: 404 });
        }

        // 3. U wareeji xogta miiska subscribers (Confirmed)
        // Waxaan isticmaalay upsert si uu u cusbooneysiiyo haddii email-ku horey u jiray
        const { error: insertError } = await supabase
            .from('subscribers')
            .insert([{ name: pending.name, email: pending.email }]);

        if (insertError) {
            // Haddii email-ku horey u jiray, ha fashilin, kaliya tirtir pending-ka 
            // oo u dir bogga hore
            console.log("Xogtu horey ayay u jirtay, waan sii wadayaa...");
        }

        // 4. Tirtir xogta pending_subscribers
        await supabase.from('pending_subscribers').delete().eq('token', token);

        // 5. U wareeji user-ka bogga hore (Home) oo leh fariin guul ah
        return NextResponse.redirect(new URL('/?verified=true', request.url));

    } catch (err) {
        console.error("Khalad:", err);
        return NextResponse.json({ error: 'Khalad gudaha ah ayaa dhacay.' }, { status: 500 });
    }
}