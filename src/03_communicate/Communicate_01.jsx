import React from "react";

// 类式子组件
class TestC extends React.Component {
  render() {
    // 获取父组件传递的数据
    return <p>i am a class component,{this.props.message}</p>;
  }
}
// 函数式子组件, 需要通过形参props
function TestF(props) {
  // 获取父组件传递的数据,通过形参props
  return <p>i am a function component,{props.message}</p>;
}

// 父组件
export default class Communicate_01 extends React.Component {
  // 父组件中创建state，保存数据
  state = {
    msg: "this is a message",
  };
  render() {
    return (
      <>
        <div>
          组件通信的基本实现：父传子
          <p>原理：父组件的state中保存数据，子组件通过props属性获取</p>
          <p>类式子组件通过this.props, 函数式组件通过参数props获取</p>
          <hr style={{ margin: "10px auto", width: "80vw" }} />
        </div>
        <div>
          {/* 引入子组件 */}
          {/* 传递数据给类式子组件 */}
          <TestC message={this.state.msg} />
          {/* 传递数据给函数式子组件 */}
          <TestF message={this.state.msg} />
        </div>
      </>
    );
  }
}
