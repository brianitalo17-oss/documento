// import-paisagens.js
// Uso: coloque o arquivo serviceAccountKey.json (baixado do console Firebase)
//       na mesma pasta deste script e rode:
//   npm init -y
//   npm install firebase-admin
//   node import-paisagens.js

const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

const keyPath = path.join(__dirname, 'serviceAccountKey.json');
if (!fs.existsSync(keyPath)) {
  console.error('Erro: serviceAccountKey.json não encontrado. Faça o download no Firebase Console > Project settings > Service accounts.');
  process.exit(1);
}

const serviceAccount = require(keyPath);
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

async function run(){
  const jsonPath = path.join(__dirname, 'paisagens.json');
  if (!fs.existsSync(jsonPath)){
    console.error('Erro: paisagens.json não encontrado. Coloque-o na mesma pasta do script.');
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  if (!Array.isArray(data)){
    console.error('Erro: paisagens.json deve ser um array de objetos.');
    process.exit(1);
  }

  console.log('Iniciando importação de', data.length, 'documentos para a coleção "paisagens"...');
  const batch = db.batch();
  data.forEach((doc) => {
    const ref = db.collection('paisagens').doc(); // id automático
    batch.set(ref, doc);
  });
  await batch.commit();
  console.log('Importação concluída:', data.length, 'documentos adicionados.');
}

run().catch(err => { console.error('Erro durante import:', err); process.exit(1); });
