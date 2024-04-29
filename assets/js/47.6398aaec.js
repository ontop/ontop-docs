(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{423:function(t,e,a){"use strict";a.r(e);var s=a(51),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mariadb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mariadb"}},[t._v("#")]),t._v(" MariaDB")]),t._v(" "),a("p",[a("em",[t._v("Supported since 5.0.0.")])]),t._v(" "),a("p",[t._v("Through the "),a("a",{attrs:{href:"https://mariadb.com",target:"_blank",rel:"noopener"}},[t._v("MariaDB"),a("OutboundLink")],1),t._v(" connector, Ontop is able to construct VKGs on MariaDB databases.")]),t._v(" "),a("h2",{attrs:{id:"limitations-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitations-exceptions"}},[t._v("#")]),t._v(" Limitations & Exceptions")]),t._v(" "),a("ul",[a("li",[t._v("String literals have to be encased in "),a("em",[t._v("single quotes")]),t._v(" ("),a("code",[t._v("'")]),t._v("). Double quote string literals ("),a("code",[t._v('"')]),t._v(") are not supported.")])]),t._v(" "),a("h2",{attrs:{id:"database-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-connection"}},[t._v("#")]),t._v(" Database Connection")]),t._v(" "),a("p",[t._v("The following shows the content of a sample "),a("code",[t._v(".properties")]),t._v(" file that can be used to connect Ontop to MariaDB:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("jdbc.url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jdbc:mariadb://localhost:3306/defaultdatabase\njdbc.user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" user\njdbc.password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" password\njdbc.driver "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" org.mariadb.jdbc.Driver\n")])])]),a("h2",{attrs:{id:"nested-type-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nested-type-support"}},[t._v("#")]),t._v(" Nested Type Support")]),t._v(" "),a("p",[t._v("Ontop implements explicit compatibility with the MariaDB type "),a("code",[t._v("JSON")]),t._v(" which can be used with the "),a("a",{attrs:{href:"/guide/advanced/lenses#flattenlens"}},[t._v("flatten lens")]),t._v(". However, it cannot infer the type of the flattened result column.")]),t._v(" "),a("p",[t._v("In case the flattened column is still a nested structure after the flatten operation is performed (e.g. for arrays of objects), "),a("a",{attrs:{href:"https://mariadb.com/kb/en/json-functions/",target:"_blank",rel:"noopener"}},[t._v("MariaDB's JSON functions"),a("OutboundLink")],1),t._v(" can be used to further work with them.")])])}),[],!1,null,null,null);e.default=r.exports}}]);