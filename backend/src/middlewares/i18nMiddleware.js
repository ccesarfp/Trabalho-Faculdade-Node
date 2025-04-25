import i18n from 'i18n';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

i18n.configure({
    locales: ['pt', 'en'],
    directory: path.join(__dirname, '../../locales'),
    defaultLocale: 'en',
    queryParameter: 'lang',
    autoReload: true,
    syncFiles: true,
    objectNotation: true
});

export default i18n.init;