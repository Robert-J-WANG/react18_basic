import React, { useState, useEffect } from "react";
import { Button } from "antd";

export default function Hooks_03() {
  // 解构出状态和修改状态的方法
  const [count, setCount] = useState(0);
  const [name, setName] = useState("robert");

  /* ------------------------ 设置依赖项 ----------------------- */
  /*  
 // 1. 不添加依赖项时， 组件初次渲染时执行一次，之后每次更新都执行
  useEffect(() => {
    // 定义副作用，修改DOM标题
    document.title = count;
    console.log("副作用执行了");
  }); 
  */

  /*  
 // 2. 添加空数组， 只在组件初次渲染时执行一次，之后每次更新都不会执行
  useEffect(() => {
    // 定义副作用，修改DOM标题
    document.title = count;
    console.log("副作用执行了"); // 只执行1次
  }, []); 
  */

  // 3. 添加依赖项， 只在组件初次渲染时执行一次，之后每次添加的依赖项的更新，都回执行副作用函数。可以独立设置需要执行的依赖项，（哪个状态的改变会触发副作用函数的执行）
  useEffect(() => {
    // 定义副作用，修改DOM标题
    document.title = count; // 副作用函数
  }, [count]);

  return (
    <>
      <div>
        <p>useEffect添加依赖项来控制执行时机</p>
        <ul>
          依赖项
          <li>
            1.默认是为不添加依赖项，副作用函数在组件首次渲染执行一次，以及不管是哪个状态更改引起组件更新时都会重新执行
          </li>
          <li>2.添加空数组，组件只在首次渲染时执行一次</li>
          <li>
            3.添加特定依赖项，副作用函数在首次渲染时执行，在依赖项发生变化时重新执行
          </li>
          <li>
            4.useEffect
            回调函数中用到的数据（比如，count）就是依赖数据，就应该出现在依赖项数组中，如果不添加依赖项就会有bug出现
          </li>
        </ul>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        {/* 使用状态数据 */}
        <p>count : {count}</p>
        <Button onClick={() => setCount(count + 1)}>click to ADD</Button>
        <Button onClick={() => setName("jacky")}>change name</Button>
      </div>
    </>
  );
}
