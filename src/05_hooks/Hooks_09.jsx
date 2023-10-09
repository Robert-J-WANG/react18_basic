import React, { createContext, useContext, useEffect, useState } from "react";
import { Button } from "antd";
const countContext = createContext();
function C() {
  const count = useContext(countContext);
  return (
    <>
      <p>this is C </p>
      <p>the count is {count}</p>
    </>
  );
}
function A() {
  const count = useContext(countContext);
  return (
    <>
      <p>this is A </p>
      <p>the count is {count}</p>
      <C />
    </>
  );
}

export default function Hooks_09() {
  const [count, setCount] = useState(0);
  return (
    <countContext.Provider value={count}>
      <div>
        <p>useContext</p>
        <ul>
          实现步骤
          <li>1.使用createContext 创建Context对象</li>
          <li>2.在顶层组件通过Provider 提供数据</li>
          <li>3.在底层组件通过useContext函数获取数据</li>
        </ul>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        <A />
        <Button onClick={() => setCount(count + 1)}>click</Button>
      </div>
    </countContext.Provider>
  );
}
