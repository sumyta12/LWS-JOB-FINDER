import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./LayOut/Home";
import AddNewjob from "./LayOut/AddNewjob";
import EditNewjob from "./LayOut/EditNewjob";
import "./styles/style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<AddNewjob />} />
          <Route path="/jobs/:jobId" element={<EditNewjob />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
