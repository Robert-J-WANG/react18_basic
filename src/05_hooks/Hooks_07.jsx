import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Hooks_07() {
  const [channel, setChannel] = useState([]);
  useEffect(() => {
    // 副作用函数,发送网络请求，组件初始化的时候执行，所以不添加依赖
    // 需要在内部单独创建方法来发送异步请求
    const getChannel = async () => {
      const res = await axios.get("http://geek.itheima.net/v1_0/channels");
      console.log(res.data.data.channels);
      setChannel(res.data.data.channels);
    };
    // 调用异步函数
    getChannel();
  }, []);
  return (
    <>
      <div>
        <p>useEffect - 发送网络请求</p>
        <ul>
          在useEffect中发送网络请求，并且封装同步 async await操作
          <li>
            1.不可以直接在useEffect的回调函数外层直接包裹 await
            ，因为异步会导致清理函数无法立即返回
          </li>
          <li>2.在内部单独定义一个函数，然后把这个函数包装成同步</li>
        </ul>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        <ul>
          {channel.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
