// import-paisagens.js
const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = require('./serviceAccountKey.json'); // caminho para a chave baixada
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function run(){
  const data = JSON.parse(fs.readFileSync('paisagens.json', 'utf8')); // arquivo que te enviei
  const batch = db.batch();
  data.forEach((doc) => {
    const ref = db.collection('paisagens').doc(); // id automático
    batch.set(ref, doc);
  });
  await batch.commit();
  console.log('Importação concluída:', data.length, 'documentos.');
}

run().catch(console.error);