(this.webpackJsonpexpenses=this.webpackJsonpexpenses||[]).push([[0],{20:function(e,t,c){e.exports={container:"Input_container__39iVm",containerInputs:"Input_containerInputs__3wIvu",priority:"Input_priority__3eop8",size:"Input_size__9hbnl",animation:"Input_animation__3SJr_",showUp:"Input_showUp__RSW6L",eLetter:"Input_eLetter__3TOLM",bop:"Input_bop__1MWaL",restLetter:"Input_restLetter__1eMg6",bopB:"Input_bopB__16oHI"}},33:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(19),i=c.n(a),r=(c(33),c(5)),l=c(14),j=c(28),d=c(27),b=c.n(d),o=c(15),u=c.n(o),h=c(0);function O(e){var t,c=e.list,s=e.setList,a=Object(n.useState)(""),i=Object(r.a)(a,2),d=i[0],o=i[1],O=Object(n.useState)(""),x=Object(r.a)(O,2),p=x[0],m=x[1],v=Object(n.useState)(""),N=Object(r.a)(v,2),f=N[0],_=N[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"input-field col s12",children:[Object(h.jsx)("i",{className:"material-icons prefix",children:"mode_edit"}),Object(h.jsx)("textarea",(t={type:"text",id:"text",className:"autocomplete materialize-textarea"},Object(l.a)(t,"type","text"),Object(l.a)(t,"value",d),Object(l.a)(t,"onChange",(function(e){return o(e.target.value)})),t)),Object(h.jsx)("label",{htmlFor:"text",children:"Expenses"})]})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"input-field col s12 xd",children:[Object(h.jsx)("i",{className:"material-icons prefix",children:"attach_money"}),Object(h.jsx)("input",{type:"number",id:"amount",className:"autocomplete ",min:"1",step:"any",value:f,onChange:function(e){return _(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"amount",children:"Amount"})]})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"input-field col s12",children:[Object(h.jsx)("i",{className:"material-icons prefix",children:"date_range"}),Object(h.jsx)("input",{type:"date",id:"date1",className:"datepicker",value:p,format:"dd-MM-yyyy",min:(new Date).toISOString().slice(0,10),onChange:function(e){return m(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"date1",children:"date:"})]})}),Object(h.jsxs)("button",{className:"btn waves-effect waves-light brown darken-1",type:"submit",onClick:function(){!function(e,t,n){var a={id:b()(),text:e,amount:t,date:n};if(e.length>0&&n.length>0&&t.length>0){var i=[].concat(Object(j.a)(c),[a]);i.sort((function(e,t){return e.date<t.date?-1:e.date>t.date?1:0})),s(i)}else 0==e.length?u.a.toast({html:"Nie mo\u017cna wpisa\u0107 wydatku bez nazwy",classes:"rounded"}):0==t.length?u.a.toast({html:"Nie mo\u017cna wydatku bez warto\u015bci",classes:"rounded"}):u.a.toast({html:"Nie mo\u017cna doda\u0107 wydatku bez podania daty",classes:"rounded"})}(d,f,p),o(""),m(""),_("")},children:[Object(h.jsx)("i",{className:"material-icons right",children:"send"})," dodaj"]})]})}var x=c(9),p=c.n(x),m=c(20),v=c.n(m),N=c(8);function f(e){var t=e.list,c=e.setList,s=e.setSummaryValue,a=e.setCountValue,i=Object(n.useState)(""),l=Object(r.a)(i,2),j=l[0],d=(l[1],Object(n.useState)(!0)),b=Object(r.a)(d,2),o=b[0],u=b[1],O=Object(n.useState)(""),x=Object(r.a)(O,2),p=x[0],m=x[1],f=Object(n.useState)(""),_=Object(r.a)(f,2),g=_[0],y=_[1],w=Object(n.useState)(""),S=Object(r.a)(w,2),A=S[0],I=S[1],C=Object(n.useState)(""),L=Object(r.a)(C,2),E=L[0],k=L[1],M=Object(n.useState)(""),T=Object(r.a)(M,2),F=T[0],z=T[1];var V=0,$=0,D=t.filter((function(e){return e.text.includes(p)})).map((function(e){var t=e.id,c=e.text,n=e.amount,s=e.date;if(o){if(""==g&&""==A)return V+=Number(n),$+=1,Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("b",{children:c}),Object(h.jsx)("p",{children:s})]}),Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:"$"+n})})]},t);if(g<=s&&A>=s)return V+=Number(n),$+=1,Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("b",{children:c}),Object(h.jsx)("p",{children:s})]}),Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:"$"+n})})]},t);if(g<=s&&""==A)return V+=Number(n),$+=1,Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("b",{children:c}),Object(h.jsx)("p",{children:s})]}),Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:"$"+n})})]},t);if(A>=s&&""==g)return V+=Number(n),$+=1,Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("b",{children:c}),Object(h.jsx)("p",{children:s})]}),Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:"$"+n})})]},t)}else{if(""==E&&""==F)return V+=Number(n),$+=1,Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("b",{children:c}),Object(h.jsx)("p",{children:s})]}),Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:"$"+n})})]},t);if(Number(E)<=Number(n)&&Number(F)>=Number(n))return V+=Number(n),$+=1,Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("b",{children:c}),Object(h.jsx)("p",{children:s})]}),Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:"$"+n})})]},t);if(Number(E)<=Number(n)&&""==F)return V+=Number(n),$+=1,Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("b",{children:c}),Object(h.jsx)("p",{children:s})]}),Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:"$"+n})})]},t);if(Number(F)>=Number(n)&&""==E)return V+=Number(n),$+=1,Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("b",{children:c}),Object(h.jsx)("p",{children:s})]}),Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:"$"+n})})]},t)}}));return t.length?Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:v.a.container,children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"input-field col s3 ",children:Object(h.jsx)(N.TextInput,{id:"TextInput-4",label:"Search Expenses",value:p,onChange:function(e){return m(e.target.value)}})}),Object(h.jsx)("div",{className:"input-field col s3",children:Object(h.jsxs)(N.Select,{id:"Select",multiple:!1,options:{classes:"",dropdownOptions:{alignment:"left",autoTrigger:!0,closeOnClick:!0,constrainWidth:!0,coverTrigger:!0,hover:!1,inDuration:150,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:250}},value:j,onChange:function(e){"true"==e.target.value?(u(!0),k(""),z("")):(u(!1),y(""),I(""))},children:[Object(h.jsx)("option",{selected:!0,Value:"true",children:"DATE"}),Object(h.jsx)("option",{value:"false",children:"AMOUNT"})]})}),Object(h.jsx)("div",{className:"input-field col s6",children:o?Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"input-field col s6",children:[Object(h.jsx)("input",{type:"date",id:"date11",className:"datepicker",value:g,format:"dd-MM-yyyy",onChange:function(e){return y(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"date11",children:"DATE FROM:"})]}),Object(h.jsxs)("div",{className:"input-field col s6",children:[Object(h.jsx)("input",{type:"date",id:"date12",className:"datepicker",value:A,format:"dd-MM-yyyy",min:g,onChange:function(e){return I(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"date12",children:"DATE TO:"})]})]}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"input-field col s6",children:[Object(h.jsx)("input",{type:"number",id:"amount1",className:"autocomplete ",min:"1",step:"any",value:E,onChange:function(e){return k(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"amount1",children:"Amount FROM:"})]}),Object(h.jsxs)("div",{className:"input-field col s6",children:[Object(h.jsx)("input",{type:"number",id:"amount2",className:"autocomplete ",min:E,step:"any",value:F,onChange:function(e){return z(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"amount2",children:"Amount TO:"})]})]})})]}),Object(h.jsx)("h5",{children:Object(h.jsx)("a",{className:"btn-floating btn-small waves-effect waves-light red",onClick:function(){c([])},children:Object(h.jsx)("i",{className:"material-icons",children:"delete_sweep"})})}),Object(h.jsxs)("table",{className:"centered",children:[Object(h.jsx)("thead",{className:"grey lighten-4",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Expense"}),Object(h.jsx)("th",{children:"Amount"})]})}),Object(h.jsx)("tbody",{children:D}),s(Math.round(100*V)/100),a($)]})]})}):Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:v.a.container,children:Object(h.jsx)("h5",{children:'No expenses to show! click on "Add Expense" button to add new!'})})})}c(80);var _=function(){return Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("nav",{children:Object(h.jsx)("div",{className:"nav-wrapper grey darken-3",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row navRow",children:Object(h.jsx)("div",{className:"col s1",children:Object(h.jsx)("a",{href:"/ReactExpenses/",className:"brand-logo",children:"E-EXPENSE"})})})})})})})};var g=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(0),i=Object(r.a)(a,2),l=i[0],j=i[1],d=Object(n.useState)(0),b=Object(r.a)(d,2),o=b[0],u=b[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(_,{}),Object(h.jsxs)("h1",{className:p.a.size,children:[Object(h.jsx)("span",{className:p.a.eLetter,children:"E-"}),Object(h.jsx)("span",{className:p.a.restLetter,children:"EXPENSE"})]}),Object(h.jsx)("div",{className:p.a.container,children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"input-field col l12 m12 s12",children:[Object(h.jsxs)("h3",{children:["Viewing ",o," expenses totaling $",l]}),Object(h.jsx)("div",{className:"input-field col l4 m12 s12",children:Object(h.jsx)(N.Collapsible,{accordion:!0,popout:!0,children:Object(h.jsx)(N.CollapsibleItem,{header:"Add expense",icon:Object(h.jsx)(N.Icon,{children:"attach_money"}),node:"show",children:Object(h.jsx)("div",{className:p.a.xd,node:"show",children:Object(h.jsx)(O,{list:c,setList:s})})})})})]})})}),Object(h.jsx)(f,{list:c,setList:s,setSummaryValue:j,setCountValue:u})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),y()},9:function(e,t,c){e.exports={App:"App_App__1GxPK",animation:"App_animation__2wdDV",showUp:"App_showUp__215aJ",eLetter:"App_eLetter__3ZhIN",bop:"App_bop__1rXsT",size:"App_size__2UhQe",restLetter:"App_restLetter__3Vxid",bopB:"App_bopB__2pLS2",container:"App_container__1Uc9-"}}},[[81,1,2]]]);
//# sourceMappingURL=main.f6c04998.chunk.js.map