import React from "react";

class Test extends React.Component {
  state = {
    message: "this is a msg",
  };
  changeHandler = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  render() {
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.message}
            onChange={this.changeHandler}
          />
        </div>
      </>
    );
  }
}
export default function Component_07() {
  return (
    <>
      <div>
        什么是受控组件？ input框自己的状态被React组件状态控制
        <p>
          原理：React组件的状态的地方是在state中，input表单元素也有自己的状态是在value中，React将state与表单元素的值（value）绑定到一起，由state的值来控制表单元素的值，从而保证单一数据源特性
        </p>
        <p>实现：以获取文本框的值为例，受控组件的使用步骤如下：</p>
        <p>1. 在组件的state中声明一个组件的状态数据</p>
        <p>2. 将状态数据设置为input标签元素的value属性的值</p>
        <p>
          3.
          为input添加change事件，在事件处理程序中，通过事件对象e获取到当前文本框的值（即用户当前输入的值）
        </p>
        <p>4. 调用setState方法，将文本框的值作为state状态的最新值</p>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>

      <div>
        <Test />
      </div>
    </>
  );
}
