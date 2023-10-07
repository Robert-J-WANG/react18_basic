import React from "react";
import "./Component_09.css";
import avatar from "../images/avatar.png";
import { nanoid } from "nanoid";

const formatData = (time) => {
  //2023-10-10
  return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
};
export default class Component_09 extends React.Component {
  // 依赖的数据
  state = {
    // hot: 热度排序  time: 时间排序
    tabs: [
      {
        id: 1,
        name: "热度",
        type: "hot",
      },
      {
        id: 2,
        name: "时间",
        type: "time",
      },
    ],
    active: "hot", // 控制tab是否激活的属性
    comment: "enter comment here", // 控制添加评论的属性
    list: [
      {
        id: 1,
        author: "刘德华",
        comment: "给我一杯忘情水",
        time: new Date("2021-10-10 09:09:00"),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 1,
      },
      {
        id: 2,
        author: "周杰伦",
        comment: "哎哟，不错哦",
        time: new Date("2021-10-11 09:09:00"),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0,
      },
      {
        id: 3,
        author: "五月天",
        comment: "不打扰，是我的温柔",
        time: new Date("2021-10-11 10:09:00"),
        // 1: 点赞 0：无态度 -1:踩
        attitude: -1,
      },
    ],
  };
  // 切换tab的回调
  switchTag = (type) => {
    // 点击谁，就把谁的type属性值设置给state的active属性
    this.setState({
      active: type,
    });
  };
  // 受控组件的回调
  changeComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  // 发表评论的回调
  submitComment = () => {
    // 原理：给状态里的list 数组追加一个元素
    const newComment = {
      id: nanoid(),
      author: "someone",
      comment: this.state.comment,
      time: new Date(),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 0,
    };
    this.setState({
      list: [...this.state.list, newComment],
      // 清空评论内容
      comment: "",
    });
    // 清空评论内容
  };
  // 删除评论的回调
  deleteComment = (id) => {
    this.setState({
      list: this.state.list.filter((comment) => id !== comment.id),
    });
  };

  // 点赞的回调
  toggleLike = (currentItem) => {
    console.log(currentItem);
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === currentItem.id) {
          return { ...item, attitude: currentItem.attitude === 1 ? 0 : 1 };
        } else {
          return item;
        }
      }),
    });
  };
  // 点踩的回调
  toggleHate = (currentItem) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === currentItem.id) {
          return { ...item, attitude: currentItem.attitude === -1 ? 0 : -1 };
        } else {
          return item;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <div className="myApp">
          <div className="comment-container">
            {/* 评论数 */}
            <div className="comment-head">
              <span>{this.state.list.length} 评论</span>
            </div>
            {/* 排序 */}
            <div className="tabs-order">
              <ul className="sort-container">
                {this.state.tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={tab.type === this.state.active ? "on" : ""}
                    onClick={() => {
                      this.switchTag(tab.type);
                    }}
                  >
                    按{tab.name}排序
                  </li>
                ))}
              </ul>
            </div>

            {/* 添加评论 */}
            <div className="comment-send">
              <div className="user-face">
                <img className="user-head" src={avatar} alt="" />
              </div>
              <div className="textarea-container">
                {/* 添加评论的表单域，使用受控组件 */}
                <textarea
                  cols="80"
                  rows="5"
                  placeholder="发条友善的评论"
                  className="ipt-txt"
                  value={this.state.comment}
                  onChange={this.changeComment}
                />
                <button className="comment-submit" onClick={this.submitComment}>
                  发表评论
                </button>
              </div>
              <div className="comment-emoji">
                <i className="face"></i>
                <span className="text">表情</span>
              </div>
            </div>

            {/* 评论列表 */}
            <div className="comment-list">
              {this.state.list.map((item) => (
                <div key={item.id} className="list-item">
                  <div className="user-face">
                    <img className="user-head" src={avatar} alt="" />
                  </div>
                  <div className="comment">
                    <div className="user">{item.author}</div>
                    <p className="text">{item.comment}</p>
                    <div className="info">
                      <span className="time">{formatData(item.time)}</span>
                      <span
                        className={item.attitude === 1 ? "like liked" : "like"}
                        onClick={() => {
                          this.toggleLike(item);
                        }}
                      >
                        <i className="icon" />
                      </span>
                      <span
                        className={item.attitude === -1 ? "hate hated" : "hate"}
                        onClick={() => {
                          this.toggleHate(item);
                        }}
                      >
                        <i className="icon" />
                      </span>
                      <span
                        className="reply btn-hover"
                        onClick={() => {
                          this.deleteComment(item.id);
                        }}
                      >
                        删除
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
