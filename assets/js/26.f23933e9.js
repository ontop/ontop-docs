(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{410:function(t,s,a){"use strict";a.r(s);var e=a(48),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"statistics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statistics"}},[t._v("#")]),t._v(" Statistics")]),t._v(" "),a("h2",{attrs:{id:"downloads"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downloads"}},[t._v("#")]),t._v(" Downloads")]),t._v(" "),a("h3",{attrs:{id:"github-releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-releases"}},[t._v("#")]),t._v(" Github releases")]),t._v(" "),a("p",[t._v("For all the versions 4.x:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Accept: application/vnd.github.v3+json"')]),t._v(" https://api.github.com/repos/ontop/ontop/releases "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[.[] | select"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v(".tag_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" startswith"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"ontop'),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),t._v(") | .assets[] | .download_count ] | add'")]),t._v(" \n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);