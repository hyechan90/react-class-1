import React from "react";
import TodoItem from "./TodoItem";
import Button from "./Form/Button"

import "./App.scss"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      value: ""
    };
  }

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items
    });
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  handleClickRemove = index => {
    this.setState(
      state => ({
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1)
        ]
      }),
    );
  }

  change = (e, input) => {
    const items = this.state.items;
    items[e] = input;
    this.setState({
      items
    });
  }

  render() {
    return (
      <div className="a">
        <div className="b">
          <div className="c">
            <input type="text" onChange={this.onChange} style={{ width: "80%", borderRadius: "30px", border: "2px solid #4fc1e9", fontSize: "25px" }} />
            <Button onClick={this.onClickAdd} style={{ width: "10%" }}>추가</Button>
          </div>
          <div className='d'>
            {this.state.items.map((value, idx) => (
              <TodoItem key={idx} index={idx} value={value} handleClickRemove={this.handleClickRemove} change={this.change} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;