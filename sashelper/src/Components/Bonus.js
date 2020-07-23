import React from 'react';
import bonuses from '../StaticValues/WeaponBonuses'

function RenderBonus(props){
  const bonusesOption = []
  bonuses.forEach(element => {
    bonusesOption.push(<option key={element} value={element}>{element}</option>)
  });
  return (
    <div className="Bonuses">
      {props.bonus.map((item,i) => (
      <div className="SingleBonus" key={i}>
        <select name="bonuses" onChange={e => props.onChange(e,i,0)}>
          {bonusesOption}
        </select>
        <input type="text" placeholder="Valor do Bonus" value={item.bonus1} onChange={e => props.onChange(e,i,1)} />
      </div>
    ))}
    </div>
  );
}


export default RenderBonus;
