import React, { Component } from 'react';

const SelectAll = (props) => {
    return ( 
        <button id="toggleAll" className="toggle-all" aria-label="Toggle all to do tasks" onClick={()=> props.onSelect()}>
            <span className="rotate">&#x276F;</span>
        </button>
     );
}
 
export default SelectAll;