import React from "react";

// jsx中能使用表达式，但不能使用语句
/* 
1. jsx中使用变量
2. jsx中使用原生js函数调用
3. jsx中使用三元运算符 
*/

// 1. jsx中使用变量
const name = "Robert";
// 2. jsx中使用原生js函数调用
const getAge = () => {
  return " 18 years old";
};
// 3. jsx中使用三元运算符
const flag = true;

export default function Index_01() {
  return (
    <>
      <div>
        jsx中能使用表达式，但不能使用语句
        <p>1. jsx中使用变量</p>
        <p>2. jsx中使用原生js函数调用</p>
        <p>3. jsx中使用三元运算符</p>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <p>{name}</p>
      <p>{getAge()}</p>
      <p>{flag ? "funny" : "boring"}</p>
    </>
  );
}
