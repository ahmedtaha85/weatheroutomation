'use server';

import { createAdminClient } from '@/utils/supabase/admin';
import { v4 as uuidv4 } from 'uuid';

export type SubscribeResult =
  | { success: true }
  | { success: false; error: string };

export async function subscribe(
  formData: FormData
): Promise<SubscribeResult> {
  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim().toLowerCase();

  if (!name || !email) {
    return {
      success: false,
      error: 'Fadlan buuxi magaca iyo email-ka.',
    };
  }

  console.log('====================================');
  console.log('🚀 New Subscription Request');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('====================================');

  try {
    const supabase = createAdminClient();

    if (!supabase) {
      console.error('❌ Supabase client not found');
      return {
        success: false,
        error: 'Database connection failed.',
      };
    }

    const token = uuidv4();

    console.log('✅ Generated Token:', token);

    // Save subscriber
    const { data, error: insertError } = await supabase
      .from('pending_subscribers')
      .insert([
        {
          name,
          email,
          token,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (insertError) {
      console.error('❌ Supabase Insert Error');
      console.error(insertError);

      return {
        success: false,
        error: insertError.message,
      };
    }

    console.log('✅ Subscriber inserted');
    console.log(data);

    console.log('====================================');
    console.log('📤 Sending request to n8n...');
    console.log('====================================');

    const webhookUrl =
      'POST https://thetaaha.app.n8n.cloud/webhook/Subscribe';

    console.log('Webhook URL:', webhookUrl);

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 15000);

    let n8nResponse: Response;

    try {
      n8nResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          token,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);
    } catch (fetchError) {
      console.error('❌ Fetch Error');
      console.error(fetchError);

      return {
        success: false,
        error: 'Unable to connect to n8n.',
      };
    }

    console.log('====================================');
    console.log('📥 n8n Response');
    console.log('Status:', n8nResponse.status);
    console.log('OK:', n8nResponse.ok);

    const responseText = await n8nResponse.text();

    console.log('Body:', responseText);
    console.log('====================================');

    if (!n8nResponse.ok) {
      console.error('❌ n8n returned error');

      return {
        success: false,
        error: `n8n Error (${n8nResponse.status}): ${responseText}`,
      };
    }

    console.log('✅ Verification email request sent successfully.');

    return {
      success: true,
    };
  } catch (err) {
    console.error('====================================');
    console.error('❌ Unexpected Error');
    console.error(err);
    console.error('====================================');

    return {
      success: false,
      error: 'Waxa dhacay khalad aan la filayn.',
    };
  }
} ""