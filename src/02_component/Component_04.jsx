import React from "react";

class Text extends React.Component {
  //1. 定义状态：
  state = {
    name: "Tom",
  };

  // 修改状态的回调函数
  handlerChangeName = () => {
    // 3. 修改状态： 不能直接赋值操作，而是调用setState方法
    this.setState({ name: "Kate" });
  };
  render() {
    return (
      <div>
        {/* 2. 使用状态 */}
        <h1>my name is {this.state.name}</h1>
        <button onClick={this.handlerChangeName}>change name</button>
      </div>
    );
  }
}

export default function Component_04() {
  return (
    <div>
      <div>
        组件状态的基础使用：
        <p>注意：在hooks出现之前，函数式组件没有状态属性，所以以类式组件为例</p>
        <p>总结：</p>
        <p>1.编写组件其实就是编写原生JS类或者方法</p>
        <p>
          2.定义状态必须通过state 实例属性的方法提供的一个对象，
          名称是固定的，就叫state
        </p>
        <p>
          3.
          修改state对象中的任何属性，都不可以通过直接赋值，必须走setState方法，这个方法来自于继承得到
        </p>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <Text />
    </div>
  );
}
