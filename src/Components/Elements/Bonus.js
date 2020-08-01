import React from 'react';
import bonuses from '../../StaticValues/WeaponBonuses'
import checkPresence from '../Utility/Utility'



function RenderBonus(props){
  const bonusesAvailable = bonuses.slice(props.avg ? 0 : 2);
  const bonusesOption = [];
  for (let i = 0; i < bonusesAvailable.length; i++) {
    const element = bonusesAvailable[i];
    if(checkPresence(props.bonus, [element]).length > 0){
      bonusesAvailable.splice(i,1);
      i--;
    }
    else
      bonusesOption.push(<option key={element} value={element}>{element}</option>)
  };

  return ( 
    <div className="Bonuses">
      {props.bonus.map((item,i) => (
      <div className="SingleBonus" key={item.name}>
        <select className="BonSpace" name="bonuses" onChange={e => props.onChange(e,i,0)}>
          <option key={item.name} value={item.name}>{item.name}</option>
          {bonusesOption}
        </select>
        <input className="BonSpace" type="text" placeholder="Bonus Value" value={item.bonus} onChange={e => props.onChange(e,i,1)} />
        <button className="btn BonSpace RemoveButton" onClick={() => props.removeBonus(i)}><i className="fa fa-trash fa-2x" ></i></button>
      </div>
    ))}
      <button className="AddBonusButton" onClick={() => props.addBonus(bonusesAvailable[0])}>
        New Bonus
      </button>
    </div>
  );
}


export default RenderBonus;
