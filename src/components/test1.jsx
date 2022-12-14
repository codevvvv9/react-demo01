import { useState } from "react";

// 使用hooks写法
function Test1() {
  // 解构，第一个是对象，第二个是set函数，hooks中用它来修改
  let [objA, setA] = useState({
    aaa: 123,
  });

  setTimeout(() => {
    setA({
      aaa: "hook中我必须通过useState的set函数修改",
    });
  }, 1500);
  return (
    <div>
      <div>hooks组件写法：</div>
      {objA.aaa}
      <p>00</p>
    </div>
  );
}

export default Test1;
