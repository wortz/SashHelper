import React from 'react';
import WeaponsValues from '../../StaticValues/WeaponsValues'


function Weapons(props){
    return(
        <div className="weapondiv">
            {WeaponsValues.map((item,i) => (
            <div key={item.name}>
                <label>
                    <input type="radio" className="weaponselector" name="weapon" value={item.name} onChange={e => props.onChange(e,item.avg)}/>
                    <img 
                        className="weaponimg"
                        src={item.src} 
                        alt={item.name}
                        />
                </label>
                <label>
                    {item.name}
                </label>
            </div>
            ))}
        </div>
    )
}

export default Weapons;