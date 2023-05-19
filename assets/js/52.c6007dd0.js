(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{429:function(t,e,s){"use strict";s.r(e);var a=s(51),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"aws-redshift"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws-redshift"}},[t._v("#")]),t._v(" AWS Redshift")]),t._v(" "),s("p",[t._v("Through the "),s("a",{attrs:{href:"https://aws.amazon.com/redshift/",target:"_blank",rel:"noopener"}},[t._v("Redshift"),s("OutboundLink")],1),t._v(" connector, Ontop is able to construct VKGs on AWS Redshift databases.")]),t._v(" "),s("h2",{attrs:{id:"limitations-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations-exceptions"}},[t._v("#")]),t._v(" Limitations & Exceptions")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("AWS Redshift does not provide information about integrity constraints. Make sure to provide this information in order to avoid very inefficient queries.\nWe recommend using "),s("a",{attrs:{href:"/guide/advanced/lenses"}},[t._v("lenses")]),t._v(" for this purpose.")])]),t._v(" "),s("ul",[s("li",[t._v("The Simba Redshift JDBC does not support the use of default databases when connecting to Redshift.")]),t._v(" "),s("li",[t._v("Accessing "),s("code",[t._v("SUPER")]),t._v(' object fields with the "dot operator" is not supported (see below).')])]),t._v(" "),s("h2",{attrs:{id:"database-connection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-connection"}},[t._v("#")]),t._v(" Database Connection")]),t._v(" "),s("p",[t._v("The following shows the content of a sample "),s("code",[t._v(".properties")]),t._v(" file that can be used to connect Ontop to Redshift:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("jdbc.url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jdbc:redshift:iam://default.dummyaccount.eu-central-1.redshift-serverless.amazonaws.com:5439/defaultdatabase\njdbc.property.AccessKeyID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" public-access-key\njdbc.property.SecretAccessKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" private-access-key\njdbc.driver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" com.amazon.redshift.jdbc42.Driver\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("The AWS Redshift JDBC supports different types of authentication methods. The above "),s("code",[t._v(".property")]),t._v(" file corresponds to authentication with access keys. However, any other authentication method can be used with Ontop as well. In these cases, the corresponding connection properties have to be supplied as "),s("code",[t._v("jdbc.property.<property-name>")]),t._v(" instead of the "),s("code",[t._v("AccessKeyID")]),t._v(" and "),s("code",[t._v("SecretAccessKey")]),t._v(" properties.")])]),t._v(" "),s("h2",{attrs:{id:"nested-type-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nested-type-support"}},[t._v("#")]),t._v(" Nested Type Support")]),t._v(" "),s("p",[t._v("Ontop implements explicit compatibility with the Redshift type "),s("code",[t._v("SUPER")]),t._v(".")]),t._v(" "),s("p",[t._v("This type can be used with the "),s("a",{attrs:{href:"/guide/advanced/lenses#flattenlens"}},[t._v("flatten lens")]),t._v(". However, Ontop is not able to automatically infer the type of the result column.")]),t._v(" "),s("h3",{attrs:{id:"struct-access"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#struct-access"}},[t._v("#")]),t._v(" Struct Access")]),t._v(" "),s("p",[t._v("In Redshift, individual "),s("code",[t._v("SUPER")]),t._v(' struct objects can be accessed by SQL expressions using the "dot operator" on the '),s("code",[t._v("SUPER")]),t._v(" column. In Ontop, this feature is not currently supported.")]),t._v(" "),s("p",[t._v("Should any of their elements still be required, then a workaround can be performed by first transforming the struct into a JSON object and then accessing it using JSON functions.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("p",[s("code",[t._v("my_struct.my_attribute")]),t._v(" "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2.262ex",height:"1.181ex",viewBox:"0 -511 1000 522"}},[s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mo"}},[s("path",{attrs:{"data-c":"2192",d:"M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z"}})])])])])]),t._v(" "),s("code",[t._v("JSON_EXTRACT_PATH_TEXT(JSON_SERIALIZE(my_struct), 'my_attribute')")])],1)])}),[],!1,null,null,null);e.default=o.exports}}]);