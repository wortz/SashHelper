(this.webpackJsonpsashelper=this.webpackJsonpsashelper||[]).push([[0],{14:function(e,a,n){},15:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var t=n(0),s=n.n(t),l=n(8),o=n.n(l),u=(n(14),n(15),n(2)),r=n(3),c=n(4),m=n(1),i=n(6),h=n(5),g=["Average Damage","Skill Damage","Devils","Undead","Animals","Orcs","Half Humans","Mystics","Intelligence","Strength","Dexterity","Vitality","Piercing Hit","Critical Hit","Poison Chance","Blackout Chance","Bleeding Chance","Slowing Chance","Casting Speed"];function b(e,a){for(var n=[],t=0;t<a.length;t++)for(var s=a[t],l=0;l<e.length;l++){if(e[l].name===s){if(1===a.length)return[l];n.push(l)}}return n}var p=function(e){for(var a=g.slice(e.avg?0:2),n=[],t=0;t<a.length;t++){var l=a[t];b(e.bonus,[l]).length>0?(a.splice(t,1),t--):n.push(s.a.createElement("option",{key:l,value:l},l))}return s.a.createElement("div",{className:"Bonuses"},e.bonus.map((function(a,t){return s.a.createElement("div",{className:"SingleBonus",key:a.name},s.a.createElement("select",{className:"BonSpace",name:"bonuses",onChange:function(a){return e.onChange(a,t,0)}},s.a.createElement("option",{key:a.name,value:a.name},a.name),n),s.a.createElement("input",{className:"BonSpace",type:"text",placeholder:"Bonus Value",value:a.bonus,onChange:function(a){return e.onChange(a,t,1)}}),s.a.createElement("button",{className:"btn BonSpace RemoveButton",onClick:function(){return e.removeBonus(t)}},s.a.createElement("i",{className:"fa fa-trash fa-2x"})))})),e.bonus.length<5?s.a.createElement("button",{className:"AddBonusButton",onClick:function(){return e.addBonus(a[0])}}):null)};var v=function(e){for(var a=[],n=9;n>5;n--)a.push(s.a.createElement("option",{key:n,value:n},"+"+n));return s.a.createElement("select",{className:"itemLevel",onChange:e.onChange},a)},d=["Fire","Wind","Ice","Lightning","Darkness","Earth"];var k=function(e){var a=[];return d.map((function(e){return a.push(s.a.createElement("option",{key:e,value:e},e))})),s.a.createElement("div",{className:"ElementalBonus"},""!==e.elemental.name?s.a.createElement("div",null,s.a.createElement("label",null,"Attack Value: "),s.a.createElement("input",{className:"BonSpace",type:"text",placeholder:"Bonus Value",value:e.elemental.elementalAttack,onChange:function(a){return e.onChange(a,2)}}),s.a.createElement("select",{className:"BonSpace",name:"bonuses",onChange:function(a){return e.onChange(a,0)}},a),s.a.createElement("input",{className:"BonSpace",type:"text",placeholder:"Bonus Value",value:e.elemental.bonus,onChange:function(a){return e.onChange(a,1)}}),s.a.createElement("button",{className:"btn BonSpace RemoveButton",onClick:function(){return e.removeElemental()}},s.a.createElement("i",{className:"fa fa-trash fa-2x"}))):s.a.createElement("button",{className:"AddElementalButton",onClick:function(){return e.addElemental(d[0])}}))},f=[{name:"Crow Steel Bow",src:"https://en-wiki.metin2.gameforge.com/images/0/0c/Crow_Steel_Bow.png",avg:!0,values:[[{name:"Attack Value",bonus:[241,341]},{name:"Attack Speed",bonus:23}],[{name:"Attack Value",bonus:[253,353]},{name:"Attack Speed",bonus:24}],[{name:"Attack Value",bonus:[266,366]},{name:"Attack Speed",bonus:25}],[{name:"Attack Value",bonus:[280,380]},{name:"Attack Speed",bonus:26}]]},{name:"Phoenix Bow",src:"https://en-wiki.metin2.gameforge.com/images/0/09/Phoenix_Bow.png",avg:!1,values:[[{name:"Attack Value",bonus:[311,510]},{name:"Attack Speed",bonus:15},{name:"Half Humans",bonus:8},{name:"Strength against monsters",bonus:4}],[{name:"Attack Value",bonus:[348,547]},{name:"Attack Speed",bonus:15},{name:"Half Humans",bonus:10},{name:"Strength against monsters",bonus:4}],[{name:"Attack Value",bonus:[404,603]},{name:"Attack Speed",bonus:15},{name:"Half Humans",bonus:12},{name:"Strength against monsters",bonus:5}],[{name:"Attack Value",bonus:[487,686]},{name:"Attack Speed",bonus:15},{name:"Half Humans",bonus:15},{name:"Strength against monsters",bonus:5}]]},{name:"Zodiac Bow",src:"https://en-wiki.metin2.gameforge.com/images/7/7e/Zodiac_Bow.png",avg:!0,values:[[{name:"Attack Value",bonus:[311,510]},{name:"Attack Speed",bonus:24}],[{name:"Attack Value",bonus:[348,547]},{name:"Attack Speed",bonus:25}],[{name:"Attack Value",bonus:[404,603]},{name:"Attack Speed",bonus:26}],[{name:"Attack Value",bonus:[487,686]},{name:"Attack Speed",bonus:27}]]},{name:"Kyanite Bow",src:"https://en-wiki.metin2.gameforge.com/images/a/ae/Kyanite_Bow.png",avg:!1,values:[[{name:"Attack Value",bonus:[392,598]},{name:"Attack Speed",bonus:21},{name:"Half Humans",bonus:12},{name:"Strength against monsters",bonus:5}],[{name:"Attack Value",bonus:[407,613]},{name:"Attack Speed",bonus:22},{name:"Half Humans",bonus:15},{name:"Strength against monsters",bonus:5}],[{name:"Attack Value",bonus:[450,656]},{name:"Attack Speed",bonus:23},{name:"Half Humans",bonus:17},{name:"Strength against monsters",bonus:6}],[{name:"Attack Value",bonus:[528,734]},{name:"Attack Speed",bonus:25},{name:"Half Humans",bonus:20},{name:"Strength against monsters",bonus:8}]]},{name:"Dragon Tooth Blade",src:"https://en-wiki.metin2.gameforge.com/images/e/e0/Dragon_Tooth_Blade.png",avg:!1,values:[[{name:"Attack Value",bonus:[190,238]},{name:"Magical Attack",bonus:[223,285]},{name:"Attack Speed",bonus:15},{name:"Half Humans",bonus:8},{name:"Strength against monsters",bonus:4}],[{name:"Attack Value",bonus:[227,275]},{name:"Magical Attack",bonus:[260,322]},{name:"Attack Speed",bonus:15},{name:"Half Humans",bonus:10},{name:"Strength against monsters",bonus:4}],[{name:"Attack Value",bonus:[283,331]},{name:"Magical Attack",bonus:[316,378]},{name:"Attack Speed",bonus:15},{name:"Half Humans",bonus:12},{name:"Strength against monsters",bonus:5}],[{name:"Attack Value",bonus:[366,414]},{name:"Magical Attack",bonus:[399,461]},{name:"Attack Speed",bonus:15},{name:"Half Humans",bonus:15},{name:"Strength against monsters",bonus:5}]]},{name:"Kyanite Sword",src:"https://en-wiki.metin2.gameforge.com/images/e/e5/Kyanite_Sword.png",avg:!1,values:[[{name:"Attack Value",bonus:[271,326]},{name:"Magical Attack",bonus:[359,421]},{name:"Attack Speed",bonus:21},{name:"Half Humans",bonus:12},{name:"Strength against monsters",bonus:5}],[{name:"Attack Value",bonus:[286,341]},{name:"Magical Attack",bonus:[379,441]},{name:"Attack Speed",bonus:22},{name:"Half Humans",bonus:15},{name:"Strength against monsters",bonus:5}],[{name:"Attack Value",bonus:[329,384]},{name:"Magical Attack",bonus:[389,451]},{name:"Attack Speed",bonus:23},{name:"Half Humans",bonus:17},{name:"Strength against monsters",bonus:6}],[{name:"Attack Value",bonus:[407,462]},{name:"Magical Attack",bonus:[399,461]},{name:"Attack Speed",bonus:25},{name:"Half Humans",bonus:20},{name:"Strength against monsters",bonus:8}]]}];var A=function(e){return s.a.createElement("div",{className:"weapondiv"},f.map((function(a,n){return s.a.createElement("div",{key:a.name},s.a.createElement("label",null,s.a.createElement("input",{type:"radio",className:"weaponselector",name:"weapon",value:a.name,onChange:function(n){return e.onChange(n,a.avg)}}),s.a.createElement("img",{className:"weaponimg",src:a.src,alt:a.name})),s.a.createElement("label",{className:"weaponName"},a.name))})))};var E=function(e){return s.a.createElement("div",{className:"SashPercentage"},s.a.createElement("img",{className:"sashimg",src:"https://2.bp.blogspot.com/-AA4Gg4IUQH8/WRxhduZBvlI/AAAAAAAADcA/bltRTH7anooOV_Mm0ar0aj-1CMLltvSTQCLcB/s1600/FaixaNova.png",alt:"Sash Icon"}),s.a.createElement("input",{type:"text",placeholder:"Sash Percentage",value:e.sashPercentage,onChange:e.onChange}))},S=function(e){Object(i.a)(n,e);var a=Object(h.a)(n);function n(e){var t;return Object(r.a)(this,n),(t=a.call(this,e)).state={bonus:[],elementalAttack:""},t.calculateValues=t.calculateValues.bind(Object(m.a)(t)),t.calculateValue=t.calculateValue.bind(Object(m.a)(t)),t.getWeaponValues=t.getWeaponValues.bind(Object(m.a)(t)),t.clickCalculateButton=t.clickCalculateButton.bind(Object(m.a)(t)),t}return Object(c.a)(n,[{key:"calculateValue",value:function(e){if(0===e||""===e)return 0;var a=0;return 0===(a=Math.floor(this.props.original.sashPercentage*e/100))&&a++,a}},{key:"calculateValues",value:function(){var e,a=this.getWeaponValues();this.props.original.elementalAttack>0&&0!==this.props.original.elementalAttack&&(e="(+"+this.calculateValue(parseInt(this.props.original.elementalAttack))+")");var n=this.props.original.elemental,t=a.map((function(e){return Object(u.a)({},e)}));t.push(Object.assign({},n)),t=t.concat(this.props.original.bonus.map((function(e){return Object(u.a)({},e)})));for(var s=0;s<t.length;s++){var l=t[s];if(Array.isArray(l.bonus)){var o=this.calculateValue(l.bonus[0]),r=this.calculateValue(l.bonus[1]);t[s].bonus=o+"-"+r}else l.bonus<=0||isNaN(l.bonus)?(t.splice(s,1),s--):t[s].bonus=this.calculateValue(l.bonus)}this.setState({bonus:t,elementalAttack:e})}},{key:"getWeaponValues",value:function(){for(var e=0;e<f.length;e++){var a=f[e];if(a.name===this.props.original.weapon)return a.values[this.props.original.itemlevel-6]}}},{key:"clickCalculateButton",value:function(){console.log(this.props.original),""===this.props.original.sashPercentage?alert("The Sash Percentage to have a value."):isNaN(this.props.original.sashPercentage)?alert("The Sash Percentage needs to be a number."):""===this.props.original.weapon?alert("You need to select a weapon."):this.props.original.sashPercentage>25||this.props.original.sashPercentage<=0?alert("The Sash Percentage needs to be between 0 and 25."):isNaN(this.props.original.elementalAttack)&&""===this.props.original.elementalAttack?alert("The Elemental Attack needs to be a number."):isNaN(this.props.original.elemental.bonus)&&""===this.props.original.elemental.bonus?alert("The Elemental Bonus needs to be a number."):this.props.original.bonus.every((function(e){return!isNaN(e.bonus)}))?this.props.original.elementalAttack<=0&&""!==this.props.original.elementalAttack?alert("The Elemental Attack needs to be greater than 0."):this.props.original.elemental.bonus<=0&&""!==this.props.original.elemental.bonus?alert("The Elemental bonus needs to be greater than 0."):""!==this.props.original.elementalAttack&&""===this.props.original.elemental.bonus?alert("If Elemental Attack is assigned, then you must assign a Elemental Bonus."):""===this.props.original.elementalAttack&&""!==this.props.original.elemental.bonus?alert("If Elemental Bonus is assigned, then you must assign a Elemental Attack."):this.calculateValues():alert("All bonuses need to be a number.")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"FinalValues"},s.a.createElement("div",{className:"ValuesTablediv"},this.state.bonus.length>0&&s.a.createElement("table",{className:"FinalValuesTable"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Bonus"),s.a.createElement("th",null,"Sash Value"))),s.a.createElement("tbody",null,this.state.bonus.map((function(a,n){return s.a.createElement("tr",{key:n},s.a.createElement("td",{"data-th":"Bonus"},a.name),s.a.createElement("td",{"data-th":"FinalValue"},a.bonus,"Attack Value"===a.name?e.state.elementalAttack:null))}))))),s.a.createElement("button",{onClick:this.clickCalculateButton,className:"CalculateButton"},"Calculate Final Values"))}}]),n}(s.a.Component),B=function(e){Object(i.a)(n,e);var a=Object(h.a)(n);function n(e){var t;return Object(r.a)(this,n),(t=a.call(this,e)).wrapper=s.a.createRef(),t.state={sashPercentage:"",weapon:"",avg:!1,itemlevel:9,elemental:{name:"",bonus:""},elementalAttack:"",bonus:[]},t.changePercentage=t.changePercentage.bind(Object(m.a)(t)),t.handleChangeBonus=t.handleChangeBonus.bind(Object(m.a)(t)),t.addBonus=t.addBonus.bind(Object(m.a)(t)),t.changeLevel=t.changeLevel.bind(Object(m.a)(t)),t.removeBonus=t.removeBonus.bind(Object(m.a)(t)),t.changeWeapon=t.changeWeapon.bind(Object(m.a)(t)),t.handleChangeElemental=t.handleChangeElemental.bind(Object(m.a)(t)),t.addElemental=t.addElemental.bind(Object(m.a)(t)),t.removeElemental=t.removeElemental.bind(Object(m.a)(t)),t}return Object(c.a)(n,[{key:"changePercentage",value:function(e){var a=this.state.sashPercentage;a=e.target.value,this.setState({sashPercentage:a})}},{key:"handleChangeElemental",value:function(e,a){var n=this.state.elemental;1===a?(n.bonus=e.target.value,this.setState({elemental:n})):0===a?(n.name=e.target.value,this.setState({elemental:n})):this.setState({elementalAttack:e.target.value})}},{key:"addElemental",value:function(e){var a=this.state.elemental;a={name:e,bonus:""},this.setState({elemental:a})}},{key:"removeElemental",value:function(){this.setState({elemental:""})}},{key:"handleChangeBonus",value:function(e,a,n){var t=this.state.bonus.map((function(e){return Object(u.a)({},e)}));n?t[a].bonus=e.target.value:t[a].name=e.target.value,this.setState({bonus:t})}},{key:"addBonus",value:function(e){if(this.state.bonus.length>=5)alert("The maximum number of bonus is 5.");else{var a=this.state.bonus.map((function(e){return Object(u.a)({},e)}));a.push({name:e,bonus:""}),this.setState({bonus:a})}}},{key:"removeBonus",value:function(e){var a=this.state.bonus.map((function(e){return Object(u.a)({},e)}));a.splice(e,1),this.setState({bonus:a})}},{key:"changeLevel",value:function(e){var a=this.state.itemlevel;a=parseInt(e.target.value),this.setState({itemlevel:a})}},{key:"changeWeapon",value:function(e,a){var n=this.state.weapon;n=e.target.value;var t=this.state.bonus;a||b(t,[g[0],g[1]]).forEach((function(e){for(var a=2;a<g.length;a++)if(0===b(t,[g[a]]).length){t[e]={name:g[a],bonus:""};break}}));this.setState({weapon:n,avg:a,bonus:t})}},{key:"render",value:function(){return s.a.createElement("div",{className:"SashCalculator"},s.a.createElement(E,{sashPercentage:this.state.sashPercentage,onChange:this.changePercentage}),s.a.createElement(A,{onChange:this.changeWeapon}),s.a.createElement(v,{onChange:this.changeLevel}),s.a.createElement(k,{elemental:this.state.elemental,onChange:this.handleChangeElemental,addElemental:this.addElemental,removeElemental:this.removeElemental,elementalAttack:this.state.elementalAttack}),s.a.createElement(p,{bonus:this.state.bonus,onChange:this.handleChangeBonus,addBonus:this.addBonus,avg:this.state.avg,removeBonus:this.removeBonus}),s.a.createElement(S,{original:this.state}))}}]),n}(s.a.Component);var C=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(B,null))};o.a.render(s.a.createElement(C,null),document.getElementById("root"))},9:function(e,a,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.1bfb5316.chunk.js.map