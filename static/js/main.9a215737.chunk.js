(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(1),a=n(10),r=n.n(a),c=n(8),i=n(6),l=n(7),s=n(2),u=n(3),d=n(5),b=n(4),f=(n(16),n(0)),h=function(t){var e=t.toDo,n=t.done;return Object(f.jsxs)("div",{className:"app-header d-flex",children:[Object(f.jsx)("h1",{children:"To Do List"}),Object(f.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})},j=(n(18),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={term:""},t.onSearchChange=function(e){var n=e.target.value;t.setState({term:n}),t.props.onSearchChange(n)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)("input",{type:"text",className:"form-control search-panel",placeholder:"type to search",value:this.state.term,onChange:this.onSearchChange})}}]),n}(o.Component)),m=(n(19),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterChange,o=this.buttons.map((function(t){var o=t.name,a=t.label,r=e===o?"btn-info":"btn-outline-secondary";return Object(f.jsx)("button",{type:"button",className:"btn ".concat(r),onClick:function(){return n(o)},children:a},o)}));return Object(f.jsx)("div",{className:"btn-group",children:o})}}]),n}(o.Component)),p=n(11),g=(n(20),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDeleted,o=t.onToggleImportant,a=t.onToggleDone,r=t.important,c="todo-list-item";return t.done&&(c+=" done"),r&&(c+=" important"),Object(f.jsxs)("span",{className:c,children:[Object(f.jsx)("span",{className:"todo-list-item-label",onClick:a,children:e}),Object(f.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-sm float-end",onClick:n,children:Object(f.jsx)("i",{className:"fas fa-trash"})}),Object(f.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-end",onClick:o,children:Object(f.jsx)("i",{className:"fas fa-exclamation"})})]})}}]),n}(o.Component)),O=(n(21),["id"]),v=function(t){var e=t.todos,n=t.onDeleted,o=t.onToggleImportant,a=t.onToggleDone,r=e.map((function(t){var e=t.id,r=Object(p.a)(t,O);return Object(f.jsx)("li",{className:"list-group-item",children:Object(f.jsx)(g,Object(i.a)(Object(i.a)({},r),{},{onDeleted:function(){return n(e)},onToggleImportant:function(){return o(e)},onToggleDone:function(){return a(e)}}))},e)}));return Object(f.jsx)("ul",{className:"list-group todo-list",children:r})},x=(n(22),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={label:""},t.onLabelChange=function(e){t.setState({label:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.state.label&&(t.props.onItemAdded(t.state.label),t.setState({label:""}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit,children:[Object(f.jsx)("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"What needs to be done",value:this.state.label}),Object(f.jsx)("button",{className:"btn btn-outline-secondary form-button",type:"submit",children:"Add Item"})]})}}]),n}(o.Component)),y=(n(23),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).maxId=100,t.state={todoData:[t.createTodoItem("drink coffee"),t.createTodoItem("build React App"),t.createTodoItem("don't get crazy :)")],term:"",filter:"all"},t.addItem=function(e){var n=t.createTodoItem(e);t.setState((function(t){var e=t.todoData;return{todoData:[].concat(Object(l.a)(e),[n])}}))},t.deleteItem=function(e){t.setState((function(t){var n=t.todoData,o=n.findIndex((function(t){return t.id===e})),a=[].concat(Object(l.a)(n.slice(0,o)),Object(l.a)(n.slice(o+1)));return n.splice(o,1),{todoData:a}}))},t.toggleProperty=function(t,e,n){var o=t.findIndex((function(t){return t.id===e})),a=t[o],r=Object(i.a)(Object(i.a)({},a),{},Object(c.a)({},n,!a[n]));return[].concat(Object(l.a)(t.slice(0,o)),[r],Object(l.a)(t.slice(o+1)))},t.onToggleDone=function(e){t.setState((function(n){var o=n.todoData;return{todoData:t.toggleProperty(o,e,"done")}}))},t.onToggleImportant=function(e){t.setState((function(n){var o=n.todoData;return{todoData:t.toggleProperty(o,e,"important")}}))},t.filter=function(t,e){switch(e){default:return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}))}},t.onSearchChange=function(e){t.setState({term:e})},t.onFilterChange=function(e){t.setState({filter:e})},t}return Object(u.a)(n,[{key:"createTodoItem",value:function(t){return{label:t,important:!1,done:!1,id:this.maxId++}}},{key:"search",value:function(t,e){return e?t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1})):t}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.term,o=t.filter,a=this.filter(this.search(e,n),o),r=e.filter((function(t){return t.done})).length,c=e.length-r;return Object(f.jsxs)("div",{className:"todo-app",children:[Object(f.jsx)(h,{toDo:c,done:r}),Object(f.jsxs)("div",{className:"top-panel d-flex",children:[Object(f.jsx)(j,{onSearchChange:this.onSearchChange}),Object(f.jsx)(m,{filter:o,onFilterChange:this.onFilterChange})]}),Object(f.jsx)(v,{todos:a,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),Object(f.jsx)(x,{onItemAdded:this.addItem})]})}}]),n}(o.Component));r.a.render(Object(f.jsx)(y,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.9a215737.chunk.js.map