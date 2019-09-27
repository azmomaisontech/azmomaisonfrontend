import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "../commons/form";
import * as apartmentService from "../services/apartmentService";

class NewApartment extends Form {
  state = {
    data: { name: "", address: "", price: "", contact: "" },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    address: Joi.string()
      .required()
      .min(5)
      .label("Address"),
    price: Joi.string()
      .required()
      .label("Price"),
    contact: Joi.string()
      .required()
      .label("Contact")
  };

  doSubmit = async () => {
    try {
      await apartmentService.post(this.state.data);
      window.location = "/search";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.address = ex.response.data;
        this.setState({ errors });
      }
      toast.error("Apartment already posted");
    }
  };

  handleCancel = e => {
    e.preventDefault();
    window.location = "/search";
  };

  render() {
    return (
      <div className="formitemgrid productcontainer">
        <h1>New Apartment</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("address", "Address")}
          {this.renderInput("price", "Price")}
          {this.renderInput("contact", "Contact")}
          {this.renderButton("Submit")}
          <button onClick={this.handleCancel} className="formitem submitb">
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default NewApartment;
