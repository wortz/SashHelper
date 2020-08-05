import React from 'react';
import WeaponsValues from '../../StaticValues/WeaponsValues'


class FinalValues extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            bonus:[],
            elementalAttack:"",
        };
        this.calculateValues =this.calculateValues.bind(this);
        this.calculateValue =this.calculateValue.bind(this);
        this.getWeaponValues =this.getWeaponValues.bind(this);
        this.clickCalculateButton =this.clickCalculateButton.bind(this);
    };

    calculateValue(bonus) {
        if(bonus===0 || bonus==="")
            return 0;
        let newValue = 0;
        newValue = Math.floor(this.props.original.sashPercentage * bonus / 100.0);
        if(newValue===0)
            newValue++;
        return newValue;
    }

    calculateValues() {
        const weaponbonus=this.getWeaponValues();
        const elementalAttack="(+" + this.calculateValue(parseInt(this.props.original.elementalAttack)) + ")";
        const elemental=this.props.original.elemental;
        var bonus = weaponbonus.map(a => ({...a}));
        bonus.push(Object.assign({},elemental));
        bonus=bonus.concat(this.props.original.bonus);
        for (let index = 0; index < bonus.length; index++) {
            const element = bonus[index];
            if(Array.isArray(element.bonus)){
                let min = this.calculateValue(element.bonus[0]);
                let max = this.calculateValue(element.bonus[1]);
                bonus[index].bonus=min + "-" + max;
            }
            else if(element.bonus<=0 || isNaN(element.bonus)){
                bonus.splice(index,1);
                index--;
            }
            else 
                bonus[index].bonus=this.calculateValue(element.bonus);
        };
        this.setState({bonus:bonus,elementalAttack:elementalAttack});
    }

    getWeaponValues() {
        for (let index = 0; index < WeaponsValues.length; index++) {
            const element = WeaponsValues[index];
            if(element.name===this.props.original.weapon){
                return element.values[this.props.original.itemlevel-6];
            }
        }
    }

    clickCalculateButton(){
        if(this.props.original.sashPercentage === "")
            alert("The Sash Percentage to have a value.");
        else if(isNaN(this.props.original.sashPercentage))
            alert("The Sash Percentage needs to be a number.");
        else if(this.props.original.weapon === "")
            alert("You need to select a weapon.");
        else if(this.props.original.sashPercentage >25 || this.props.original.sashPercentage <=0 )
            alert("The Sash Percentage needs to be between 0 and 25.");
        else
            this.calculateValues();
      }


    render(){
        return (
            <div className="FinalValues">
                <div className="ValuesTablediv">
                {this.state.bonus.length>0 &&
                    <table className="FinalValuesTable">
                        <thead>
                            <tr>
                                <th>Bonus</th>
                                <th>Sash Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.bonus.map((element,i) => (
                            <tr key={i}>
                                <td data-th="Bonus">{element.name}</td>
                                
                                <td data-th="FinalValue">{element.bonus}{this.state.elementalAttack!==0 && element.name ==="Attack Value" ? this.state.elementalAttack : null}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                }
                </div>
                <button onClick={this.clickCalculateButton} className="CalculateButton">
                    Calculate Final Values
                </button>
            </div>
        );
      };
}

export default FinalValues;