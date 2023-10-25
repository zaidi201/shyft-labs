import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Register from "./components/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCourse from "./components/AddCourse";
import CourseList from "./components/CourseList";
import ResultListPage from "./components/ResultListPage";
import AddNewResult from "./components/AddNewResult";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/studentList" element={<Home />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addCourse" element={<AddCourse />} />
          <Route path="/addResult" element={<AddNewResult />} />
          <Route path="/CourseList" element={<CourseList />} />
          <Route path="/ResultList" element={<ResultListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
