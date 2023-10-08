import React from "react";

// 目标： 子组件A把数据传递给子组件B

// 子组件A
function SonA({ getMsg }) {
  return (
    <>
      <p>我是子组件A</p>
      {/* 2.子组件接收函数，并把数据以实参的形式传递进去，注意使用箭头函数 */}
      <button onClick={() => getMsg("我是子组件A传递的数据")}>
        点我传递数据给及组件B
      </button>
    </>
  );
}

// 子组件B
function SonB({ msg }) {
  return (
    <>
      <p>我是子组件B</p>
      {/* 5. 子组件B接收父组件传递的数据，并使用 */}
      <p>我接受的数据是：{msg}</p>
    </>
  );
}

export default class Communicate_05 extends React.Component {
  state = {
    msgSendToB: "Hello",
  };
  getMsg = (newMsg) => {
    // 3.使用子组件A传递来的数据，更新状态
    this.setState({ msgSendToB: newMsg });
  };
  render() {
    return (
      <>
        <div>
          如何兄弟通讯？
          <p>通过props传递一个函数</p>
          <p>
            1.子组件A接收并调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传入
          </p>
          <p>2.父组件把来自子组件A的数据再传递给子组件B</p>
          <hr style={{ margin: "10px auto", width: "80vw" }} />
        </div>
        <div>
          {/* 1. 传递函数给子组件A */}
          <SonA getMsg={this.getMsg} />
          <hr />
          {/* 4. 把更新后的状态传递给B */}
          <SonB msg={this.state.msgSendToB} />
        </div>
      </>
    );
  }
}
