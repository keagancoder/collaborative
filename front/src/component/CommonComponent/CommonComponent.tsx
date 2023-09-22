import React, { FC } from 'react';
import './CommonComponent.less';
import ReactGridComponent from '../ReactGridComponent/ReactGridComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecondLevelComponent from '../SecondLevelComponent/SecondLevelComponent';
import ThirdLevelComponent from '../ThirdLevelComponent/ThirdLevelComponent';

interface CommonComponentProps {}

const CommonComponent: FC<CommonComponentProps> = () => (
  <>

  <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<ReactGridComponent domElements={[]}/>}/> {/* 👈 Renders at /app/ */}
        <Route path="/detail" element={<SecondLevelComponent dataList={[]}/>}/> {/* 👈 Renders at /app/ */}
        <Route path="/sumbit" element={<ThirdLevelComponent/>}/> {/* 👈 Renders at /app/ */}
      </Routes>
  </BrowserRouter>
    
  </>
);

export default CommonComponent;
