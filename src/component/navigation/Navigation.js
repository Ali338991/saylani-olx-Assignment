import { React } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "../commonComponent/navigationBar/NavigationBar";
import Home from "../modules/home/Home";
import Login from "../modules/auth/login/Login";
import Sell from "../modules/sell/Sell";
import AddCategories from "../categories/AddCategories";
import Categories from "../categories/Categories";
import LoginComponent from "../commonComponent/navigationBar/LoginComponent";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import DetailCategorie from "../categories/DetailCategorie";
import SellCheck from "../modules/sell/SellCheck";

export default function Navigation() {
  const authState = useSelector((state) => state.AuthReducer.isUserLoggedIn);
//   const authState = false;

  return (
    <Router>
      <NavigationBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/SellCheck">
        <SellCheck/>
        </Route>


        <Route path="/lolo">
          <Sell />
        </Route>

        <PublicRoute path="/login"  auth={authState}>
          <Login />
        </PublicRoute>

        <PrivateRoute path="/Sell" auth={authState}>
          <Sell />
        </PrivateRoute>

        <Route path="/add">
          <AddCategories />
        </Route>

        <Route path="/cat">
          <Categories />
        </Route>

        <Route path="/check">
          <LoginComponent />
        </Route>

        <Route path={`/detail/:id`}>
          <DetailCategorie />
        </Route>
      </Switch>
    </Router>
  );
}
