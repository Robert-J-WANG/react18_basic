import { Button } from "antd";
import React, { useState } from "react";

export default function Hooks_01() {
  // 解构出状态和修改状态的方法
  const [count, setCount] = useState(0);
  // 增加count的回调
  const addCount = () => {
    // 修改状态，注意不能修改原值count++
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <p>useState为函数组件提供状态（state）</p>
        <ul>
          使用步骤
          <li>1.导入 useState 函数</li>
          <li>2.调用 useState 函数，并传入状态的初始值</li>
          <li>
            3.从useState函数的返回值中，拿到状态和修改状态的方法,useState函数的返回值是一个数组，相当于结构出数组中的元素
          </li>
          <li>4.在JSX中展示状态</li>
          <li>5.调用修改状态的方法更新状态</li>
        </ul>
        <ul>
          状态的读取和修改 const [count,setCount]=useState(0)
          <li>1.useState传过来的参数0，作为count的初始值</li>
          <li>
            2.[count,setCount]
            这里的写法是一个解构赋值，useState返回值是一个数组
          </li>
          <li>名字可以自定义吗？→可以自定义，保持语义化</li>
          <li>
            顺序可以换吗？→不可以，因为数组是有序的，第一个参数就是数据状态，第二个参数就是修改数据的方法
          </li>
          <li>
            3.setCount函数，
            作用是来修改数据状态count，在原值的基础上生成一个新值，替换掉原值，setCount(基于原值计算得到的新值)
            不能是count++, 可以是count+1
          </li>
          <li>
            4.count,setCount是一对，是绑在一起的，setCount只能修改count的值，不能修改其他状态的值
          </li>
        </ul>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        {/* 使用状态数据 */}
        <p>count : {count}</p>
        <Button onClick={addCount}>click to ADD</Button>
      </div>
    </>
  );
}
