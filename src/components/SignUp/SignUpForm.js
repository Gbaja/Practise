import React, { Component } from "react";
import { Field } from "redux-form";

import { Link } from "react-router-dom";
import { renderFormFields } from "../../helpers/reduxFields";

class SignUpForm extends Component {
  // renderField(field) {
  //   const {
  //     meta: { touched, error }
  //   } = field;
  //   return (
  //     <div>
  //       {field.select ? (
  //         <div>
  //           <label>{field.label}</label>
  //           <select {...field.input}>
  //             {Object.keys(field.options).map(val => {
  //               return (
  //                 <option key={val} value={val}>
  //                   {field.options[val]}
  //                 </option>
  //               );
  //             })}
  //           </select>
  //           <p>{touched ? error : ""}</p>
  //         </div>
  //       ) : (
  //         <div>
  //           <label>{field.label}</label>
  //           <input type={field.type} {...field.input} />
  //           <p>{touched ? error : ""}</p>
  //         </div>
  //       )}
  //     </div>
  //   );
  // }

  render() {
    const { handleSubmit, onSubmit, error } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && <p>{error}</p>}
          <Field
            label="First Name"
            name="firstName"
            type="text"
            component={renderFormFields}
          />
          <Field
            label="Last Name"
            name="lastName"
            type="text"
            component={renderFormFields}
          />
          <Field
            label="Account Type"
            name="accountType"
            component={renderFormFields}
            select
            options={{
              select: "select your account type",
              Mentor: "Mentor",
              Mentee: "Mentee"
            }}
          />
          <Field label="Email" name="email" component={renderFormFields} />
          <Field
            label="Password"
            name="password"
            type="password"
            component={renderFormFields}
          />
          <Field
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            component={renderFormFields}
          />

          <button type="submit">Sign up</button>
        </form>
        <div>
          <p>
            <Link to="/">Cancel</Link>
            Already have an account? <Link to="/login_form">Log in</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
