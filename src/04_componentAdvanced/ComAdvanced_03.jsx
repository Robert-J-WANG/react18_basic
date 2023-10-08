import React, { Component } from "react";
// 函数组件
function TestF({ msg = "hello world" }) {
  return <div>我是函数式组件,默认props值时：{msg}</div>;
}
// 类组件
class TestC extends React.Component {
  static defaultProps = {
    msg: "hello world",
  };
  render() {
    return <div>我是类式组件,默认props值时：{this.props.msg}</div>;
  }
}
export class ComAdvanced_03 extends Component {
  render() {
    return (
      <>
        <ul>
          如何给组件的props提供默认值？
          <li>1. 函数组件:直接使用函数参数默认值</li>
          <li>2. 类组件: 使用类静态属性声明默认值，static defaultProps = {}</li>
          <hr style={{ margin: "10px auto", width: "80vw" }} />
        </ul>
        <div>
          {/* 不传递参数时，使用默认props */}
          <TestF />
          <TestC />
        </div>
      </>
    );
  }
}

export default ComAdvanced_03;
