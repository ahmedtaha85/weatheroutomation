'use server';

import { createAdminClient } from '@/utils/supabase/admin';
import { v4 as uuidv4 } from 'uuid';

export type SubscribeResult = { success: true } | { success: false; error: string };

export async function subscribe(formData: FormData): Promise<SubscribeResult> {
  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim().toLowerCase();

  if (!name || !email) {
    return { success: false, error: 'Fadlan buuxi magaca iyo email-ka.' };
  }

  try {
    const supabase = createAdminClient();

    // Hubinta in supabase client uu jiro
    if (!supabase) {
      return { success: false, error: 'Database connection failed.' };
    }

    const token = uuidv4();

    // 1. Geli xogta pending_subscribers (Meel-gaar ah)
    const { error: insertError } = await supabase.from('pending_subscribers').insert([{
      name,
      email,
      token,
      created_at: new Date().toISOString()
    }]);

    if (insertError) {
      // Haddii email-ku horey u jiray ama diiwaangelin kale socoto
      return { success: false, error: 'Diiwaangelintii way fashilantay. Fadlan isku day mar kale.' };
    }

    // 2. n8n u dir si uu u diro email-ka xaqiijinta (Verification Email)
    // Hubi in URL-kan uu yahay midka saxda ah ee n8n
    const n8nResponse = await fetch('https://thetaaha.app.n8n.cloud/webhook-test/SendVerification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, token }),
    });

    if (!n8nResponse.ok) {
      console.error("n8n wuu fashilmay");
      return { success: false, error: 'Email-ka xaqiijinta laguma diri karin.' };
    }

    return { success: true };
  } catch (err) {
    console.error("Khalad guud:", err);
    return { success: false, error: 'Waxa dhacay khalad aan la filayn.' };
  }
}