import React from 'react';
import RenderBonus from '../Elements/Bonus'
import RenderLevel from '../Elements/Level'
import Weapons from '../Elements/Weapons'
import RenderSashPercentage from '../Elements/Sash';

class SashCalculator extends React.Component{
    constructor(props){
        super(props);
        this.wrapper = React.createRef();
        this.state={
            sashPercentage: "",
            weapon:"",
            itemlevel:9,
            bonus:[],
        }
        this.changePercentage =this.changePercentage.bind(this);
        this.handleChange =this.handleChange.bind(this);
        this.addBonus =this.addBonus.bind(this);
        this.changeLevel =this.changeLevel.bind(this);
        this.changeWeapon =this.changeWeapon.bind(this);
        this.calculateBonus =this.calculateBonus.bind(this);
    }

    changePercentage(event) {
        const temp = this.state;
        temp.sashPercentage = event.target.value;
        this.setState(temp);
    }

    handleChange(event, index, bonus) {
        const temp = this.state;
        if(bonus)
          temp.bonus[index].bonus=event.target.value;
        else
          temp.bonus[index].name=event.target.value;
        this.setState(temp);
    }
    
    addBonus(firstBonus){
          const temp = this.state;
          temp.bonus.push({name:firstBonus,bonus:0,});
          this.setState(temp);
    }
    
    changeLevel (event) {
        const temp = this.state;
        temp.itemlevel=parseInt(event.target.value);
        this.setState(temp);
    }
    
    changeWeapon (event) {
        const temp = this.state;
        temp.weapon=event.target.value;
        this.setState(temp);
    }

    calculateBonus(){
      var bonus = this.state.bonus;
      this.state.bonus.forEach((element,i) => {
        let newValue = 0;
        if(element.bonus > 0){
          newValue = Math.floor(this.state.sashPercentage * element.bonus / 100.0);
          if(newValue===0)
            newValue++;
        }
        bonus[i].bonus=newValue;
      });
      console.log(bonus);
    }

    render(){
        return (
          <div className="SashCalculator">
              <RenderSashPercentage sashPercentage={this.state.sashPercentage} onChange={this.changePercentage}/>
              <Weapons onChange={this.changeWeapon}/>
              <RenderLevel onChange={this.changeLevel} />
              <RenderBonus bonus={this.state.bonus} onChange={this.handleChange} addBonus={this.addBonus} />
              <button onClick={this.calculateBonus}>
                Calculate Final Values
              </button>
          </div>
        );
      }
}

export default SashCalculator;