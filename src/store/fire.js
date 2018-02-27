import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAQ2uAP7IMggLX_SCSKEFW0JPFKEzH24wc',
  authDomain: 'chat-cd209.firebaseapp.com',
  databaseURL: 'https://chat-cd209.firebaseio.com',
  projectId: 'chat-cd209',
  storageBucket: 'chat-cd209.appspot.com',
  messagingSenderId: '682676797054'
})

const provider = new firebase.auth.GoogleAuthProvider()

export const auth = app.auth()

export async function authenticate () {
  const result = await auth.signInWithPopup(provider)
  console.log(result)
  return result.user
}
