// JS样式控制：
// 1. 行内样式  styel={{}}
// 2. 类名样式 : className, 从外部导入样式表

export default function Index_05() {
  const style = { color: "red", fontSize: "40px" };
  return (
    <div>
      <div>
        JS样式控制：
        <p>1. 行内样式:添加样式属性，并将所有样式抽离为一个对象</p>
        <p>2. 类名样式:使用className属性, 从外部导入样式表</p>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        <span style={style}>this a span </span>
        <p className="pActive">this is a p</p>
      </div>
    </div>
  );
}
