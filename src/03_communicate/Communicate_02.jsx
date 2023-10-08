import React from "react";

// 子组件通过props接收数据
function Test(props) {
  return (
    <>
      <h2>student info</h2>
      {/* 接收并使用数据 */}
      <p>studentID:{props.studentID}</p>
      <p>schoolName:{props.schoolName}</p>
      <p>isEnrolled:{props.isEnrolled ? "Yes" : "No"}</p>
      <ul>
        papers:
        {props.papers.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>
        student:{props.student.name}-{props.student.sex}
      </p>
      <button onClick={props.getMsg}>what message ?</button>
      <p>what JSX ? :{props.children}</p>
    </>
  );
}

export default class Communicate_02 extends React.Component {
  state = {
    studentID: 999, //数字
    schoolName: "Unitec", //字符串
    isEnrolled: false, //布尔值
    papers: [
      { id: 1, name: "GUI" },
      { id: 2, name: "WEB" },
      { id: 3, name: "MOBILE" },
    ], // 数组
    student: {
      name: "Robert",
      sex: "male",
    }, // 对象
  };

  // 函数。
  getMsg = () => {
    alert("this is a message from the function of parent component");
  };
  render() {
    return (
      <>
        <div>
          父子通讯时，可传递多种数据类型的数据
          <p>比如：数字，字符串，布尔值，数组，对象，函数，JSX（模版文件）</p>
          <hr style={{ margin: "10px auto", width: "80vw" }} />
        </div>
        <div>
          <Test
            //可传递的数据类型：数字，字符串，布尔值，数组，对象，函数，JSX（模版文件）
            studentID={this.state.studentID}
            schoolName={this.state.schoolName}
            isEnrolled={this.state.isEnrolled}
            papers={this.state.papers}
            student={this.state.student}
            getMsg={this.getMsg}
            children={<span>this is a span</span>}
          />
        </div>
      </>
    );
  }
}
