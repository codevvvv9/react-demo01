// class 写法
import React from "react";

class Test2 extends React.Component {
  constructor(prop) {
    // 继承先写super
    super(prop);
    this.state = {
      aaa: 123,
      arr: ['第一', '第2', '第3'],
    };
  }

  render() {
    // 需要使用setState
    setTimeout(() => {
      // 对于对象的修改要注意，先存储原来的
      let _arr = this.state.arr;
      _arr.push(4);
      this.setState({
        aaa: "class组件通过setState来修改state值",
        arr: _arr,
      });
    }, 1500);
    return (
      <div>
        <div>class组件写法：</div>
        <div>{this.state.aaa}</div>
        <div>react中遍历</div>
        {/* <div>{this.state.arr.map(item => {
          return (
            <div>{item}</div>
          )
        })}</div> */}
      </div>
    );
  }
}

export default Test2;
