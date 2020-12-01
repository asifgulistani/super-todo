import React, { Component } from 'react';

class Add extends Component {
    state = {  }

    handleEnter = e => {
        const {onAdd} = this.props;
        if(e.key === 'Enter'){
            onAdd(e.target.value);
            e.target.value = null;
        }
    }

    render() { 
        return ( 
            <React.Fragment>
                <input 
                    id="addTodoTextInput" 
                    className="add-todo-text-input" 
                    type="text" 
                    placeholder="What do you need to do?" 
                    aria-label="Enter to do text" 
                    onKeyPress={this.handleEnter}
                    autoFocus/>
                {/* <button aria-label="Toggle all to do tasks">
                    <span className="rotate">&#x276F;</span>
                </button> */}
            </React.Fragment>
         );
    }
}
 
export default Add;