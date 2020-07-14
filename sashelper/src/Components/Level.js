import React from 'react';

function RenderLevel(props){
    const items = []
    for (let i=0;i<10;i++)
    items.push(<option key={i} value={i}>{"+" + i}</option>)
    return(
        <select name="itemLevel" onChange={props.onChange}>
            {items}
        </select>
    );
}
export default RenderLevel;