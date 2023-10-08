import React, { Component } from "react";

export class ComAdvanced_05 extends Component {
  render() {
    return (
      <>
        <div>
          组件通信的基本实现：父传子
          <p>原理：父组件的state中保存数据，子组件通过props属性获取</p>
          <p>类式子组件通过this.props, 函数式组件通过参数props获取</p>
          <hr style={{ margin: "10px auto", width: "80vw" }} />
        </div>
        <div></div>
      </>
    );
  }
}

export default ComAdvanced_05;
