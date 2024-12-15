import * as firebaseAdmin from 'firebase-admin'
import * as path from 'path'
require('dotenv').config(); 

const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH!;


const serviceAccount = require(path.resolve(serviceAccountPath));

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount)
});
firebaseAdmin.firestore().settings({ignoreUndefinedProperties:true});

export default firebaseAdmin





