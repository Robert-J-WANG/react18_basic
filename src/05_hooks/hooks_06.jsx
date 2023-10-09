import React, { useEffect, useState } from "react";

export default function Hooks_06() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // 副作用函数
    let timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    // 清理定时器，组件更新时,每次下次状态更新之前自动执行
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return (
    <>
      <div>
        <p>
          如果想要清理副作用
          可以在副作用函数中的末尾return一个新的函数，在新的函数中编写清理副作用的逻辑
        </p>
        <ul>
          注意执行时机为：
          <li>1.组件卸载时自动执行</li>
          <li>2.组件更新时，下一个useEffect副作用函数执行之前自动执行</li>
        </ul>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        <p>count:{count}</p>
      </div>
    </>
  );
}
