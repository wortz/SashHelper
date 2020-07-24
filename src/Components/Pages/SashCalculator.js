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
        const temp = this.state.bonus.map(a => ({...a}));
        if(bonus)
          temp[index].bonus=event.target.value;
        else
          temp[index].name=event.target.value;
        this.setState({bonus:temp});
    }
    
    addBonus(firstBonus){
          const temp = this.state.bonus.map(a => ({...a}));
          temp.push({name:firstBonus,bonus:0,});
          this.setState({bonus:temp});
    }
    
    changeLevel (event) {
        let temp = this.state.itemlevel;
        temp=parseInt(event.target.value);
        this.setState({itemlevel:temp});
    }
    
    changeWeapon (event) {
        let temp = this.state.weapon;
        temp=event.target.value;
        this.setState({weapon:temp});
    }

    calculateBonus(){
      const bonus = this.state.bonus.map(a => ({...a}));
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