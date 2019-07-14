import React, { Component } from "react";

class LifeCycleParent extends React.Component {
  constructor(props) {
    super();
    this.state = { number: 0 };
    console.log("1.构造函数 constructor");
  }
  componentWillReceiveProps() {
    console.log("3.组件收到props componentWillReceiveProps");
  }

  componentDidMount() {
    console.log("3.组件挂载完成 componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("4.组件是否更新 shouldComponentUpdate");
    return nextState.number % 2;
  }

  componentDidUpdate() {
    console.log("5.组件完成更新 componentDidUpdate");
  }

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    console.log("2. 组件渲染 render");
    return (
      <div>
        <p>{this.state.number}</p>
        {this.state.number > 3 ? null : <Child n={this.state.number} />}
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
class Child extends Component {
  render() {
    console.log("child render");
    return <div>{this.props.n}</div>;
  }
  componentDidMount() {
    console.log("child componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("child shouldComponentUpdate");
    return nextProps.n % 3; //子组件判断接收的属性 是否满足更新条件 为true则更新
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }
}

export default LifeCycleParent;
