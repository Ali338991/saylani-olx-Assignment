import { auth, db } from "../../config/FirebaseConfig";
import firebase from "firebase";
import { useEffect } from "react";

export const LOGIN = "Login";
export const LOGOUT = "LOGOUT";
export const CheckUser = "CheckUser";
export const user = "user";
// var provider = new firebase.auth.GoogleAuthProvider();

export const doLogin = (provider) => async (dispatch) => {
  try {
    // firebase login

    
    const userCredential = await firebase.auth().signInWithPopup(provider);
    var user = userCredential.user;
    console.log("user", user.photoURL);
    
    dispatch({
      type: LOGIN,
      payload: user,
    });
  } catch (error) {
      alert(JSON.stringify(error))
    console.log("error", error);
  }
};


export const doCheckUser = (user) => async (dispatch) => {
  try {
    // firebase login

    
  
    
    dispatch({
      type: CheckUser,
      payload: user,
    });
  } catch (error) {
      alert(JSON.stringify(error))
    console.log("error", error);
  }
};

// export const doSignup = (user) => async (dispatch) => {
//   try {
//     // firebase login

//     const userCredential = await auth.createUserWithEmailAndPassword(user.email, user.password);
    
//     var userData = userCredential.user;

//     // db firestore
//     await db.collection("users").add({
//        ...user,
//        uid: userData.uid
//     })
    
//     dispatch({
//       type: LOGIN,
//       payload: userData,
//     });

//   } catch (error) {
//       alert(JSON.stringify(error))
//     console.log("error", error);
//   }
// };



export const doLogout = () => async (dispatch) => {
    try {
      // firebase login
      const res = await auth.signOut();
      console.log("user", res);
      dispatch({
        type: LOGOUT,
      });
    } catch (error) {
        alert(JSON.stringify(error))
      console.log("error", error);
    }
  };
