import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        firstName: "",
        email: "",
        mobile: "",
        companyName: "",
        countryName: [],
        marketPlace: [],
        password: "",
        confirmPassword: "",
        isChecked: false,
        isValidate: false,
      },
      errors: {
        firstName: "",
        email: "",
        mobile: "",
        companyName: "",
        countryName: "",
        marketPlace: "",
        password: "",
        confirmPassword: "",
        isValidate: "",
      },
    };
  }

  componentDidMount() {
    console.log(this.state.fields.isValidate);
    axios
      .get(`https://trial.mobiscroll.com/content/countries.json`)
      .then((res) => {
        const countryName = res.data;
        console.log(countryName);
        this.setState({ countryName });
      });
  }

  handleOnChange = (e) => {
    var isChecked = e.target.value;
    this.setState({
      isChecked: isChecked,
    });
  };

  //   handleConfirmation = (e) => {
  //     console.log(e.target.value);
  //     var isValidate = e.target.value;
  //     this.setState({
  //       isValidate: true,
  //     });
  //   };

  validate = (name, value) => {
    const { fields } = this.state;
    switch (name) {
      case "firstName":
        if (!value || value.trim() === "") {
          return "First name is Required";
        } else {
          return "";
        }
      case "email":
        if (!value) {
          return "Email is Required";
        } else if (
          !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          return "Enter a valid email address";
        } else {
          return "";
        }
      case "mobile":
        if (!value || value.trim() === "") {
          return "Mobile number is Required";
        } else if (!value.match(/^[6-9]\d{9}$/)) {
          return "Enter a valid mobile number.";
        } else {
          return "";
        }
      case "password":
        if (!value) {
          return "Password is Required";
        } else if (value.length < 8 || value.length > 15) {
          return "Please fill at least 8 character";
        } else if (!value.match(/[a-z]/g)) {
          return "Please enter at least lower character.";
        } else if (!value.match(/[A-Z]/g)) {
          return "Please enter at least upper character.";
        } else if (!value.match(/[0-9]/g)) {
          return "Please enter at least one digit.";
        } else {
          return "";
        }
      case "confirmPassword":
        if (!value) {
          return "Confirm Password Required";
        } else if (value !== fields.password) {
          return "New Password and Confirm Password Must be Same";
        } else {
          return "";
        }
      default: {
        return "";
      }
    }
  };

  handleUserInput = (e) => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name]: this.validate(e.target.name, e.target.value),
      },
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    const { fields } = this.state;
    e.preventDefault();
    let validationErrors = {};
    Object.keys(fields).forEach((name) => {
      const error = this.validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }
    // if (this.state.fields.isValidate === true) {
    //   alert("please check terms and conditions!");
    // } else {
    //   this.setState({
    //     isValidate: false,
    //   });
    // }
    if (
      (fields.firstName &&
        fields.email &&
        fields.password &&
        fields.mobile &&
        fields.isValidate) ||
      fields.marketPlace ||
      fields.companyName ||
      fields.countryName
    ) {
      const data = {
        firstName: fields.firstName,
        email: fields.email,
        password: fields.password,
        mobile: fields.mobile,
        marketPlace: fields.marketPlace,
        companyName: fields.companyName,
        countryName: fields.countryName,
        isValidate: fields.isValidate,
      };
      window.alert("submit success", JSON.stringify(data));
      console.log("----data----", data);
    }
  };

  render() {
    const { fields, errors } = this.state;
    return (
      <div className="card mx-5 my-5">
        <div>
          <div className="row">
            <div className="col-6">
              <div>
                <label>First name</label>
                <input
                  type="text"
                  className="ml-4 w-75 form-control mx-5 my-2"
                  name="firstName"
                  value={fields.firstName}
                  onChange={(event) => this.handleUserInput(event)}
                  placeholder="First Name"
                />
              </div>
              <div>
                <span className="text-danger">{errors.firstName}</span>
              </div>
            </div>
            <div className="col-6">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="ml-4 w-75 form-control mx-5 my-2"
                value={fields.email}
                onChange={(event) => this.handleUserInput(event)}
                placeholder="Email Address"
              />
              <div>
                <span className="text-danger">{errors.email}</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label>Mobile</label>
              <div className="row">
                <select className="w-25 ml-5 col-2 form-control">
                  <option>+91</option>
                </select>
                <input
                  name="mobile"
                  value={fields.mobile}
                  className="w-50 form-control col-5 ml-3"
                  onChange={(event) => this.handleUserInput(event)}
                  placeholder="mobile"
                />
              </div>
              <div>
                <span className="text-danger">{errors.mobile}</span>
              </div>
            </div>
            <div className="col-6">
              <div>
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  className="ml-4 w-75 form-control mx-5 my-2"
                  value={fields.companyName}
                  onChange={(event) => this.handleUserInput(event)}
                  placeholder="Company Name"
                />
              </div>
              <div>
                <span className="text-danger">{errors.companyName}</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div>
                <label>Country Name</label>
                <select className="w-75 ml-5 form-control">
                  {this.state.countryName?.map((country, idx) => {
                    return <option key={idx}>{country.text}</option>;
                  })}
                </select>
              </div>
              <div>
                <span className="text-danger">{errors.countryName}</span>
              </div>
            </div>
            <div className="col-6">
              <div>
                <label>Market Place</label>
                <div className="row">
                  <div className="col-4">
                    <div className="">
                      <input
                        type="checkbox"
                        name="amazon"
                        value="Amazon"
                        checked={this.state.isChecked}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                      Amazon
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="">
                      <input
                        type="checkbox"
                        name="flipkart"
                        value="Flipkart"
                        checked={this.state.isChecked}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                      Flipkart
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="">
                      <input
                        type="checkbox"
                        name="shopify"
                        value="Shopify"
                        checked={this.state.isChecked}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                      Shopify
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-4">
                    <div className="">
                      <input
                        type="checkbox"
                        name="ebay"
                        value="Ebay"
                        checked={this.state.isChecked}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                      Ebay
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="">
                      <input
                        type="checkbox"
                        name="walmart"
                        value="Walmart"
                        checked={this.state.isChecked}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                      Walmart
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="">
                      <input
                        type="checkbox"
                        name="noon"
                        value="Noon"
                        checked={this.state.isChecked}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                      Noon
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-danger">{errors.marketPlace}</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label>Password</label>
              <input
                type="Password"
                name="password"
                className="ml-4 w-75 form-control mx-5 my-2"
                value={fields.password}
                onChange={(event) => this.handleUserInput(event)}
                placeholder="Password"
              />
              <div>
                <span className="text-danger">{errors.password}</span>
              </div>
            </div>
            <div className="col-6">
              <label>Confirm Password</label>
              <input
                type="Password"
                name="confirmPassword"
                value={fields.confirmPassword}
                className="ml-4 w-75 form-control mx-5 my-2"
                onChange={(event) => this.handleUserInput(event)}
                placeholder="confirm Password"
              />
              <div>
                <span className="text-danger">{errors.confirmPassword}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="row">
            <input
              type="checkbox"
              name="validate"
              checked={this.state.isChecked}
              className="ml-5 my-2 col-1 form-control"
              onChange={(event) => this.handleOnChange(event)}
            />
            &nbsp;
            <span className="col-5 mt-3">I agree to terms and conditions!</span>
          </div>
        </div>

        <br />
        <button
          type="button"
          className="login-button pointer btn btn-success w-75 mb-5 mx-auto"
          onClick={this.handleSubmit}
          disabled={this.state.fields.isChecked === false}
        >
          Submit
        </button>
      </div>
    );
  }
}
export default Form;
