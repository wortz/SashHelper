import React from 'react';


function Weapons(props){
    return(
        <div className="weapondiv">
            <label>
                <input type="radio" className="weapon" name="weapon" value="phoenix bow" onChange={props.onChange}/>
                <img 
                className="weaponimg"
                src="https://en-wiki.metin2.gameforge.com/images/0/09/Phoenix_Bow.png" 
                alt="Phoenix Bow" 
                />
            </label>
            <label>
                <input type="radio" className="weapon" name="weapon" value="zodiac bow" onChange={props.onChange}/>
                <img 
                className="weaponimg"
                src="https://en-wiki.metin2.gameforge.com/images/7/7e/Zodiac_Bow.png"
                alt="Zodiac Bow" 
                />
            </label>
        </div>
    )
}

export default Weapons;