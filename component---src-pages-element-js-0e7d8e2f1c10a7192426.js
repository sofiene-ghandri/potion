webpackJsonp([65745867884573],{235:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=a(2),c=l(i),u=a(34),d=a(33),s=l(d),m=a(26),f=l(m),h=a(75),E=a(54),p=a(74),g=l(p),R=a(53),y=l(R),v=a(103),C=l(v),b=a(105),S=a(36),w=l(S),P=a(84),O=l(P),A=a(35),_=l(A),x=a(85),M=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.componentDidMount=function(){Prism&&Prism.highlightAll()},t.prototype.getSideLength=function(){var e=this.props.windowWidth,t=340;return e<1200&&(t=270),e<992&&(t=210),e<768&&(t=258),e<570&&(t=e-100),0===e&&(t=340),t},t.prototype.getDocs=function(){var e=(0,C.default)(this.props,"data.allMarkdownRemark.edges");if(!e)return"";var t=e.filter(function(e){return e.node.html.indexOf('name="elements"')>-1})[0].node.html;return t.slice(t.indexOf("<h2>"))},t.prototype.scrollTo=function(e){return function(){document.querySelector('[name="elements__'+e+'"]').scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}},t.prototype.render=function(){var e=this.getSideLength(),t=e/3*2;return c.default.createElement(s.default,{className:"no-padding"},c.default.createElement(_.default,{fluid:!0,name:"page-build"},c.default.createElement(f.default,{title:"Potion.js - React + D3",meta:[{property:"og:url",content:"http://numberpicture.com/build"},{property:"og:title",content:"Potion.js - React + D3"},{property:"og:description",content:"Low-level React components for declaratively composing animated, interactive SVG visualizations."},{name:"twitter:title",content:"Potion.js - React + D3"},{name:"twitter:description",content:"Low-level React components for declaratively composing animated, interactive SVG visualizations."},{charSet:"utf-8"}]}),c.default.createElement(b.Fab,{style:{right:"20px",bottom:"20px"}},c.default.createElement(b.FabButton,null,c.default.createElement("a",{onClick:this.scrollTo("top")},c.default.createElement(h.ChevronUp,null)))),c.default.createElement(u.Container,{fluid:!0},c.default.createElement(u.Row,null,c.default.createElement(u.Container,null,c.default.createElement(u.Row,null,c.default.createElement(u.Col,{lg:12},c.default.createElement("div",{name:"elements__top"}),c.default.createElement(O.default,null,"Elements"))),c.default.createElement(u.Row,null,c.default.createElement(u.Col,{lg:8},c.default.createElement("p",null,"Potion Elements are presentational React components that render the building blocks of visualizations. They all render SVG by default but this can be overridden using component injection. The prop names are designed to be as similar to the API of native SVG and D3 generators."),c.default.createElement("p",null,"Use these in combination with ",c.default.createElement(g.default,{to:"/layout"},"Potion Layouts")," and other utilities to construct custom animated  visualizations from the ground up.")),c.default.createElement(w.default,{half:!0})),c.default.createElement(u.Row,null,c.default.createElement(u.Col,{md:4,sm:6},c.default.createElement("a",{onClick:this.scrollTo("arc")},c.default.createElement("h3",null,"Arc"),c.default.createElement("div",{className:"chart"},c.default.createElement(E.Svg,{width:e,height:t},c.default.createElement(E.Arc,{innerRadius:0,outerRadius:t/3,startAngle:Math.PI/3,endAngle:Math.PI/3*2,fill:x.COLORS.DARK_GREY,transform:{translate:[e/3,t/2]}}))))),c.default.createElement(u.Col,{md:4,sm:6},c.default.createElement("a",{onClick:this.scrollTo("area")},c.default.createElement("h3",null,"Area"),c.default.createElement("div",{className:"chart"},c.default.createElement(E.Svg,{width:e,height:t},c.default.createElement(E.Area,{x:function(e){return e.x},y1:function(e){return e.y1},y0:.8*t,points:[{x:.1*e,y1:.2*t},{x:.3*e,y1:.4*t},{x:.4*e,y1:.3*t},{x:.5*e,y1:.7*t},{x:.7*e,y1:.4*t},{x:.9*e,y1:.5*t}],fill:x.COLORS.DARK_GREY}))))),c.default.createElement(u.Col,{md:4,sm:6},c.default.createElement("a",{onClick:this.scrollTo("areaRadial")},c.default.createElement("h3",null,"AreaRadial"),c.default.createElement("div",{className:"chart"},c.default.createElement(E.Svg,{width:e,height:t},c.default.createElement(E.AreaRadial,{angle:function(e){return e.angle},outerRadius:function(e){return e.outerRadius},innerRadius:.1*t,points:[{angle:0,outerRadius:.3*t},{angle:.25*Math.PI,outerRadius:.2*t},{angle:.5*Math.PI,outerRadius:.3*t},{angle:.75*Math.PI,outerRadius:.2*t},{angle:Math.PI,outerRadius:.3*t},{angle:1.25*Math.PI,outerRadius:.2*t},{angle:1.5*Math.PI,outerRadius:.3*t},{angle:1.75*Math.PI,outerRadius:.2*t},{angle:2*Math.PI,outerRadius:.3*t}],fill:x.COLORS.DARK_GREY,transform:{translate:[e/2,t/2]}}))))),c.default.createElement(u.Col,{md:4,sm:6},c.default.createElement("a",{onClick:this.scrollTo("circle")},c.default.createElement("h3",null,"Circle"),c.default.createElement("div",{className:"chart"},c.default.createElement(E.Svg,{width:e,height:t},c.default.createElement(E.Circle,{cx:e/2,cy:t/2,r:50,fill:x.COLORS.DARK_GREY}))))),c.default.createElement(u.Col,{md:4,sm:6},c.default.createElement("a",{onClick:this.scrollTo("line")},c.default.createElement("h3",null,"Line"),c.default.createElement("div",{className:"chart"},c.default.createElement(E.Svg,{width:e,height:t},c.default.createElement(E.Line,{x1:e/3,y1:t/3,x2:e/3*2,y2:t/3*2,stroke:x.COLORS.DARK_GREY,strokeWidth:4}))))),c.default.createElement(u.Col,{md:4,sm:6},c.default.createElement("a",{onClick:this.scrollTo("lineRadial")},c.default.createElement("h3",null,"LineRadial"),c.default.createElement("div",{className:"chart"},c.default.createElement(E.Svg,{width:e,height:t},c.default.createElement(E.LineRadial,{fill:"none",stroke:x.COLORS.DARK_GREY,points:[[0,50],[.25*Math.PI,50],[.5*Math.PI,50],[.75*Math.PI,50],[Math.PI,50],[1.25*Math.PI,50],[1.5*Math.PI,50],[1.75*Math.PI,50],[2*Math.PI,50]],strokeWidth:4,transform:{translate:[e/2,t/2]}}))))),c.default.createElement(u.Col,{md:4,sm:6},c.default.createElement("a",{onClick:this.scrollTo("rect")},c.default.createElement("h3",null,"Rect"),c.default.createElement("div",{className:"chart"},c.default.createElement(E.Svg,{width:e,height:t},c.default.createElement(E.Rect,{x:e/3,y:t/3,width:e/3,height:t/3,fill:x.COLORS.DARK_GREY}))))),c.default.createElement(u.Col,{md:4,sm:6},c.default.createElement("a",{onClick:this.scrollTo("ribbon")},c.default.createElement("h3",null,"Ribbon"),c.default.createElement("div",{className:"chart"},c.default.createElement(E.Svg,{width:e,height:t},c.default.createElement(E.Ribbon,{source:{startAngle:.7524114,endAngle:1.1212972,radius:.4*t},target:{startAngle:1.8617078,endAngle:1.9842927,radius:.4*t},fill:x.COLORS.DARK_GREY,transform:{translate:[e/3,t/2]}}))))),c.default.createElement(u.Col,{md:4,sm:6},c.default.createElement("a",{onClick:this.scrollTo("symbolShape")},c.default.createElement("h3",null,"SymbolShape"),c.default.createElement("div",{className:"chart"},c.default.createElement(E.Svg,{width:e,height:t},c.default.createElement(E.SymbolShape,{type:"symbolCross",fill:x.COLORS.DARK_GREY,size:2e3,transform:{translate:[e/2,t/2]}}))))),c.default.createElement(u.Col,{md:4,sm:6},c.default.createElement("a",{onClick:this.scrollTo("text")},c.default.createElement("h3",null,"Text"),c.default.createElement("div",{className:"chart"},c.default.createElement(E.Svg,{width:e,height:t},c.default.createElement(E.Text,{dx:e/2,dy:t/2,fill:x.COLORS.DARK_GREY,fontSize:30,textAnchor:"middle",alignmentBaseline:"middle"},"Lorem ipsum")))))),c.default.createElement("div",{className:"page page-docs"},c.default.createElement("div",{className:"content"},c.default.createElement("div",{dangerouslySetInnerHTML:{__html:this.getDocs()}}))),c.default.createElement(w.default,null),c.default.createElement(w.default,null))))))},t}(i.Component);t.default=(0,y.default)(M);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-element-js-0e7d8e2f1c10a7192426.js.map