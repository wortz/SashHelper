import React from 'react';
import WeaponsValues from '../StaticValues/WeaponsValues'


function Weapons(props){
    return(
        <div className="weapondiv">
            {WeaponsValues.map(item => (
            <label key={item.name}>
                <input type="radio" className="weapon" name="weapon" value={item.name} onChange={props.onChange}/>
                <img 
                className="weaponimg"
                src={item.src} 
                alt={item.name}
                />
                {item.name}
            </label>
            ))}
        </div>
    )
}

export default Weapons;