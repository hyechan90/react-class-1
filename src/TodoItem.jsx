import React from "react";
import Button from "./Form/Button"

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: "30px" }}>{this.props.value}</span>
                <Button style={{ marginLeft: '6px', marginRight: '6px', marginTop: '3px', marginBottom: '3px' }}>수정</Button>
                <Button style={{ marginLeft: '6px', marginRight: '6px', marginTop: '3px', marginBottom: '3px' }}>삭제</Button>
            </div>
        );
    }
}

export default TodoItem;