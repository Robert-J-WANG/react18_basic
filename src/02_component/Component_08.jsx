import React, { createRef } from "react";

class Test extends React.Component {
  myRef = createRef();
  changeHandler = () => {
    alert(this.myRef.current.value);
  };
  render() {
    return (
      <>
        <div>
          <input ref={this.myRef} type="text" />
          <button onClick={this.changeHandler}>click</button>
        </div>
      </>
    );
  }
}
export default function Component_08() {
  return (
    <>
      <div>
        了解内容：什么是非受控组件？
        非受控组件就是通过手动操作dom的方式获取文本框的值，文本框的状态不受react组件的state中的状态控制，直接通过原生dom获取输入框的值
        <p>实现：以获取文本框的值为例，受控组件的使用步骤如下：</p>
        <p>1. 导入createRef 函数</p>
        <p>
          2. 调用createRef函数，创建一个ref对象，存储到名为msgRef的实例属性中
        </p>
        <p>3. 为input添加ref属性，值为msgRef</p>
        <p>
          4.
          在按钮的事件处理程序中，通过msgRef.current即可拿到input对应的dom元素，而其中msgRef.current.value拿到的就是文本框的值
        </p>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>

      <div>
        <Test />
      </div>
    </>
  );
}
