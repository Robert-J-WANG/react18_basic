import React from "react";

export default function Component_03() {
  const handlerClick = (msg) => {
    alert(msg);
  };
  const handlerClick2 = (e, msg) => {
    alert(msg);
    alert(e.target.innerHTML);
  };
  return (
    <div>
      <div>
        如何传递自定义的参数到事件中：
        <p>实现：事件绑定一个箭头函数的调用，在箭头函数中传递参数;</p>
        <p>既要传递事件对象e,也需要传递自定义参数，如何实现？</p>
        <p>事件绑定的箭头函数的调用是，同时传递事件对象e和自定义参数</p>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        <button onClick={() => handlerClick("我是自定义参数")}>
          点我啊，我要传递自定义参数
        </button>
        <br />
        <button onClick={(e) => handlerClick2(e, "我是自定义参数")}>
          点我啊,我要同时传递事件对象event和自定义参数
        </button>
      </div>
    </div>
  );
}
