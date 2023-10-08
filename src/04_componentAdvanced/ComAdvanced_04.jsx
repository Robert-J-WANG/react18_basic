import React, { Component } from "react";
import "./todo.css";
import Search from "antd/es/input/Search";
import { Table } from "antd";
import axios from "axios";

export class ComAdvanced_04 extends Component {
  state = {
    // 表格数据
    list: [],
    // 表头
    columns: [
      {
        title: "任务编号",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "任务名称",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "任务描述",
        dataIndex: "des",
        key: "des",
      },
      {
        title: "操作",
        dataIndex: "do",
        key: "do",
        render: (text, record) => (
          <Space size="middle">
            <Popconfirm
              title="确定要删除吗?"
              onConfirm={() => this.handleDelete(record.id)}
            >
              <a href="#">删除</a>
            </Popconfirm>
          </Space>
        ),
      },
    ],
  };
  onSearch = async (value) => {
    console.log(value);
    // const res = await axios.get(`http://localhost:3001/data/?name=${value}`);
    // this.setState({ list: res.data });
  };

  //  获取数据：一般都先封装一个函数
  getlist = async () => {
    console.log(1111);
    // const res = await axios.get("http://localhost:3001/data");
    // console.log(res);
    // this.setState({ list: res.data });
  };
  // 渲染数据
  componentDidMount() {
    this.getlist();
  }

  render() {
    return (
      <>
        <div>
          todoMVC
          <p>使用 antD ui组件库</p>
          <p>功能：搜索和删除</p>
          <ul>
            步骤：
            <li>1. 找到对应的antd组件，搭建页面</li>
            <li>
              2. table数据的渲染（ 发送请求（componentDidMount ）拿到数据，
              交给list （ this.setState 更新））
            </li>
            <li>
              2. table数据的渲染（ 发送请求（componentDidMount ）拿到数据，
              交给list （ this.setState 更新））
            </li>
          </ul>
          <hr style={{ margin: "10px auto", width: "80vw" }} />
        </div>
        <div className="container">
          <div className="search-box">
            {/* search部分 */}
            {/* 搜索框 on打头的一般都是事件 */}
            {/* onSearch事件是在点击搜索、回车、清空时触发， value是当前输入框的值 */}
            <Search
              placeholder="请输入关键词"
              allowClear
              enterButton="搜索"
              size="large"
              onChange={this.inputChange}
              value={this.state.keyword}
              onSearch={this.onSearch}
            />
          </div>
          {/* table依赖2个数据：columns用来定义表头，dataSource渲染各个内容的数据 */}
          <Table
            bordered
            dataSource={this.state.list}
            columns={this.state.columns}
            pagination={false}
          />
        </div>
      </>
    );
  }
}

export default ComAdvanced_04;
