import React, { Component } from "react";

// 1. 定义一个子组件
function Son({ children }) {
  console.log(children); //['hello world', undefined, {…}, {…}]
  return <div>我接受的的children数据是：{children.map((item) => item)}</div>;
}
export class ComAdvanced_01 extends Component {
  getMsg = () => {
    console.log("hello world");
  };
  render() {
    return (
      <>
        <div>
          组件通信props的children属性比较特使，所以传递给组件内部的数据都会收集进children里,数组的形式
          <p>可以传递变量，方法，标签和JSX模版文件</p>
          <hr style={{ margin: "10px auto", width: "80vw" }} />
        </div>
        <div>
          {/* 2.引入子组件，并在组件内部传递内容 */}
          <Son>
            {/* 传递变量 */}
            {"hello world"}
            {/* 传递方法 */}
            {this.getMsg()}
            {/* 传递标签 */}
            {<h2>hello, this is a span</h2>}
            {/* JSX模版 */}
            {<div>{"hello"}</div>}
          </Son>
        </div>
      </>
    );
  }
}

export default ComAdvanced_01;
