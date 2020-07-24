import React from 'react';

function RenderLevel(props){
    const items = []
    for (let i=9;i>5;i--)
    items.push(<option key={i} value={i}>{"+" + i}</option>)
    return(
        <select className="itemLevel" onChange={props.onChange}>
            {items}
        </select>
    );
}
export default RenderLevel;