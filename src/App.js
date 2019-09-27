import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./componennts/navBar";
import Footer from "./componennts/footer";
import Home from "./componennts/home";
import ContactUs from "./componennts/contactUs";
import LoginForm from "./componennts/loginForm";
import NotFound from "./componennts/notFound";
import Search from "./componennts/search";
import Register from "./componennts/register";
import Product from "./componennts/product";
import Logout from "./componennts/logout";
import auth from "./services/authService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import NewApartment from "./componennts/newApartment";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} style={{ marginBottom: "15px" }} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/newapartment" component={NewApartment} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route
            path="/search"
            render={props => <Search {...props} user={this.state.user} />}
          />
          <Route path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
