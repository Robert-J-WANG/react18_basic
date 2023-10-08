import React, { createContext } from "react";
// 1. 使用createContext方法创建context对象，并解构出provider和consumer子对象
const { Provider, Consumer } = createContext();
// 创建A组件和B组件，并且嵌套B组件到A组件中
function B() {
  return (
    <div>
      我是B组件
      <Consumer>{(value) => <p>我接收到的数据是：{value} </p>}</Consumer>
    </div>
  );
}

function A() {
  return (
    <div>
      我是A组件
      <B />
    </div>
  );
}
export default function Communicate_06() {
  const msg = "this is a message from APP"; // 需要传递的数据

  return (
    // 2. provider包裹APP,通过value携带数据
    <Provider value={msg}>
      <div>
        如何跨组件通信（对层嵌套组件）：
        <p>比如：APP👉A👉B, APP把数据隔着A直接传递给B</p>
        <p>实现：</p>
        <p>
          1
          ：使用createContext方法创建context对象，并解构出provider和consumer子对象
        </p>
        <p>
          2 ：provider包裹APP（数据提供者），并通过value属性携带需要传递的数据
        </p>
        <p>3 ：consumer包裹B（数据使用者），并使用value属性所携带的数据</p>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        <A />
      </div>
    </Provider>
  );
}
