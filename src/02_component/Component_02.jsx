import React from "react";

export default function Component_02() {
  const handlerClick = (e) => {
    alert("我跳转到youTube");
  };
  const handlerClick2 = (e) => {
    alert("我不会跳转到youTube");
    e.preventDefault();
  };
  return (
    <div>
      <div>
        如何阻止事件的默认行为：
        <p>比如：点击链接，阻止其跳转等</p>
        <p>实现：获取事件对象e,并设置e.preventDefault();</p>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        <a href="https://www.youtube.com/" onClick={handlerClick}>
          点我跳转到youTube
        </a>
        <br />
        <a href="https://www.youtube.com/" onClick={handlerClick2}>
          点我不会跳转到youTube
        </a>
      </div>
    </div>
  );
}
