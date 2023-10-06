import React from "react";

export default function Component_01() {
  const handlerClick = () => {
    alert("点击了啊");
  };
  return (
    <div>
      <div>
        如何绑定事件：
        <p>语法：on+事件名称= 花括号（事件处理程序）</p>
        <p>注意点：事件采用驼峰命名法</p>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        <button onClick={handlerClick}>点我哦</button>
      </div>
    </div>
  );
}
