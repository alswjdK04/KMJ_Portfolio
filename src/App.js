import React from "react";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
//pages
import MainPage from "./component/page/MainPage";
import MyInfoPage from "./component/page/MyInfoPage";
import SkillPage from "./component/page/SkillPage";
import ProjectPage from "./component/page/ProjectPage";
import NavigationButtons from "./component/ui/NavigationButtons";
import "keen-slider/keen-slider.min.css";

const MainTitleText = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-align: left;
`;

function App(props) {

  return (
    <HashRouter>
      <MainTitleText>@김민정 포트폴리오</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/myinfo" element={<MyInfoPage />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes> 
      <NavigationButtons />
    </HashRouter>
  );
}

export default App;
