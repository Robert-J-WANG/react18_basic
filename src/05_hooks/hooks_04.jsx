import React from "react";
import { useMousePosition } from "./useMousePosition";

export default function Hooks_04() {
  const [x, y] = useMousePosition();
  return (
    <>
      <div>
        <p>自定义一个hooks,加深对hooks的理解</p>
        <ul>
          定义一个useMousePosition hooks，返回mouse的坐标
          <li>1.组件外部定义函数useMousePosition，返回值为mouse的坐标</li>
          <li>2.将外部的函数引入到组件使用</li>
        </ul>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        <p>x坐标是：{x}</p>
        <p>y坐标是：{y}</p>
      </div>
    </>
  );
}
