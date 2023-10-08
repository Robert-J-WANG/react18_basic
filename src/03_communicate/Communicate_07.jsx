import React from "react";
// 数据提供者 渲染ListItem组件
// 先不抽离组件，渲染完成后抽离组件

// 4. 封装一个组件ListItem，并接受数据，动态渲染
function ListItem({ item, deleteItem }) {
  return (
    <>
      <h2>name:{item.name}</h2>
      <p>info:{item.info}</p>

      <button onClick={() => deleteItem(item.id)}>delete</button>
    </>
  );
}
export default class Communicate_07 extends React.Component {
  // 1.准备数据
  state = {
    list: [
      { id: 1, name: "hellload1", info: "asfasdfasdfasf1" },
      { id: 2, name: "hellload2", info: "asfasdfasdfasf2" },
      { id: 3, name: "hellload3", info: "asfasdfasdfasf3" },
    ],
  };
  //5.准备一个删除数据的方法，用于传递给子组件来接收数据的ID
  deleteItem = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  };
  render() {
    return (
      <>
        <div>
          小练习：
          <p>数据提供者 渲染ListItem组件</p>
          <p>先不抽离组件，渲染完成后抽离组件</p>
          <p>
            实现：把数据传递给ListItem组件进行渲染，同时传递一个方法用来删除数据
          </p>
          <hr style={{ margin: "10px auto", width: "80vw" }} />
        </div>
        <>
          {/* 2. 先不抽离组件，渲染完成后抽离组件 */}
          {/* {this.state.list.map((item) => (
            <>
              <h2>name:name</h2>
              <p>info: info</p>
              <button>delete</button>
            </>
          ))} */}
          {/* 3. 抽离组件并传递数据 */}
          {this.state.list.map((item) => (
            <ListItem key={item.id} item={item} deleteItem={this.deleteItem} />
          ))}
        </>
      </>
    );
  }
}
