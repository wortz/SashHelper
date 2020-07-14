import React from 'react';
import './style.css';
import RenderBonus from './Components/Bonus'
import RenderLevel from './Components/Level'

class App extends React.Component {
  constructor(props){
    document.title = "Sash Helper"
    super(props);
    this.wrapper = React.createRef();
    this.state={
      bonus:[],
      itemlevel:0,
    }
    this.handleChange =this.handleChange.bind(this);
    this.addBonus =this.addBonus.bind(this);
    this.changeLevel =this.changeLevel.bind(this);
  }

  handleChange(event, index, bonus) {
    const temp = this.state;
    if(bonus)
      temp.bonus[index].bonus=event.target.value;
    else
      temp.bonus[index].name=event.target.value;
    this.setState(temp);
  }

  addBonus(){
      const temp = this.state;
      temp.bonus.push({name:"",bonus:0,});
      this.setState(temp);
  }

  bonus(){
    return (this.state.bonus.map((item,i) => (
      <RenderBonus item={item} key={i} onChange={this.handleChange} />
    )))
  }

  changeLevel (event) {
    const temp = this.state;
    temp.itemlevel=parseInt(event.target.value);
    this.setState(temp);
  }

  render(){
    return (
      <div className="App">
          {this.bonus()}
          <button onClick={this.addBonus}>
            New Bonus
          </button>
          
          <RenderLevel onChange={this.changeLevel} />
          

        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default App;
