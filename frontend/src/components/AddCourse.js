import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { adddata } from "./context/ContextProvider.js";
import { useNavigate } from "react-router-dom";
import { url } from "../../apiConfig.json";

const AddCourse = () => {
  const navigate = useNavigate();

  const { udata, setUdata } = useContext(adddata);

  const [inpval, setINP] = useState({
    courseName: "",
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

    const { courseName } = inpval;

    if (courseName === "") {
      alert("CourseName is required");
    } else {
      const res = await fetch(`${url}courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseName,
        }),
      });

      const data = await res.json();
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
        Course Registration
      </h1>

      <form className="mt-4">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Course Name
            </label>
            <input
              type="text"
              value={inpval.courseName}
              onChange={setdata}
              name="courseName"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <button
            type="submit"
            onClick={addinpdata}
            class="btn btn-primary"
            style={{ width: "100px", marginLeft: "472px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddCourse;
