import React, { useState, useEffect, useContext } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { url } from "../../apiConfig.json";

const CourseList = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { dltdata, setDLTdata } = useContext(deldata);

  const getdata = async () => {
    const res = await fetch(`${url}courses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (id) => {
    const res2 = await fetch(`${url}courses/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("Course deleted");
      getdata();
      setDLTdata(deletedata);
    }
  };

  return (
    <>
      {dltdata ? (
        <>
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>{dltdata.name}</strong> deleted succesfully!
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="mt-5">
        <div className="container">
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            Course List
          </h1>

          <table class="table">
            <thead>
              <tr className="table-dark">
                <th scope="col"></th>
                <th scope="col">Course Name</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((element, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>
                      <td>{element.courseName}</td>
                      <td className="d-flex justify-content-between">
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteuser(element.id)}
                        >
                          <DeleteOutlineIcon />
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CourseList;
