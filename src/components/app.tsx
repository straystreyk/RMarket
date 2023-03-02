import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Test } from "./test";
import Domik from "../assets/icons/pipa.svg";
import Bidon from "../assets/images/bidon.jpg";

export const App: React.FC = () => {
  return (
    <>
      <img style={{ width: 250 }} src={Bidon} alt="BIDON" />
      <Domik />
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/test" element={<Test test="pipa" />} />
      </Routes>
    </>
  );
};
