const MOGADISHU_TZ = 'Africa/Mogadishu';

export const FORECAST_TIMES = [
  { label: 'Morning', time: '07:00', hour: 7 },
  { label: 'Afternoon', time: '13:00', hour: 13 },
  { label: 'Evening', time: '18:00', hour: 18 },
] as const;

function getMogadishuHour(): number {
  const hourStr = new Intl.DateTimeFormat('en-GB', {
    timeZone: MOGADISHU_TZ,
    hour: 'numeric',
    hour12: false,
  }).format(new Date());
  return parseInt(hourStr, 10);
}

export function getNextForecastSlot(): { label: string; time: string } {
  const currentHour = getMogadishuHour();

  for (const slot of FORECAST_TIMES) {
    if (currentHour < slot.hour) {
      return { label: slot.label, time: slot.time };
    }
  }

  return { label: 'Morning', time: '07:00' };
}

export function getSubscriptionSuccessMessage(name: string): string {
  const next = getNextForecastSlot();
  const firstName = name.split(' ')[0] || name;

  return `Thanks, ${firstName}! You're subscribed.

Your next Mogadishu weather update arrives at ${next.time} (${next.label}) — Mogadishu time.

You'll receive forecasts 3 times every day:
• Morning — 07:00
• Afternoon — 13:00
• Evening — 18:00`;
}
