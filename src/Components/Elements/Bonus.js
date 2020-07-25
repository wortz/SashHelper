import React from 'react';
import bonuses from '../../StaticValues/WeaponBonuses'

function RenderBonus(props){
  const bonusesOption = []
  bonuses.forEach((element,i) => {
    if(i>1 || props.avg)
      bonusesOption.push(<option key={element} value={element}>{element}</option>)
  });
  return (
    <div className="Bonuses">
      {props.bonus.map((item,i) => (
      <div className="SingleBonus" key={i}>
        <select name="bonuses" onChange={e => props.onChange(e,i,0)}>
          {bonusesOption}
        </select>
        <input type="text" placeholder="Valor do Bonus" value={item.bonus} onChange={e => props.onChange(e,i,1)} />
      </div>
    ))}
      <button onClick={() => props.addBonus(props.avg ? bonuses[0] : bonuses[2])}>
        New Bonus
      </button>
    </div>
  );
}


export default RenderBonus;
