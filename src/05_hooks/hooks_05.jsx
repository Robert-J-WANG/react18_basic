import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function Hooks_05() {
  // 使用useLocalStorage,解构出 message, setMessage
  const [message, setMessage] = useLocalStorage("msg-key", "hello");
  // 更新message
  setTimeout(() => {
    setMessage("hello world!");
  }, 2000);
  return (
    <>
      <div>
        <p> 自定义一个hook，保存数据到本地存储</p>
        <ul>
          定义一个useLocalStorage hooks，返回保存的值和修改方法
          <li>1.组件外部定义函数useLocalStorage，返回值为保存的值和修改方法</li>
          <li>2.将外部的函数引入到组件使用</li>
        </ul>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        {/*  使用状态 */}
        <p>保存的数据是：{message}</p>
      </div>
    </>
  );
}
