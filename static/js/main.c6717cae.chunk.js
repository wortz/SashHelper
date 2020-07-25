(this.webpackJsonpsashelper=this.webpackJsonpsashelper||[]).push([[0],{14:function(e,a,n){},15:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var t=n(0),s=n.n(t),u=n(8),o=n.n(u),l=(n(14),n(15),n(2)),c=n(3),r=n(4),i=n(1),m=n(6),h=n(5),g=["Average Damage","Skill Damage","Devils","Undead","Animals","Orcs","Half-Human","Mystic","Intelligence","Strength","Agility","Vitality","Piercing Hit","Critical Hit","Poison Chance","Blackout Chance","Bleeding Attack","Slowing Chance","Spell Speed"];var b=function(e){var a=[];return g.forEach((function(n,t){(t>2||e.avg)&&a.push(s.a.createElement("option",{key:n,value:n},n))})),s.a.createElement("div",{className:"Bonuses"},e.bonus.map((function(n,t){return s.a.createElement("div",{className:"SingleBonus",key:t},s.a.createElement("select",{name:"bonuses",onChange:function(a){return e.onChange(a,t,0)}},a),s.a.createElement("input",{type:"text",placeholder:"Valor do Bonus",value:n.bonus,onChange:function(a){return e.onChange(a,t,1)}}))})),s.a.createElement("button",{onClick:function(){return e.addBonus(g[0])}},"New Bonus"))};var p=function(e){for(var a=[],n=9;n>5;n--)a.push(s.a.createElement("option",{key:n,value:n},"+"+n));return s.a.createElement("select",{className:"itemLevel",onChange:e.onChange},a)},v=[{name:"Crow Steel Bow",src:"https://en-wiki.metin2.gameforge.com/images/0/0c/Crow_Steel_Bow.png",avg:!0,values:[[{name:"Attack Value",bonus:[241,341]},{name:"Attack Speed",bonus:23}],[{name:"Attack Value",bonus:[253,353]},{name:"Attack Speed",bonus:24}],[{name:"Attack Value",bonus:[266,366]},{name:"Attack Speed",bonus:25}],[{name:"Attack Value",bonus:[280,380]},{name:"Attack Speed",bonus:26}]]},{name:"Phoenix Bow",src:"https://en-wiki.metin2.gameforge.com/images/0/09/Phoenix_Bow.png",avg:!1,values:[[{name:"Attack Value",bonus:[311,510]},{name:"Attack Speed",bonus:15},{name:"Half Humans",bonus:8},{name:"Strength against monsters",bonus:4}],[{name:"Attack Value",bonus:[348,547]},{name:"Attack Speed",bonus:15},{name:"Half Humans",bonus:10},{name:"Strength against monsters",bonus:4}],[{name:"Attack Value",bonus:[404,603]},{name:"Attack Speed",bonus:15},{name:"Half Humans",bonus:12},{name:"Strength against monsters",bonus:5}],[{name:"Attack Value",bonus:[487,686]},{name:"Attack Speed",bonus:15},{name:"Half Humans",bonus:15},{name:"Strength against monsters",bonus:5}]]},{name:"Zodiac Bow",src:"https://en-wiki.metin2.gameforge.com/images/7/7e/Zodiac_Bow.png",avg:!0,values:[[{name:"Attack Value",bonus:[311,510]},{name:"Attack Speed",bonus:24}],[{name:"Attack Value",bonus:[348,547]},{name:"Attack Speed",bonus:25}],[{name:"Attack Value",bonus:[404,603]},{name:"Attack Speed",bonus:26}],[{name:"Attack Value",bonus:[487,686]},{name:"Attack Speed",bonus:27}]]},{name:"Kyanite Bow",src:"https://en-wiki.metin2.gameforge.com/images/a/ae/Kyanite_Bow.png",avg:!1,values:[[{name:"Attack Value",bonus:[392,598]},{name:"Attack Speed",bonus:21},{name:"Half Humans",bonus:12},{name:"Strength against monsters",bonus:5}],[{name:"Attack Value",bonus:[407,613]},{name:"Attack Speed",bonus:22},{name:"Half Humans",bonus:15},{name:"Strength against monsters",bonus:5}],[{name:"Attack Value",bonus:[450,656]},{name:"Attack Speed",bonus:23},{name:"Half Humans",bonus:17},{name:"Strength against monsters",bonus:6}],[{name:"Attack Value",bonus:[528,734]},{name:"Attack Speed",bonus:25},{name:"Half Humans",bonus:20},{name:"Strength against monsters",bonus:8}]]}];var d=function(e){return s.a.createElement("div",{className:"weapondiv"},v.map((function(a){return s.a.createElement("label",{key:a.name},s.a.createElement("input",{type:"radio",className:"weapon",name:"weapon",value:a.name,onChange:function(n){return e.onChange(n,a.avg)}}),s.a.createElement("img",{className:"weaponimg",src:a.src,alt:a.name}),a.name)})))};var k=function(e){return s.a.createElement("div",{className:"SashPercentage"},s.a.createElement("img",{className:"sashimg",src:"https://en-wiki.metin2.gameforge.com/images/5/50/Yin_Sash_%28custom%29.png",alt:"Sash Icon"}),s.a.createElement("input",{type:"text",placeholder:"Sash Percentage",value:e.sashPercentage,onChange:e.onChange}))},f=function(e){Object(m.a)(n,e);var a=Object(h.a)(n);function n(e){var t;return Object(c.a)(this,n),(t=a.call(this,e)).state={bonus:[]},t.calculateValues=t.calculateValues.bind(Object(i.a)(t)),t.calculateValue=t.calculateValue.bind(Object(i.a)(t)),t.getWeaponValues=t.getWeaponValues.bind(Object(i.a)(t)),t.clickCalculateButton=t.clickCalculateButton.bind(Object(i.a)(t)),t}return Object(r.a)(n,[{key:"calculateValue",value:function(e,a){var n=0;return 0===(n=Math.floor(a*e/100))&&n++,n}},{key:"calculateValues",value:function(){for(var e=this.getWeaponValues().concat(this.props.original.bonus).map((function(e){return Object(l.a)({},e)})),a=0;a<e.length;a++){var n=e[a];if(Array.isArray(n.bonus)){var t=this.calculateValue(n.bonus[0],this.props.original.sashPercentage),s=this.calculateValue(n.bonus[1],this.props.original.sashPercentage);e[a].bonus=t+"-"+s}else n.bonus<=0||isNaN(n.bonus)?(e.splice(a,1),a--):e[a].bonus=this.calculateValue(n.bonus,this.props.original.sashPercentage)}this.setState({bonus:e})}},{key:"getWeaponValues",value:function(){for(var e=0;e<v.length;e++){var a=v[e];if(a.name===this.props.original.weapon)return a.values[this.props.original.itemlevel-6]}}},{key:"clickCalculateButton",value:function(){""===this.props.original.sashPercentage?alert("The Sash Percentage to have a value."):isNaN(this.props.original.sashPercentage)?alert("The Sash Percentage needs to be a number."):""===this.props.original.weapon?alert("You need to select a weapon."):this.props.original.sashPercentage>25||this.props.original.sashPercentage<=0?alert("The Sash Percentage needs to be between 0 and 25."):this.calculateValues()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("button",{onClick:this.clickCalculateButton},"Calculate Final Values"),this.state.bonus.length>0&&s.a.createElement("div",{className:"FinalValues"},s.a.createElement("table",{className:"rwd-table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Bonus"),s.a.createElement("th",null,"Sash Value"))),s.a.createElement("tbody",null,this.state.bonus.map((function(e,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",{"data-th":"Bonus"},e.name),s.a.createElement("td",{"data-th":"FinalValue"},e.bonus))}))))))}}]),n}(s.a.Component),S=function(e){Object(m.a)(n,e);var a=Object(h.a)(n);function n(e){var t;return Object(c.a)(this,n),(t=a.call(this,e)).wrapper=s.a.createRef(),t.state={sashPercentage:"",weapon:"",avg:!1,itemlevel:9,bonus:[]},t.changePercentage=t.changePercentage.bind(Object(i.a)(t)),t.handleChange=t.handleChange.bind(Object(i.a)(t)),t.addBonus=t.addBonus.bind(Object(i.a)(t)),t.changeLevel=t.changeLevel.bind(Object(i.a)(t)),t.changeWeapon=t.changeWeapon.bind(Object(i.a)(t)),t}return Object(r.a)(n,[{key:"changePercentage",value:function(e){var a=this.state.sashPercentage;a=e.target.value,this.setState({sashPercentage:a})}},{key:"handleChange",value:function(e,a,n){var t=this.state.bonus.map((function(e){return Object(l.a)({},e)}));n?t[a].bonus=e.target.value:t[a].name=e.target.value,this.setState({bonus:t})}},{key:"addBonus",value:function(e){if(this.state.bonus.length>=5)alert("The maximum number of bonus is 5.");else{var a=this.state.bonus.map((function(e){return Object(l.a)({},e)}));a.push({name:e,bonus:""}),this.setState({bonus:a})}}},{key:"changeLevel",value:function(e){var a=this.state.itemlevel;a=parseInt(e.target.value),this.setState({itemlevel:a})}},{key:"changeWeapon",value:function(e,a){var n=this.state.weapon;n=e.target.value,this.setState({weapon:n,avg:a})}},{key:"render",value:function(){return s.a.createElement("div",{className:"SashCalculator"},s.a.createElement(k,{sashPercentage:this.state.sashPercentage,onChange:this.changePercentage}),s.a.createElement(d,{onChange:this.changeWeapon}),s.a.createElement(p,{onChange:this.changeLevel}),s.a.createElement(b,{bonus:this.state.bonus,onChange:this.handleChange,addBonus:this.addBonus,avg:this.state.avg}),s.a.createElement(f,{original:this.state}))}}]),n}(s.a.Component);var A=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(S,null))};o.a.render(s.a.createElement(A,null),document.getElementById("root"))},9:function(e,a,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c6717cae.chunk.js.map