import { NavLink, Route, Routes } from "react-router-dom";
import Index_01 from "./basic/Index_01";
import Index_02 from "./basic/Index_02";
import Index_03 from "./basic/Index_03";
import Index_04 from "./basic/Index_04";
import Index_05 from "./basic/Index_05";
import Index_06 from "./basic/Index_06";
import Index_07 from "./basic/Index_07";
import React from "react";

const componentsData = [
  { id: 1, url: "/index_01", name: "01_使用表达式", element: <Index_01 /> },
  { id: 2, url: "/index_02", name: "02_列表渲染", element: <Index_02 /> },
  { id: 3, url: "/index_03", name: "03_条件渲染", element: <Index_03 /> },
  { id: 4, url: "/index_04", name: "04_模版精简原则", element: <Index_04 /> },
  { id: 5, url: "/index_05", name: "05_JS样式控制", element: <Index_05 /> },
  { id: 6, url: "/index_06", name: "06_动态控制样式", element: <Index_06 /> },
  { id: 7, url: "/index_07", name: "07_JSX阶段小练习", element: <Index_07 /> },
];

function App() {
  return (
    <div className="container">
      <nav className="nav">
        {componentsData.map((item) => (
          <NavLink key={item.id} to={item.url}>
            {item.name}
          </NavLink>
        ))}
      </nav>
      <main className="main">
        <Routes>
          {componentsData.map((item) => (
            <Route key={item.id} path={item.url} element={item.element} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
