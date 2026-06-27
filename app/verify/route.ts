import { createAdminClient } from '@/utils/supabase/admin';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const token = request.nextUrl.searchParams.get('token');
    const supabase = createAdminClient();

    // Xallinta 'supabase is possibly null'
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
        const { error: insertError } = await supabase
            .from('subscribers')
            .insert([{ name: pending.name, email: pending.email }]);

        if (insertError) {
            return NextResponse.json({ error: 'Diiwaangelinta oo fashilantay (xogta horay ayay u jirtay).' }, { status: 500 });
        }

        // 4. Tirtir xogta pending_subscribers maadaama ay hadda xaqiijisay
        await supabase.from('pending_subscribers').delete().eq('token', token);

        // 5. U wareeji user-ka page-ka guusha (Success Page)
        return NextResponse.redirect(new URL('/success', request.url));

    } catch (err) {
        return NextResponse.json({ error: 'Khalad gudaha ah ayaa dhacay.' }, { status: 500 });
    }
}