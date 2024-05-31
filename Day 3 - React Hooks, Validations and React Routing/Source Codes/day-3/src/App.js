import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UseEffect from "./components/UseEffect";
import DependancyArray from "./components/DependancyArray";
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";
import UseCallBack from "./components/UseCallBack/UseCallBack";
import UseMemo from "./components/UseMemo";
import UseLayoutEffect from "./components/UseLayoutEffect";
import ChildComponent from "./components/UseContext/ChildComponent";
import Parent from "./components/UseContext/Parent";
import UncontrolledComponent from "./components/Forms/UncontrolledControlled/UncontrolledComponent";
import ControlledComponent from "./components/Forms/ControlledComponent";
import FormValidations from "./components/Forms/FormValidations";
import FormTask from "./components/Forms/FormTask";
import AsyncValidation from "./components/Forms/AsyncValidation";
import Login from "./pages/login";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error";
import Posts from "./pages/Posts";
import UseNavigate from "./pages/UseNavigate";

function App() {
  return (
    // <div>
    //   {/* <UseEffect /> */}
    //   {/* <DependancyArray /> */}
    //   {/* <UseRef /> */}
    //   {/* <UseReducer /> */}
    //   {/* <UseCallBack /> */}
    //   {/* <UseMemo /> */}
    //   {/* <UseLayoutEffect /> */}
    //   {/* <ChildComponent /> */}
    //   {/* <Parent /> */}
    //   {/* <UncontrolledComponent /> */}
    //   {/* <ControlledComponent /> */}
    //   {/* <FormValidations /> */}
    //   {/* <FormTask /> */}
    //   {/* <AsyncValidation /> */}

    // </div>

    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about/*" element={<About />} />
          <Route path="posts/:params" element={<Posts />} />
          <Route path="*" element={<Error />} />
          <Route path="usenavigate" element={<UseNavigate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
