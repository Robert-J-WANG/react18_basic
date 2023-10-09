import React, { useEffect, useRef, useState } from "react";

export default function Hooks_08() {
  const tRef = useRef();
  const cRef = useRef();
  useEffect(() => {
    console.log(tRef.current, cRef.current);
  }, []);
  return (
    <>
      <div>
        <p>useRef在函数组件中获取真实的dom元素对象或者是组件对象</p>
        <ul>
          使用步骤
          <li>1.导入 useRef 函数</li>
          <li>
            2.执行 useRef 函数并传入null，返回值为一个对象
            内部有一个current属性存放拿到的dom对象（组件实例）
          </li>
          <li>3.通过ref 绑定 要获取的元素或者组件</li>
        </ul>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        <h1 ref={tRef}>count title</h1>
        <p ref={cRef}>count content</p>
      </div>
    </>
  );
}
