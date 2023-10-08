import React, { Component } from "react";
import PropTypes from "prop-types";

function Test({ name }) {
  return <div>{name}</div>;
}
Test.propTypes = {
  name: PropTypes.array,
};
export class ComAdvanced_02 extends Component {
  // 定义props类型
  render() {
    return (
      <>
        <div>
          对于组件来说，props是由外部传入的，我们其实无法保证组件使用者传入了什么格式的数据，如果传入的数据格式不对，就有可能会导致组件内部错误，有一个点很关键
          - 组件的使用者可能报错了也不知道为什么
          <ul>
            实现步骤
            <li>1.安装属性校验包：yarn add prop-types</li>
            <li>2.导入prop-types 包</li>
            <li>3.使用 组件名.propTypes = {} 给组件添加校验规则</li>
          </ul>
          <ul>
            四种常见结构
            <li>1.常见类型：array、bool、func、number、object、string</li>
            <li>2.React元素类型：element</li>
            <li>3.必填项：isRequired</li>
            <li>4.特定的结构对象：shape({})</li>
          </ul>
          <hr style={{ margin: "10px auto", width: "80vw" }} />
        </div>
        <div>
          {/* ComAdvanced_02.jsx:34 Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `Test`, expected `array`. */}
          {/* <Test name={11} />  */}
          <Test name={["jack", " ", "peter"]} />
        </div>
      </>
    );
  }
}

export default ComAdvanced_02;
