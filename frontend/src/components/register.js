import React, { useContext, useState } from "react";
import { adddata } from "./context/ContextProvider.js";
import { useNavigate } from "react-router-dom";
import { url } from "../../apiConfig.json";

const Register = () => {
  const navigate = useNavigate();

  const { udata, setUdata } = useContext(adddata);

  //const history = useHistory();

  const [inpval, setINP] = useState({
    firstName: "",
    familyName: "",
    email: "",
    dob: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { firstName, familyName, email, dob } = inpval;
    alert(
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    );

    if (firstName === "") {
      alert("name is required");
    } else if (familyName === "") {
      alert("Family Name is required");
    } else if (email === "") {
      alert("email is required");
    } else if (!email.includes("@")) {
      alert("enter valid email");
    } else if (!email.includes(".com")) {
      alert("enter valid email");
    } else if (dob === "") {
      alert("Date of birth is required");
    } else if (
      new Date(dob) >= new Date().setFullYear(new Date().getFullYear() - 10)
    ) {
      alert("You should be older than 10 years");
    } else {
      const res = await fetch(`${url}students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          familyName,
          email,
          dob,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
        console.log("error ");
        alert("error");
      } else {
        navigate("/");
        setUdata(data);
        console.log("data added");
      }
    }
  };

  return (
    <div className="container">
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Student Registration
      </h1>
      <form className="mt-4">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              First Name
            </label>
            <input
              type="text"
              value={inpval.firstName}
              onChange={setdata}
              name="firstName"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Family Name
            </label>
            <input
              type="text"
              value={inpval.familyName}
              onChange={setdata}
              name="familyName"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              email
            </label>
            <input
              type="email"
              value={inpval.email}
              onChange={setdata}
              name="email"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              value={inpval.dob}
              onChange={setdata}
              name="dob"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button
            type="submit"
            onClick={addinpdata}
            class="btn btn-primary"
            style={{ width: "100px", marginLeft: "1030px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
