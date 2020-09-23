(this.webpackJsonpcapstone_project=this.webpackJsonpcapstone_project||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),l=(a(100),a(101),a(26)),i=a(27),s=a(30),u=a(28),m=a(166),h=a(167),d=a(165),p=a(5),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(m.a.Brand,{href:"/"},"FireThreads"),r.a.createElement(p.Button,{h:"1.5rem",w:"1.5rem",bg:"warning700",hoverBg:"warning600",rounded:"circle",m:{r:"1rem"},shadow:"2",hoverShadow:"4"},r.a.createElement(p.Anchor,{href:"https://twitter.com/bfloblk"},r.a.createElement(p.Icon,{name:"Twitter",size:"20px",color:"white"}))),r.a.createElement(p.Button,{h:"1.5rem",w:"1.5rem",bg:"warning700",hoverBg:"warning600",rounded:"circle",m:{r:"1rem"},shadow:"2",hoverShadow:"4"},r.a.createElement(p.Anchor,{href:"https://facebook.com/bfloblk"},r.a.createElement(p.Icon,{name:"Facebook",size:"20px",color:"white"}))),r.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(h.a,{className:"mr-auto"},r.a.createElement(d.a,{title:"Threads",id:"collasible-nav-dropdown"},r.a.createElement(d.a.Item,{href:"/"},"Men's Clothing"))),r.a.createElement(h.a,null,r.a.createElement(h.a.Link,{href:"/Signin"},"Sign in"),r.a.createElement(h.a.Link,{href:"/Cart"},"Cart"))))}}]),a}(n.Component),f=a(46),b=a(9),g=a(59),v=a(19),x=a.n(v),C=a(39),w=a(86),k=a.n(w),I=r.a.createContext(),O=(I.Consumer,k.a.buildClient({storefrontAccessToken:"dd4d4dc146542ba7763305d71d1b3d38",domain:"graphql.myshopify.com"})),S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={products:[],product:{},checkout:{},isCartOpen:!1},e.createCheckout=Object(C.a)(x.a.mark((function t(){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.checkout.create();case 2:return a=t.sent,localStorage.setItem("checkout",a.id),t.next=6,e.setState({checkout:a});case 6:case"end":return t.stop()}}),t)}))),e.fetchCheckout=function(){var t=Object(C.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O.checkout.fetch(a).then((function(t){e.setState({checkout:t})}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.addItemToCheckout=function(){var t=Object(C.a)(x.a.mark((function t(a,n){var r,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[{variantId:a,quantity:parseInt(n,10)}],t.next=3,O.checkout.addLineItems(e.state.checkout.id,r);case 3:c=t.sent,e.setState({checkout:c}),e.openCart();case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.fetchAllProducts=Object(C.a)(x.a.mark((function t(){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.product.fetchAll();case 2:a=t.sent,e.setState({products:a});case 4:case"end":return t.stop()}}),t)}))),e.fetchProductWithId=function(){var t=Object(C.a)(x.a.mark((function t(a){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.product.fetch(a);case 2:return n=t.sent,e.setState({product:n}),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.closeCart=function(){e.setState({isCartOpen:!1})},e.openCart=function(){e.setState({isCartOpen:!0})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){localStorage.checkout?this.fetchCheckout(localStorage.checkout):this.createCheckout()}},{key:"render",value:function(){return r.a.createElement(I.Provider,{value:Object(g.a)(Object(g.a)({},this.state),{},{fetchAllProducts:this.fetchAllProducts,fetchProductWithId:this.fetchProductWithId,closeCart:this.closeCart,openCart:this.openCart,addItemToCheckout:this.addItemToCheckout})},this.props.children)}}]),a}(n.Component),y=function(){return r.a.createElement(p.Div,{bg:"transparent",d:"flex",align:"center",justify:"center",pos:"absolute",top:"0",bottom:"0",right:"0",left:"0",style:{zIndex:-1}},r.a.createElement(p.Icon,{name:"Loading3",size:"4rem",color:"brand500"}))},j=function(){var e=Object(n.useContext)(I),t=e.fetchAllProducts,a=e.products;return Object(n.useEffect)((function(){return t(),function(){}}),[t]),a?r.a.createElement(p.Container,null,r.a.createElement(p.Row,null,a.map((function(e){return r.a.createElement(p.Col,{key:e.id,size:"3"},r.a.createElement(f.b,{to:"/product/".concat(e.id),style:{textDecoration:"none"}},r.a.createElement(p.Div,{p:"2rem"},r.a.createElement(p.Div,{h:"20rem",bgImg:e.images[0].src,bgSize:"cover",bgPos:"center center",shadow:"3",hoverShadow:"4",transition:"0.3s",m:{b:"1.5rem"}}),r.a.createElement(p.Text,{tag:"h1",textWeight:"300",textSize:"subheader",textDecor:"none",textColor:"orange"},e.title),r.a.createElement(p.Text,{tag:"h2",textWeight:"300",textSize:"body",textDecor:"none",textColor:"white"},"$",e.variants[0].price))))})))):r.a.createElement(y,null)},T=a(163),N=a(88),A=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=(new Date).getFullYear();return r.a.createElement(m.a,{fixed:"bottom",bg:"dark",variant:"dark"},r.a.createElement(T.a,null,r.a.createElement(N.a,{lg:12,className:"text-center text-muted"},r.a.createElement("div",null,e," - ",e+1,", All Rights Reserved by FireThreads"))))}}]),a}(n.Component),D=a(55),F=a(50),P=a(62),z=a.n(P),R=a(164),L=a(85),W="https://glacial-wave-82551.herokuapp.com/user-management/v1/users/",B=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),console.log("My post");var t={firstName:n.state.firstName,lastName:n.state.lastName,email:n.state.email};n.postUserData(t)},n.postUserData=function(e){return z.a.post(W,e).then((function(e){var t=e.data;console.log(t)}))},n.state={firstName:"",lastName:"",email:""},n.handleUserInput=n.handleUserInput.bind(Object(F.a)(n)),n}return Object(i.a)(a,[{key:"handleUserInput",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(D.a)({},a,n))}},{key:"getData",value:function(){z.a.get(W).then((function(e){var t=e.data;console.log(t)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App-header"},r.a.createElement("br",null),r.a.createElement("h1",{className:"sign-in"},"Please Sign In"),r.a.createElement("br",null),r.a.createElement(T.a,{lg:"auto"},r.a.createElement(R.a,{onSubmit:this.handleSubmit},r.a.createElement(R.a.Row,{className:"align-items-center"},r.a.createElement(N.a,{xs:"auto"},r.a.createElement(R.a.Label,{htmlFor:"inlineFormInput",srOnly:!0},"First Name"),r.a.createElement(R.a.Control,{onChange:this.handleUserInput,className:"mb-2",name:"firstName",id:"inlineFormInput",value:this.state.firstName,placeholder:"Enter Your First Name"})),r.a.createElement(N.a,{xs:"auto"},r.a.createElement(R.a.Label,{htmlFor:"inlineFormInput",srOnly:!0},"Last Name"),r.a.createElement(R.a.Control,{onChange:this.handleUserInput,className:"mb-2",name:"lastName",id:"inlineFormInput",value:this.state.lastName,placeholder:"Enter Your Last Name"})),r.a.createElement(N.a,{xs:"auto"},r.a.createElement(R.a.Label,{htmlFor:"inlineFormInputGroup",srOnly:!0},"Email"),r.a.createElement(R.a.Control,{onChange:this.handleUserInput,id:"inlineFormInputGroup",value:this.state.email,name:"email",placeholder:"Enter Your Email"})),r.a.createElement(N.a,{xs:"auto"},r.a.createElement(R.a.Check,{type:"checkbox",id:"autoSizingCheck",className:"mb-2",label:"Remember me"})),r.a.createElement(N.a,{xs:"auto"},r.a.createElement(L.a,{onSubmit:this.handleSubmit,type:"submit",className:"mb-2"},"Submit"))))))}}]),a}(n.Component),U=a(16),M=a(91),G=function(){var e=Object(b.f)().id,t=Object(n.useContext)(I),a=t.fetchProductWithId,c=t.addItemToCheckout,o=t.product;return Object(n.useEffect)((function(){return a(e),function(){}}),[a,e]),o.title?r.a.createElement(p.Container,null,r.a.createElement(p.Row,{m:{b:"2rem"},p:"2rem"},r.a.createElement(p.Col,null,r.a.createElement(p.Div,{bgImg:o.images[0].src,shadow:"3",bgSize:"cover",w:"100%",bgPos:"center center",h:"40rem"})),r.a.createElement(p.Col,null,r.a.createElement(p.Text,{tag:"h1",textColor:"white",textWeight:"200",m:{y:"2rem"}},o.title),r.a.createElement(p.Text,{tag:"h3",m:{y:"2rem"},textWeight:"200",textColor:"orange"},"$",o.variants[0].price),r.a.createElement(p.Text,{tag:"p",textSize:"paragraph",textColor:"white",textWeight:"200"},o.description),r.a.createElement(p.Button,{rounded:"0",shadow:"3",bg:"white",m:{y:"2rem"},onClick:function(){return c(o.variants[0].id,1)}},"Add To Cart")))):r.a.createElement(y,null)},H=function(){var e=Object(n.useContext)(I),t=e.isCartOpen,a=e.closeCart,c=e.checkout;return c.lineItems?r.a.createElement(p.SideDrawer,{isOpen:t,onClose:a},r.a.createElement(p.Container,{d:"flex",flexDir:"column",h:"100%"},r.a.createElement(p.Row,{justify:"space-between",border:{b:"1px solid"},p:"0.7rem",borderColor:"gray300"},r.a.createElement(p.Text,{tag:"h1",textColor:"black500",textSize:"paragraph",hoverTextColor:"black700",transition:"0.3s"},"Bag"),r.a.createElement(p.Anchor,{onClick:function(){return a()}},r.a.createElement(p.Icon,{name:"Cross",color:"black500"}))),r.a.createElement(p.Row,{flexGrow:"2",p:"0.7rem",overflow:"auto",flexWrap:"nowrap",flexDir:"column"},c.lineItems.length<1?r.a.createElement(p.Row,null,r.a.createElement(p.Col,null,r.a.createElement(p.Text,{tag:"h1",textColor:"black500",textSize:"paragraph",hoverTextColor:"black700",transition:"0.3s"},"Cart Is Empty"))):r.a.createElement(r.a.Fragment,null,c.lineItems&&c.lineItems.map((function(e){return r.a.createElement(p.Row,{key:e.id,p:{t:"5px"}},r.a.createElement(p.Col,null,r.a.createElement(p.Div,{bgImg:e.variant.image.src,bgSize:"cover",bgPos:"center",h:"5rem",w:"4rem"})),r.a.createElement(p.Col,null,r.a.createElement(p.Text,null,e.title),r.a.createElement(p.Text,null,e.variant.title),r.a.createElement(p.Text,null,e.quantity)),r.a.createElement(p.Col,null,r.a.createElement(p.Text,null,e.variant.price)))})))),r.a.createElement(p.Row,{border:{t:"1px solid"},p:"0.7rem",borderColor:"gray300"},r.a.createElement(p.Button,{w:"100%",rounded:"0",bg:"black500",shadow:"2",hoverShadow:"3",m:{t:"1rem"}},"Checkout")))):null},Y=new M.a;var q=function(){return r.a.createElement(S,null,r.a.createElement(U.Provider,{value:Y,debug:void 0,debugAfterHydration:!0},r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"jumbotron"},r.a.createElement("h1",null,"FIRETHREADS"),r.a.createElement("p",null,"PROVIDING ALL THE LATEST IN MEN'S FASHION EST. 2020"))),r.a.createElement(H,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,component:j}),r.a.createElement(b.a,{path:"/Signin",exact:!0,component:B}),r.a.createElement(b.a,{path:"/product/:id"},r.a.createElement(G,null)),r.a.createElement(b.a,{path:"/Cart",exact:!0,component:H})),r.a.createElement(A,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(158);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a(159)}},[[95,1,2]]]);
//# sourceMappingURL=main.47709839.chunk.js.map