(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(17)},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(3),l=n.n(i),s=(n(15),n(1)),r=n(7),d=n(4),c=n(5),u=n(8),h=n(6),m=n(9),f=function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={todo:"",todos:[],status:!1},n.handleChange=function(t){n.setState({todo:t.target.value})},n.handleAddTodo=function(t){"Enter"===t.key&&n.setState(function(t){return{todo:"",todos:Object(r.a)(t.todos).concat([{id:Date.now(),name:t.todo,status:!1,edit:!1}])}})},n.handleEditTodo=function(t,e){"Enter"===t.key&&n.setState(function(t){return{todos:t.todos.map(function(t){return t.id===e.id?Object(s.a)({},t,e):t})}})},n.handleCheckAll=function(){n.setState(function(t){return{todos:t.todos.map(function(e){return Object(s.a)({},e,{status:!t.status})}),status:!t.status}})},n.handleDeleteAll=function(){n.setState(function(t){return{todos:t.todos.filter(function(t){return!0!==t.status})}})},n.handleClickTodo=function(t){n.setState(function(e){return{todos:e.todos.map(function(e){return e.id===t.id?Object(s.a)({},e,t):e})}})},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("div",null,o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",null,"Active",this.state.todos.filter(function(t){return!1===t.status}).length),o.a.createElement("div",null,"Finish",this.state.todos.filter(function(t){return!0===t.status}).length)),o.a.createElement("input",{type:"text",value:this.state.todo,onChange:this.handleChange,onKeyPress:this.handleAddTodo,className:"form-control"}),this.state.todos.length>0&&o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",{onClick:this.handleCheckAll},"Check All"),o.a.createElement("div",{onClick:this.handleDeleteAll},"Delete All")),o.a.createElement("div",null,this.state.todos.map(function(e){return o.a.createElement("div",{className:"d-flex justify-content-between mt-2",key:e.id},o.a.createElement("div",null,e.edit?o.a.createElement("input",{autoFocus:!0,onBlur:function(){return t.handleClickTodo({id:e.id,edit:!e.edit})},defaultValue:e.name,onKeyPress:function(n){return t.handleEditTodo(n,{id:e.id,name:n.target.value,edit:!e.edit})},className:"form-control"}):o.a.createElement("div",{onClick:function(){return t.handleClickTodo({id:e.id,status:!e.status})}},e.status?o.a.createElement("strike",null," ",e.name," "):e.name)),o.a.createElement("button",{onClick:function(){return t.handleClickTodo({id:e.id,edit:!e.edit})},className:"btn btn-primary"},"Edit"))}))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.04f23e6c.chunk.js.map