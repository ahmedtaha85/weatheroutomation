-- Jawi Skies: subscribers table
-- Run in Supabase Dashboard → SQL Editor → New query → Run

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists subscribers_active_idx
  on public.subscribers (is_active)
  where is_active = true;

alter table public.subscribers enable row level security;

drop policy if exists "Allow anonymous insert" on public.subscribers;
drop policy if exists "Deny anonymous select" on public.subscribers;
drop policy if exists "Deny anonymous update" on public.subscribers;
drop policy if exists "Deny anonymous delete" on public.subscribers;

create policy "Allow anonymous insert"
  on public.subscribers for insert to anon, authenticated with check (true);

create policy "Deny anonymous select"
  on public.subscribers for select to anon using (false);

create policy "Deny anonymous update"
  on public.subscribers for update to anon using (false);

create policy "Deny anonymous delete"
  on public.subscribers for delete to anon using (false);

grant usage on schema public to anon, authenticated;
grant insert on table public.subscribers to anon, authenticated;
