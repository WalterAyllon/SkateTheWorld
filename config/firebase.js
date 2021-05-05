
import firebase from 'firebase';
//importing api details from a separate, not included file
import apiConfig from './config'

const firebaseConfig = {
    apiKey: apiConfig.apiKey,
    authDomain: apiConfig.authDomain,
    projectId: apiConfig.projectId,
    storageBucket: apiConfig.storageBucket,
    messagingSenderId: apiConfig.messagingSenderId,
    appId: apiConfig.appId,
    measurementId: apiConfig.measurementId
  };

firebase.initializeApp(firebaseConfig)

export default firebase; 