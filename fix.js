const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/(dashboard)/dashboard/lms/certificates/page.tsx',
  'app/(dashboard)/dashboard/notices/page.tsx',
  'app/(dashboard)/dashboard/public-notices/page.tsx',
  'app/(dashboard)/dashboard/roles/page.tsx',
  'app/(dashboard)/dashboard/companies/page.tsx',
  'app/(dashboard)/dashboard/departments/page.tsx',
  'app/(dashboard)/dashboard/procedures/page.tsx',
  'app/(dashboard)/dashboard/meetings/page.tsx',
  'app/(dashboard)/dashboard/documents/page.tsx',
  'app/(dashboard)/dashboard/event-checklists/page.tsx',
  'app/(dashboard)/dashboard/suppliers/page.tsx',
  'app/(dashboard)/dashboard/birthdays/page.tsx'
];

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\s+actionLabel="[^"]+"/g, '');
  content = content.replace(/\s+onAction=\{\([^)]*\)\s*=>\s*\{[^}]*\}\}/g, '');
  fs.writeFileSync(filePath, content);
  console.log('Fixed', file);
});
