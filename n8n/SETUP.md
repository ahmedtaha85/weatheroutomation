# n8n Dejinta — Jawi Skies Cimilada Mogadishu

Tilmaamahan waxay kuu caawinayaan inaad dejiso n8n automation-ka si email loo diro 3 jeer maalintii.

## 1. Shuruudaha

Ka hor inta aanad bilaabin, hubi inaad haysato:

| Adeeg | Waxa loo baahan yahay |
|-------|----------------------|
| **Resend** | API key + domain verified |
| **OpenWeatherMap** | Free API key |
| **Supabase** | Project URL + Service Role Key |
| **n8n** | Self-hosted ama n8n Cloud |

## 2. Abuur API Keys

### Resend
1. Tag [resend.com](https://resend.com) → Sign up
2. **Domains** → Add domain → verify DNS records
3. **API Keys** → Create API Key
4. Kaydi key-ga: `re_xxxxxxxx`

### OpenWeatherMap
1. Tag [openweathermap.org](https://openweathermap.org/api)
2. Sign up → **API keys** → copy key-ga
3. Key-gu wuxuu qaadan karaa ~2 saacadood inuu shaqeeyo

### Supabase Service Role Key
1. Supabase Dashboard → **Settings** → **API**
2. Copy **Project URL**: `https://xxxxx.supabase.co`
3. Copy **service_role** key (ha gelin frontend-ka!)

## 3. Supabase Database

1. Tag Supabase Dashboard → **SQL Editor**
2. Copy oo run garee [`supabase/schema.sql`](../supabase/schema.sql)
3. Hubi in table `subscribers` uu jiro

## 4. n8n Environment Variables

n8n Settings → **Environment Variables** (ama `.env` haddii self-hosted):

```
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
OPENWEATHERMAP_API_KEY=your_openweather_key
RESEND_API_KEY=re_xxxxxxxx
RESEND_FROM_EMAIL=Jawi Skies <noreply@yourdomain.com>
```

**Muhiim:** `RESEND_FROM_EMAIL` waa inuu ka yimaado domain-ka aad verify gareysay Resend.

## 5. Import Workflow

1. n8n → **Workflows** → **Import from File**
2. Dooro [`mogadishu-weather-workflow.json`](./mogadishu-weather-workflow.json)
3. Workflow-ka waa la soo dejin doonaa

### Waqtiyada Email-ka

Workflow-ku wuxuu shaqeeyaa **3 jeer maalintii** (waqtiga Mogadishu / EAT):

| Waqti | Saacad (EAT) | Cron |
|-------|-------------|------|
| Subixii | 07:00 | `0 7,13,18 * * *` |
| Duhurkii | 13:00 | (isla cron) |
| Habenkii | 18:00 | (isla cron) |

Timezone: `Africa/Mogadishu`

## 6. Test Workflow

### Tallaabada 1: Diiwaangeli test user
1. Run Next.js: `npm run dev`
2. Tag `http://localhost:3000`
3. Buuxi foomka isdiiwaangelinta email-kaaga

### Tallaabada 2: Test n8n manually
1. n8n → fur workflow-ka
2. Click **Test Workflow** ama **Execute Workflow**
3. Hubi in email uu yimid

### Tallaabada 3: Activate
1. Toggle **Active** on workflow-ka
2. Email-yada waxay si toos ah u iman doonaan 07:00, 13:00, 18:00 EAT

## 7. Qaabka Email-ka

Email-ku wuxuu ka kooban yahay (Somali):
- Magaca qofka (`Salaan {name}!`)
- Waqtiga (Subaxnimo / Duhurnimo / Habeenimo)
- Heerkulka iyo dareenka
- Sharaxaadda cimilada
- Qoyaanka iyo dabaysha

## 8. Dhibaatooyinka Caadiga ah

| Dhibaato | Xalka |
|---------|-------|
| Email ma iman | Hubi Resend domain verification iyo API key |
| "No subscribers" | Hubi in qof uu isdiiwaangeliyay form-ka |
| Weather API error | Hubi OpenWeatherMap key (sug 2 saacadood haddii cusub tahay) |
| Supabase error | Hubi service role key iyo in table `subscribers` uu jiro |
| Cron ma shaqeynayo | Hubi workflow-ku Active yahay iyo timezone `Africa/Mogadishu` |

## 9. Amniga

- **Ha gelin** service role key frontend-ka ama `.env.local` Next.js
- Service role key kaliya n8n environment variables
- RLS policies waxay xiraan anon SELECT — n8n wuxuu isticmaalaa service role
