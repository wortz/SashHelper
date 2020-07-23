import React from 'react';
import bonuses from '../StaticValues/WeaponBonuses'

function RenderBonus(props){
  console.log(props);
  const items = []
  bonuses.forEach(element => {
    items.push(<option key={element} value={element}>{element}</option>)
  });
  return (
    <div key={props.key}>
      <select name="bonuses" onChange={e => props.onChange(e,props.key,0)}>
        {items}
      </select>
      <input type="text" placeholder="Valor do Bonus" value={props.item.bonus1} onChange={e => props.onChange(e,props.key,1)} />
    </div>
    );
}


export default RenderBonus;
