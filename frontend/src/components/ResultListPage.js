import React, { useState, useEffect, useContext } from "react";
import { adddata, deldata } from "./context/ContextProvider";
import { url } from "../../apiConfig.json";

const ResultListPage = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { dltdata, setDLTdata } = useContext(deldata);

  const getdata = async () => {
    const res = await fetch(`${url}results`, {
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

  return (
    <>
      <div className="mt-5">
        <div className="container">
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            Result List
          </h1>

          <table class="table">
            <thead>
              <tr className="table-dark">
                <th scope="col"></th>
                <th scope="col">Course</th>
                <th scope="col">Student</th>
                <th scope="col">Score</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((element, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>
                      <td>{element.course.courseName}</td>
                      <td>
                        {element.student.firstName +
                          " " +
                          element.student.familyName}
                      </td>
                      <td>{element.score}</td>
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

export default ResultListPage;
