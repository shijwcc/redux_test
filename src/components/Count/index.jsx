import React, { Component } from 'react'
import store from "../../redux/store"

export default class Count extends Component {

  add = () => {
    const {value} = this.selectValue
    store.dispatch({ type: "add", data: value * 1 })
  }
  minus = () => {
    const {value} = this.selectValue
    store.dispatch({ type: "minus", data: value * 1 })
  }
  addOdd = () => {
    const {value} = this.selectValue
    if (store.getState() % 2 === 0 ) return;
    store.dispatch({ type: "add", data: value * 1 })
  }
  addAsync = () => {
    const {value} = this.selectValue
    setTimeout(()=> {
      store.dispatch({ type: "add", data: value * 1 })
    },500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c => this.selectValue = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.addOdd}>奇数加</button>
        <button onClick={this.addAsync}>异步加</button>
      </div>
    )
  }
}
