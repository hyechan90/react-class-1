import React from "react";
import Button from "./Form/Button"

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isV: false
        }
    }

    buttonchange = e => {
        this.setState({
            isV: true
        })
    }
    buttonok = e => {
        this.setState({
            isV: false
        })
        this.props.change(this.props.index, this.refs.input.value)

    }

    render() {

        if (this.state.isV) {
            return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="text" ref="input" />
                    <Button style={{ marginLeft: '6px', marginRight: '6px', marginTop: '3px', marginBottom: '3px' }} onClick={this.buttonok}>확인</Button>
                    <Button style={{ marginLeft: '6px', marginRight: '6px', marginTop: '3px', marginBottom: '3px' }} onClick={() => this.props.handleClickRemove(this.props.index)}>삭제</Button>
                </div>)
        }



        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: "30px" }}>{this.props.value}</span>
                <Button style={{ marginLeft: '6px', marginRight: '6px', marginTop: '3px', marginBottom: '3px' }} onClick={this.buttonchange}>수정</Button>
                <Button style={{ marginLeft: '6px', marginRight: '6px', marginTop: '3px', marginBottom: '3px' }} onClick={() => this.props.handleClickRemove(this.props.index)}>삭제</Button>
            </div>
        );
    }
}

export default TodoItem;