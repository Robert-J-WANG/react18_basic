import React from "react";

// 定义类式组件
class Couter extends React.Component {
  state = {
    count: 0,
  };
  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <>
        <p>当前数字是 {this.state.count}</p>
        <button onClick={this.addCount}>点我加1</button>
        <button onClick={this.decreaseCount}>点我减1</button>
      </>
    );
  }
}

export default function Component_05() {
  return (
    <div>
      {/* 渲染类式组件 */}
      <Couter />
    </div>
  );
}
