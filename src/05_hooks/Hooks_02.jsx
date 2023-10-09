import React, { useState, useEffect } from "react";
import { Button } from "antd";

export default function Hooks_02() {
  // 解构出状态和修改状态的方法
  const [count, setCount] = useState(0);
  // 增加count的回调
  const addCount = () => {
    // 修改状态，注意不能修改原值count++
    setCount(count + 1);
  };
  useEffect(() => {
    // 定义副作用，修改DOM标题
    document.title = count;
  });
  return (
    <>
      <div>
        <p>useEffect函数的作用就是为react函数组件提供副作用处理的</p>
        <p>
          副作用是相对于主作用来说的，一个函数除了主作用，其他的作用就是副作用。对于
          React 组件来说，主作用就是根据数据（state/props）渲染
          UI，除此之外都是副作用（比如，手动修改 DOM）
        </p>
        <ul>
          常见的副作用
          <li>1.数据请求 ajax发送</li>
          <li>2.手动修改dom</li>
          <li>3.localstorage操作</li>
        </ul>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        {/* 使用状态数据 */}
        <p>count : {count}</p>
        <Button onClick={addCount}>click to ADD</Button>
      </div>
    </>
  );
}
