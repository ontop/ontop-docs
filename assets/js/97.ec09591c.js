(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{476:function(s,t,a){"use strict";a.r(t);var n=a(51),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"role-of-primary-keys-unique-constraints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#role-of-primary-keys-unique-constraints"}},[s._v("#")]),s._v(" Role of primary keys (unique constraints)")]),s._v(" "),a("p",[s._v("Unique constraints (such as primary keys) are very useful for removing self-joins and thus improving query answering performance.")]),s._v(" "),a("p",[s._v("Let us now consider the following files: "),a("a",{attrs:{href:"university-no-pk.ttl"}},[s._v("university-no-pk.ttl")]),s._v(", "),a("a",{attrs:{href:"university-no-pk.obda"}},[s._v("university-no-pk.obda")]),s._v(" and "),a("a",{attrs:{href:"university-no-pk.properties"}},[s._v("university-no-pk.properties")]),s._v(" files.\nThe mapping assertions are the same as during the first session.\nThe only difference is that primary keys have been removed.")]),s._v(" "),a("p",[s._v("Open the new ontology file in Protégé and run the following SPARQL query:")]),s._v(" "),a("div",{staticClass:"language-sparql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sparql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PREFIX")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[a("span",{pre:!0,attrs:{class:"token prefix"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")])])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("http://example.org/voc#"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PREFIX")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[a("span",{pre:!0,attrs:{class:"token prefix"}},[s._v("foaf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")])])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("http://xmlns.com/foaf/0.1/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("?prof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("?lastName")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("?prof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[a("span",{pre:!0,attrs:{class:"token prefix"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")])]),a("span",{pre:!0,attrs:{class:"token local-name"}},[s._v("FullProfessor")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[a("span",{pre:!0,attrs:{class:"token prefix"}},[s._v("foaf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")])]),a("span",{pre:!0,attrs:{class:"token local-name"}},[s._v("firstName")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("?firstName")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[a("span",{pre:!0,attrs:{class:"token prefix"}},[s._v("foaf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")])]),a("span",{pre:!0,attrs:{class:"token local-name"}},[s._v("lastName")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("?lastName")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Due to the absence of primary keys, the generated SQL is, after some minor reformatting, the following:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"profQuestType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"profLang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://example.org/uni2/person/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prof"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastNameQuestType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastNameLang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           QVIEW3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lname"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastName"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uni2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"person"')]),s._v(" QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uni2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"person"')]),s._v(" QVIEW2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uni2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"person"')]),s._v(" QVIEW3\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"status"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n           QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pid"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pid"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" QVIEW2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n           QVIEW2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fname"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pid"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" QVIEW3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n           QVIEW3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lname"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"profQuestType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"profLang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://example.org/uni1/academic/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prof"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastNameQuestType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastNameLang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           QVIEW3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastName"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uni1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"academic"')]),s._v(" QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uni1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"academic"')]),s._v(" QVIEW2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uni1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"academic"')]),s._v(" QVIEW3\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"position"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n           QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a_id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a_id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" QVIEW2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n           QVIEW2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a_id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" QVIEW3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n           QVIEW3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SUB_QVIEW\n")])])]),a("p",[s._v("In each sub-query, one can observe two self-joins, between "),a("code",[s._v("QVIEW1")]),s._v(", "),a("code",[s._v("QVIEW2")]),s._v(" and "),a("code",[s._v("QVIEW3")]),s._v(".")]),s._v(" "),a("p",[s._v("If you run the same query with the setting of the first session, you will obtain the following query:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pQuestType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pLang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://example.org/uni2/person/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pid"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastNameQuestType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastNameLang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lname"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastName"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uni2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"person"')]),s._v(" QVIEW1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pid"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n       QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fname"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n       QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lname"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pQuestType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pLang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://example.org/uni1/academic/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a_id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"firstNameQuestType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"firstNameLang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"firstName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastNameQuestType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastNameLang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastName"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uni1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"academic"')]),s._v(" QVIEW1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a_id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n       QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n       QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pQuestType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pLang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://example.org/uni1/student/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s_id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"firstNameQuestType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"firstNameLang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"firstName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastNameQuestType"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastNameLang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lastName"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uni1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"student"')]),s._v(" QVIEW1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s_id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n       QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("\n       QVIEW1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n")])])]),a("p",[s._v("As you can see, the self-joins are removed when primary keys are provided and used as joining conditions.")])])}),[],!1,null,null,null);t.default=r.exports}}]);