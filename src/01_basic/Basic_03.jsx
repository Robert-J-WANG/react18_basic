import React from "react";

// 条件渲染：
// 技术方案：
// 1. 三元表达式（常用）
// 2. &&运算符
const flag = true;
export default function Basic_03() {
  return (
    <>
      <div>
        条件渲染：
        <p>技术方案：</p>
        <p>1. 三元表达式（常用）</p>
        <p>2. &&运算符</p>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      {flag ? (
        <div>
          <span>this is a span</span>
        </div>
      ) : null}
      {/* /////////////分割线//////////// */}
      {flag && (
        <div>
          <p>this is a p</p>
        </div>
      )}
    </>
  );
}
