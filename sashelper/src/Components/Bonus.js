import React from 'react';

function RenderBonus(props){
    return (
      <div key={props.key}>
          <input type="text" placeholder="Nome do Bonus" value={props.item.bonus1} onChange={e => props.onChange(e,props.key,0)} />
          <input type="text" placeholder="Valor do Bonus" value={props.item.bonus1} onChange={e => props.onChange(e,props.key,1)} />
      </div>
    );
}


export default RenderBonus;
