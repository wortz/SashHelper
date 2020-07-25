import React from 'react';


class FinalValues extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            bonus:this.calculateValues(),
        };
        this.calculateValues =this.calculateValues.bind(this);
        this.calculateValue =this.calculateValue.bind(this);
    };

    componentWillReceiveProps() {
        this.setState({bonus:this.calculateValues()});
    }

    calculateValue(element, percentage) {
        let newValue = 0;
        if(element.bonus > 0){
          newValue = Math.floor(percentage * element.bonus / 100.0);
          if(newValue===0)
            newValue++;
        }
        return newValue;
    }

    calculateValues() {
        const bonus = this.props.original.bonus.map(a => ({...a}));
        this.props.original.bonus.forEach((element,i) => {
            bonus[i].bonus=this.calculateValue(element, this.props.original.sashPercentage);
        });
        return bonus;
    }


    render(){
        console.log("re");
        return (
            <div className="FinalValues">
                <table className="rwd-table">
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
                            <td data-th="FinalValue">{element.bonus}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
          </div>
        );
      };
}

export default FinalValues;