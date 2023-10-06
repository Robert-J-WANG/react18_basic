import React from "react";

/* 
react如何完成列表的渲染？
技术栈：map函数 :重复渲染的是哪个模版，就return谁
*/

const fontEnds = [
  { id: 1, name: "React" },
  { id: 2, name: "Vue" },
  { id: 3, name: "Unknow" },
];
export default function Basic_02() {
  return (
    <>
      <div>
        react如何完成列表的渲染？
        <p>技术栈：map函数 :重复渲染的是哪个模版，就return谁</p>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <ul>
        {/* 
    <li>React</li>
    <li>Vue</li>
    <li>Unknow</li>
     */}
        {fontEnds.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
