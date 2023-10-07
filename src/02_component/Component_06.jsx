import React from "react";

class Test extends React.Component {
  state = {
    // 如何更新简单变量？
    count: 0,
    // 如何更新数组变量？
    list: [
      { id: 1, price: 100 },
      { id: 2, price: 200 },
      { id: 3, price: 300 },
    ],
    // 如何更新对象变量？
    person: {
      name: "John",
      age: 34,
    },
  };
  handlerChange = () => {
    this.setState({
      count: this.state.count + 1,
      list: [...this.state.list, { id: Date.now(), price: 400 }], // 数组追加元素
      person: { ...this.state.person, name: "Peter", sex: "male" }, // 对象修改和添加属性
    });
    // console.log(Date.now());
  };
  handlerDelete = () => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== 1), // 数组删除元素
    });
  };
  render() {
    return (
      <>
        <p>count:{this.state.count}</p>
        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}>price:{item.price}</li>
          ))}
        </ul>
        <p>
          {this.state.person.name}-{this.state.person.age}
        </p>

        <button onClick={this.handlerChange}>change</button>
        <button onClick={this.handlerDelete}>delete</button>
      </>
    );
  }
}
export default function Component_06() {
  return (
    <div>
      <div>
        组件状态不可变原则：
        <p>正确的修改状态的方法是：</p>
        <p>
          使用setState方法，现获取原状态，在原状态的基础上创建新的状态,再交回去
        </p>
        <p>对于数组和对象，使用展开运算符，复制原状态，再进行操作</p>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <Test />
    </div>
  );
}
