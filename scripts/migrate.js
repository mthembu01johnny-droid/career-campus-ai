const fs = require('fs');
const path = require('path');

const schemaPath = path.join(__dirname, '..', 'database', 'schema.sql');

if (!fs.existsSync(schemaPath)) {
  console.error('Schema file not found at', schemaPath);
  process.exit(1);
}

const schema = fs.readFileSync(schemaPath, 'utf8');
console.log('Database migration file detected.');
console.log('Review and apply the SQL in database/schema.sql to your Supabase PostgreSQL instance.');
console.log('\n--- SQL Preview ---\n');
console.log(schema.slice(0, 1000));
