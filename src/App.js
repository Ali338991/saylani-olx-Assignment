import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './component/navigation/Navigation';
import firebase from 'firebase';
import { useEffect } from 'react';
import { doCheckUser } from './component/store/actions/AuthActions';
import { useDispatch } from 'react-redux';
import CheckTest from './CheckTest';

function App() {
 const dispatch = useDispatch()

 async function Check() {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var user = user;
      console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuu",user.email)
    dispatch(doCheckUser(user))
      
      // ...
    } else {
      console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuu",)

      // User is signed out
      // ...
    }
  });
  
}

useEffect(() => {
    
  Check()
  }, [])
  

 
 
  return (


    <div >
      <Navigation/>
      {/* <CheckTest/> */}
      
     

    </div>
  );
}

export default App;
