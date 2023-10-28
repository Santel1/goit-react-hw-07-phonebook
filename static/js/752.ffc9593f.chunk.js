"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[752],{752:function(n,e,o){o.r(e),o.d(e,{default:function(){return m}});var t,r=o(791),a=o(168),s=o(867).ZP.div(t||(t=(0,a.Z)(["\n  padding: 30px;\n  .phonebookTitle {\n  }\n  .phonebookForm {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n  }\n  .phonebookInput {\n    padding: 10px;\n    border-radius: 10px;\n    outline: none;\n    border: 1px solid grey;\n    width: 300px;\n    transition: border 0.3s;\n  }\n\n  .phonebookInput:hover,\n  .phonebookInput:focus {\n    border: 1px solid #05da05;\n  }\n\n  .phonebookAddBtn {\n    display: block;\n    width: 200px;\n    padding: 10px;\n    border-radius: 10px;\n    border: 1px solid grey;\n    transition: all 0.3s;\n  }\n\n  .phonebookAddBtn:hover,\n  .phonebookAddBtn:focus {\n    background-color: #05da05;\n    color: white;\n  }\n\n  .phonebookLabel {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-size: 20px;\n  }\n  .phonebookList {\n    padding: 0 30px;\n    list-style: none;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n    gap: 20px;\n  }\n\n  .phonebookItem {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    padding: 20px;\n    border: 1px solid grey;\n    border-radius: 10px;\n  }\n  .phonebookDeleteBtn {\n    width: 200px;\n    padding: 10px;\n    border-radius: 10px;\n    border: 1px solid grey;\n    transition: all 0.3s;\n  }\n\n  .phonebookDeleteBtn:hover,\n  .phonebookDeleteBtn:focus {\n    background-color: red;\n    color: white;\n  }\n\n  .phonebook {\n  }\n"]))),i=o(434),l=o(84),c=function(n){return n.phonebook.contacts.items},p=function(n){return n.phonebook.contacts.isLoading},d=function(n){return n.phonebook.contacts.error},u=function(n){return n.phonebook.filter},h=o(383),b=o(184),x=function(n){return(0,b.jsx)("p",{children:n.children})},m=function(){var n=(0,i.I0)(),e=(0,i.v9)(c),o=(0,i.v9)(p),t=(0,i.v9)(d),a=(0,i.v9)(u);(0,r.useEffect)((function(){n((0,l.CL)())}),[n]);var m=e.filter((function(n){return n.name.toLowerCase().includes(a.toLowerCase().trim())}));return(0,b.jsxs)(s,{children:[(0,b.jsx)("h1",{className:"phonebookTitle",children:"Phonebook"}),(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var o={name:e.currentTarget.contactName.value,phone:e.currentTarget.contactNumber.value};n((0,l.ky)(o)),console.log(o),e.currentTarget.reset()},className:"phonebookForm",children:[(0,b.jsxs)("label",{className:"phonebookLabel",children:[(0,b.jsx)("span",{children:"Name"}),(0,b.jsx)("input",{className:"phonebookInput",type:"text",name:"contactName",required:!0})]}),(0,b.jsxs)("label",{className:"phonebookLabel",children:[(0,b.jsx)("span",{children:"Number"}),(0,b.jsx)("input",{className:"phonebookInput",type:"text",name:"contactNumber",required:!0})]}),(0,b.jsx)("button",{type:"submit",className:"phonebookAddBtn",children:"Add contacts"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:"phonebookTitle",children:"Contacts"}),(0,b.jsx)("input",{onChange:function(e){var o=e.target.value;n((0,l.Tv)(o))},className:"phonebookInput",type:"text",name:"contactFilter",id:"",placeholder:"Seatch contact"})]}),o&&(0,b.jsx)(h.a,{}),t&&(0,b.jsx)(x,{children:t}),(0,b.jsx)("ul",{className:"phonebookList",children:null!==m&&m.map((function(e){var o=e.id,t=e.name,r=e.phone;return(0,b.jsxs)("li",{className:"phonebookItem",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("h3",{children:["Name: ",(0,b.jsx)("br",{})," ",t]}),(0,b.jsxs)("p",{children:["Tel: ",r]})]}),(0,b.jsx)("button",{className:"phonebookDeleteBtn",onClick:function(){return e=o,void n((0,l.GK)(e));var e},children:"Delete contact"})]},o)}))})]})}}}]);
//# sourceMappingURL=752.ffc9593f.chunk.js.map