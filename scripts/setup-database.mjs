import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

async function runSetup() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    console.log('\n❌ DATABASE_URL is not set in .env.local\n');
    console.log('To create the database table automatically:');
    console.log('1. Go to Supabase Dashboard → Settings → Database');
    console.log('2. Copy the "Connection string" (URI mode, pooler)');
    console.log('3. Add to .env.local:');
    console.log('   DATABASE_URL=postgresql://postgres.[ref]:[YOUR-PASSWORD]@...\n');
    console.log('OR run the SQL manually:');
    console.log('   Supabase Dashboard → SQL Editor → paste supabase/schema.sql → Run\n');
    process.exit(1);
  }

  let pg: typeof import('pg');
  try {
    pg = await import('pg');
  } catch {
    console.log('\nInstalling pg package for database setup...');
    const { execSync } = await import('child_process');
    execSync('npm install pg --save-dev', { stdio: 'inherit' });
    pg = await import('pg');
  }

  const sqlPath = join(process.cwd(), 'supabase', 'schema.sql');
  if (!existsSync(sqlPath)) {
    console.error('Missing supabase/schema.sql');
    process.exit(1);
  }

  const sql = readFileSync(sqlPath, 'utf8');
  const client = new pg.Client({ connectionString: databaseUrl, ssl: { rejectUnauthorized: false } });

  try {
    await client.connect();
    console.log('Connected to Supabase database...');
    await client.query(sql);
    console.log('✅ subscribers table created successfully!');
  } catch (err) {
    console.error('❌ Database setup failed:', err instanceof Error ? err.message : err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

runSetup();
