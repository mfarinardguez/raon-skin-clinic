import fs from 'fs';
import admin from 'firebase-admin';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, 'raon-skin-clinic-firebase-adminsdk-fbsvc-652fb20c98.json');
const serviceAccount = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
export default db;