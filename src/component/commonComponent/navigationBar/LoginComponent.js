import React from "react";
import { FaRocketchat, FaBook, FaBell } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { doLogout } from "../../store/actions/AuthActions";
import { NavDropdown,Button } from "react-bootstrap";

export default function LoginComponent() {
  const dispatch = useDispatch();

  const logoutOnCLick = () => {
    dispatch(doLogout());
  };
  const photoURL = useSelector((state) => state.AuthReducer.user.photoURL);

  return (
    <>
      <div className="mini">
        <FaBell
          size={37}
          style={{
            fill: "black",
            position: "relative",
            top: "6px",
            left: "30px",
          }}
        />

        <img
          src={photoURL}
          alt=""
          style={{
            fill: "black",
            position: "relative",
            left: "45px",
            top: "6px",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
          }}
        />
      </div>
      <NavDropdown
        title="Profile"
        className="Sell-link "
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="/">
          <img
            src={photoURL}
            alt="Profile"
            style={{
              fill: "black",
              position: "relative",
              left: "45px",
              top: "6px",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
            }}
          />
          <h6 className="mt-3 ml-2">Ali Abubakar</h6>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">
          <div>
            <span>
              <FaBook size={27} style={{ marginRight: "10px" }} />
            </span>
            <span>My Add</span>
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="/">
          <div>
            <span>
              <FaRocketchat size={27} style={{ marginRight: "10px" }} />
            </span>
            <span>Chat</span>
          </div>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">
          <div>
            <span>
              <FaBook size={27} style={{ marginRight: "10px" }} />
            </span>
            <span>Help</span>
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="/">
          <div>
            <span>
              <FaRocketchat size={27} style={{ marginRight: "10px" }} />
            </span>
            <span>Setting</span>
          </div>
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <Button
          variant="danger"
          className="btn-block"
          onClick={() => logoutOnCLick()}
        >
          Logout
        </Button>
      </NavDropdown>
    </>
  );
}
