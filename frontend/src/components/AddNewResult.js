import React, { useContext, useState, useEffect } from "react";
import { adddata } from "./context/ContextProvider.js";
import { useNavigate } from "react-router-dom";
import { url } from "../../apiConfig.json";

const AddNewResult = () => {
  const navigate = useNavigate();

  const { setUdata } = useContext(adddata);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [inpval, setINP] = useState({
    courseId: "",
    studentId: "",
    score: "",
  });
  const scores = ["A", "B", "C", "D", "E", "F"];
  useEffect(() => {
    getdata();
  }, []);
  const setdata = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const getdata = async () => {
    try {
      const studentsResponse = await fetch(`${url}students`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const coursesResponse = await fetch(`${url}courses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Assuming that the responses are JSON, you need to await their JSON parsing:
      const students = await studentsResponse.json();
      const courses = await coursesResponse.json();
      setStudents(students);
      setCourses(courses);
      // Now you can access and work with the data.
      // console.log("Students:", students);
      // console.log("Courses:", courses);

      // You can set the data to your state or perform any other necessary actions here.
    } catch (error) {
      // Handle any errors that might occur during the fetch requests.
      console.error("Error fetching data:", error);
    }
  };

  // console.log(students);
  const addinpdata = async (e) => {
    e.preventDefault();

    const { studentId, courseId, score } = inpval;
    console.log(inpval);
    if (courseId === "") {
      alert("Course is required");
    } else if (studentId == "") {
      alert("Student is required");
    } else if (score == "") {
      alert("score is required");
    } else {
      const res = await fetch(`${url}results`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId,
          studentId,
          score,
        }),
      });

      const data = await res.json();
      if (res.status === 422 || !data) {
        alert("error");
      } else {
        navigate("/");
        setUdata(data);
      }
    }
  };

  return (
    <div className="container">
      <h1 style={{ display: "flex", justifyContent: "center" }}>Add Result</h1>

      <form className="mt-4" onSubmit={addinpdata}>
        <div>
          <select
            class="form-select"
            name="studentId"
            aria-label="studentId"
            onChange={setdata}
          >
            <option value={""}>Select Student</option>
            {students.map((student) => {
              return (
                <>
                  <option value={student.id}>{student.firstName}</option>
                </>
              );
            })}
          </select>

          <select
            class="form-select"
            aria-label="courseId"
            name="courseId"
            onChange={setdata}
            style={{ marginTop: "30px" }}
          >
            <option value={""}>Select Course</option>

            {courses.map((course) => {
              return <option value={course.id}>{course.courseName}</option>;
            })}
          </select>

          <select
            class="form-select"
            aria-label="score"
            name="score"
            onChange={setdata}
            value={inpval.score}
            style={{ marginTop: "30px" }}
          >
            {scores.map((score) => {
              return <option value={score}>{score}</option>;
            })}
          </select>
          <button
            type="submit"
            class="btn btn-primary"
            style={{ width: "100px", marginLeft: "1010px", marginTop: "30px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddNewResult;
