import React from 'react';
import bonuses from '../../StaticValues/WeaponBonuses'

function RenderBonus(props){

  function checkRepeted(element){
    for (let index = 0; index < props.bonus.length; index++) {
      const item = props.bonus[index];
      if(item.name === element){
        return true;
      }
    }
    return false;
  };

  const bonusesAvailable = bonuses.slice(props.avg ? 0 : 2);
  const bonusesOption = [];
  for (let i = 0; i < bonusesAvailable.length; i++) {
    const element = bonusesAvailable[i];
    if(checkRepeted(element)){
      bonusesAvailable.splice(i,1);
      i--;
    }
    else
      bonusesOption.push(<option key={element} value={element}>{element}</option>)
  };

  return (
    <div className="Bonuses">
      {props.bonus.map((item,i) => (
      <div className="SingleBonus" key={i}>
        <select name="bonuses" onChange={e => props.onChange(e,i,0)}>
          <option key={item.name} value={item.name}>{item.name}</option>
          {bonusesOption}
        </select>
        <input type="text" placeholder="Valor do Bonus" value={item.bonus} onChange={e => props.onChange(e,i,1)} />
      </div>
    ))}
      <button onClick={() => props.addBonus(bonusesAvailable[0])}>
        New Bonus
      </button>
    </div>
  );
}


export default RenderBonus;
