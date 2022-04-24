import React from "react";
import Home from "./Component/Home";
import Free from "./Component/Free";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import AskQuestion from "./Component/AskQuestion";
import BookSolution from "./Component/BookSolution";
import Join from "./Component/Join";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/signup" element={<Join />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/free" element={<Free />}></Route>
          <Route path="/question" element={<AskQuestion />}></Route>
          <Route path="/solution" element={<BookSolution />}></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
