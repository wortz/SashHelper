import React from 'react';
import RenderBonus from '../Elements/Bonus'
import RenderLevel from '../Elements/Level'
import ElementalBonus from '../Elements/ElementalBonus'
import Weapons from '../Elements/Weapons'
import RenderSashPercentage from '../Elements/Sash';
import FinalValues from './FinalValues'
import checkPresence from '../Utility/Utility'
import bonuses from '../../StaticValues/WeaponBonuses'

class SashCalculator extends React.Component{
    constructor(props){
        super(props);
        this.wrapper = React.createRef();
        this.state={
            sashPercentage: "",
            weapon:"",
            avg:false,
            itemlevel:9,
            elemental:{name:"", bonus:""},
            elementalAttack:"",
            bonus:[],
        }
        this.changePercentage =this.changePercentage.bind(this);
        this.handleChangeBonus =this.handleChangeBonus.bind(this);
        this.addBonus =this.addBonus.bind(this);
        this.changeLevel =this.changeLevel.bind(this);
        this.removeBonus =this.removeBonus.bind(this);
        this.changeWeapon =this.changeWeapon.bind(this);
        this.handleChangeElemental =this.handleChangeElemental.bind(this);
        this.addElemental =this.addElemental.bind(this);
        this.removeElemental =this.removeElemental.bind(this);
    }

    changePercentage(event) {
        let temp = this.state.sashPercentage;
        temp = event.target.value;
        this.setState({sashPercentage:temp});
    }

    handleChangeElemental(event, bonus){
        const temp = this.state.elemental;
        if(bonus===1){
            temp.bonus=event.target.value;
            this.setState({elemental:temp});
        }
        else if(bonus===0){
            temp.name=event.target.value;
            this.setState({elemental:temp});
        }
        else
            this.setState({elementalAttack:event.target.value});
    }

    addElemental(firstBonus){
        let temp = this.state.elemental;
        temp={name:firstBonus,bonus:""};
        this.setState({elemental:temp});
    }

    removeElemental(){
        this.setState({elemental:""});
    }

    handleChangeBonus(event, index, bonus) {
        const temp = this.state.bonus.map(a => ({...a}));
        if(bonus)
          temp[index].bonus=event.target.value;
        else
          temp[index].name=event.target.value;
        this.setState({bonus:temp});
    }
    
    addBonus(firstBonus){
        if(this.state.bonus.length >=5)
            alert("The maximum number of bonus is 5.");
        else {
            const temp = this.state.bonus.map(a => ({...a}));
            temp.push({name:firstBonus,bonus:""});
            this.setState({bonus:temp});
        }
    }

    removeBonus(index){
        const temp = this.state.bonus.map(a => ({...a}));
        temp.splice(index,1);
        this.setState({bonus:temp});
    }
    
    changeLevel (event) {
        let temp = this.state.itemlevel;
        temp=parseInt(event.target.value);
        this.setState({itemlevel:temp});
    }
    
    changeWeapon (event, avg) {
        let temp = this.state.weapon;
        temp=event.target.value;
        let bonusAux = this.state.bonus;
        if(!avg){
            let specialBonus = checkPresence(bonusAux, [bonuses[0],bonuses[1]]);
            specialBonus.forEach(element => {
                for(let index=2; index<bonuses.length; index++){
                    if(checkPresence(bonusAux,[bonuses[index]]).length === 0){
                        bonusAux[element]={name:bonuses[index], bonus:""};
                        break;
                    }
                }
            });
        }
        this.setState({weapon:temp,avg:avg,bonus:bonusAux});
    }

    render(){
        return (
          <div className="SashCalculator">
              <RenderSashPercentage sashPercentage={this.state.sashPercentage} onChange={this.changePercentage}/>
              <Weapons onChange={this.changeWeapon}/>
              <RenderLevel onChange={this.changeLevel} />
              <ElementalBonus elemental={this.state.elemental} onChange={this.handleChangeElemental} addElemental={this.addElemental} removeElemental={this.removeElemental} 
              elementalAttack={this.state.elementalAttack}/>
              <RenderBonus bonus={this.state.bonus} onChange={this.handleChangeBonus} addBonus={this.addBonus} avg={this.state.avg} removeBonus={this.removeBonus} />
              <FinalValues original={this.state} />
          </div>
        );
      }
}

export default SashCalculator;