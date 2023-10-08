import { NavLink, Route, Routes } from "react-router-dom";
import React from "react";
import { componentsData } from "./componentsData";
// const componentsData = [
//   { id: 1, url: "/index_01", name: "01_使用表达式", element: <Index_01 /> },
//   { id: 2, url: "/index_02", name: "02_列表渲染", element: <Index_02 /> },
// ];

function App() {
  return (
    <div className="appContainer">
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
