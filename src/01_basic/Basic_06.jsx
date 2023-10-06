// 动态控制样式：
// 1. 常用类名样式 : className, 从外部导入样式表
// 2. 添加一个变量，三元表达式来控制

export default function Basic_06() {
  const flagActive = true;
  return (
    <div>
      <div>
        动态控制样式：
        <p>1. 常用类名样式 : className, 从外部导入样式表</p>
        <p>2. 添加一个变量，三元表达式来控制</p>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        <span className={flagActive ? "pActive" : " "}>this a span </span>
      </div>
    </div>
  );
}
