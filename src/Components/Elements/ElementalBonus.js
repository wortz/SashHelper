import React from 'react';
import elementalBonuses from '../../StaticValues/ElementalBonuses'

function ElementalBonus(props){
    const bonusesOption = [];
    elementalBonuses.map(item => (
        bonusesOption.push(<option key={item} value={item}>{item}</option>)
    ));

    return (
        <div className="ElementalBonus">
            {props.elemental !== "" ? (
            <div>
                <label>Attack Value: </label>
                <input className="BonSpace" type="text" placeholder="Bonus Value" value={props.elemental.elementalAttack} onChange={e => props.onChange(e,2)} />
                <select className="BonSpace" name="bonuses" onChange={e => props.onChange(e,0)}>
                    {bonusesOption}
                </select>
                <input className="BonSpace" type="text" placeholder="Bonus Value" value={props.elemental.bonus} onChange={e => props.onChange(e,1)} />
                <button className="btn BonSpace RemoveButton" onClick={() => props.removeElemental()}><i className="fa fa-trash fa-2x" ></i></button>
            </div>
            ):(
            <button className="AddElementalButton" onClick={() => props.addElemental(elementalBonuses[0])} />
            )
            }
        </div>
    )
}

export default ElementalBonus;