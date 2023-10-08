import React from "react";

// 子组件通过props接收数据，并直接解构
function Test({
  studentID,
  schoolName,
  isEnrolled,
  papers,
  student,
  getMsg,
  children,
}) {
  return (
    <>
      <h2>student info</h2>
      {/* 接收并使用数据 */}
      <p>studentID:{studentID}</p>
      <p>schoolName:{schoolName}</p>
      <p>isEnrolled:{isEnrolled ? "Yes" : "No"}</p>
      <ul>
        papers:
        {papers.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>
        student:{student.name}-{student.sex}
      </p>
      <button onClick={getMsg}>what message ?</button>
      <p>what JSX ? :{children}</p>
    </>
  );
}

export default class Communicate_03 extends React.Component {
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
          props的解构赋值，推荐的用法
          <p>直接在函数组件形参的位置解构，就可以直接使用解构后的属性名了</p>
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
