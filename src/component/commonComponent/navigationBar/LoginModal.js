import React, {useState} from 'react';
import { useDispatch} from "react-redux";
import { Button,Modal,Form} from "react-bootstrap";
import './Navigation.css';
import { Link } from "react-router-dom";
import firebase from 'firebase';
// import SocialMediaAuth from '../../modules/auth/SocialMediaAuth';
import { googleProvider } from '../../modules/auth/AuthMethod';
import { doLogin} from '../../store/actions/AuthActions';








export default function LoginModal() {
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 const dispatch = useDispatch()
    

    //Sign IN Area


    const handleOnCLick = (provider) =>{

      dispatch(doLogin(provider))
      
      
    };
 
  
    return (
      <>

        <Link className="Sell-link" onClick={handleShow}>
         Login
        </Link>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
<button onClick={()=> handleOnCLick(googleProvider)}>Google</button>


          </Modal.Body>
          
        </Modal>
      </>
    );
  }
  

  //
  // function MyVerticallyCenteredModal(props) {
  //   return (
  //     <Modal
  //       {...props}
  //       size="lg"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       centered
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title id="contained-modal-title-vcenter">
  //           Modal heading
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <h4>Centered Modal</h4>
  //         <p>
  //           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
  //           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
  //           consectetur ac, vestibulum at eros.
  //         </p>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button onClick={props.onHide}>Close</Button>
  //       </Modal.Footer>
  //     </Modal>
  //   );
  // }
  
  // function App() {
  //   const [modalShow, setModalShow] = React.useState(false);
  
  //   return (
  //     <>
  //       <Button variant="primary" onClick={() => setModalShow(true)}>
  //         Launch vertically centered modal
  //       </Button>
  
  //       <MyVerticallyCenteredModal
  //         show={modalShow}
  //         onHide={() => setModalShow(false)}
  //       />
  //     </>
  //   );
  // }
  
  // render(<App />);  
