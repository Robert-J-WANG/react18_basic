import React from "react";

// 子组件
function Son({ getMsg }) {
  return (
    <>
      <p>我是子组件</p>
      {/* 3.子组件接收函数，并把数据以实参的形式传递进去，注意使用箭头函数 */}
      <button onClick={() => getMsg("我是子组件传递的数据")}>
        点我传递数据给父组件
      </button>
    </>
  );
}

export default class Communicate_04 extends React.Component {
  // 1. 准备一个函数
  state = {
    msg: "Hello",
  };
  getMsg = (newMsg) => {
    // 4.使用子组件传递来的数据，更新状态
    this.setState({ msg: newMsg });
  };
  render() {
    return (
      <>
        <div>
          如何子传父？
          <p>通过props传递一个函数</p>
          <p>
            子组件接收并调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传入
          </p>
          <hr style={{ margin: "10px auto", width: "80vw" }} />
        </div>
        <div>
          {/* 5. 使用新的状态属性 */}
          <p>我是父组件，我接受的数据是：{this.state.msg}</p>
          <hr />
          {/* 2. 传递函数给子组件 */}
          <Son getMsg={this.getMsg} />
        </div>
      </>
    );
  }
}
