// 模版精简原则
// 有一个状态type ,1 ,2 ,3
// 1=>h1
// 2=>h2
// 3=>h3

// 原则：模版中的逻辑尽量保持精简
// 处理：复杂的多分支逻辑，收敛进一个处理函数，函数内部处理逻辑。而模版只调用函数
const hTags = (type) => {
  if (type === 1) return <h1>this is a h1</h1>;
  if (type === 2) return <h2>this is a h2</h2>;
  if (type === 3) return <h3>this is a h3</h3>;
};
export default function Index_04() {
  return (
    <>
      <div>
        模版精简原则:
        <p>有一个状态type 1, 2, 3</p>
        <p>1=====h1</p>
        <p>2=====h2</p>
        <p>3=====h3</p>
        <p>原则：模版中的逻辑尽量保持精简</p>
        <p>
          处理：复杂的多分支逻辑，收敛进一个处理函数，函数内部处理逻辑。而模版只调用函数
        </p>
        <hr style={{ margin: "10px auto", width: "80vw" }} />
      </div>
      <div>
        {hTags(1)}
        {hTags(2)}
        {hTags(3)}
      </div>
    </>
  );
}
