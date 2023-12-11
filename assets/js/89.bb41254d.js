(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{465:function(t,e,a){"use strict";a.r(e);var s=a(51),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flatten-lens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flatten-lens"}},[t._v("#")]),t._v(" Flatten Lens")]),t._v(" "),a("p",[a("em",[t._v("Flatten lenses are supported since 5.1.0.")])]),t._v(" "),a("p",[t._v('Flattening or unnesting an array is the process of transforming a nested array into an array of lower dimensionality, by "pulling" each nested entry into its "outer" entry. In databases, specifically, it represents a function that takes a column containing an array and transforms it into a table that has each of the '),a("em",[t._v("outer-most")]),t._v(" elements as one of its rows.")]),t._v(" "),a("p",[t._v("Flattening is need when we want to map values inside arrays.")]),t._v(" "),a("p",[t._v("In Ontop, a flatten lens is a type of lens over a single base relation that takes as an input the column that should be flattened, the names of columns that should be retained after flattening, and the name of the column that should be added containing the flattened output. Additionally, the name for a "),a("em",[t._v("position")]),t._v(" column can be passed to the lens. When flattening, the "),a("em",[t._v("position")]),t._v(" column will hold the index of the current row's flattened element in the original array.")]),t._v(" "),a("p",[t._v("For this example, we will first look at the table "),a("code",[t._v("workers")]),t._v(". This table has the following schema:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("column")]),t._v(" "),a("th",[t._v("type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("worker_id")]),t._v(" "),a("td",[t._v("integer")])]),t._v(" "),a("tr",[a("td",[t._v("full_name")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("role")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("museum_id")]),t._v(" "),a("td",[t._v("integer")])]),t._v(" "),a("tr",[a("td",[t._v("titles")]),t._v(" "),a("td",[t._v("array of strings")])]),t._v(" "),a("tr",[a("td",[t._v("access_level")]),t._v(" "),a("td",[t._v("integer")])])])]),t._v(" "),a("p",[t._v("The column "),a("code",[t._v("titles")]),t._v(" is an array of strings that contains all the degrees and titles the employee has received. Our goal is to populate the datatype properties "),a("code",[t._v(":hasTitle")]),t._v(" defined from the "),a("code",[t._v(":Worker")]),t._v(" class to any number of string literals taken from the table, and "),a("code",[t._v(":preferredTitle")]),t._v(", defined from the "),a("code",[t._v(":Worker")]),t._v(" class to a single literal, which is the first entry of the "),a("code",[t._v("titles")]),t._v(" array. To do so efficiently, we need to flatten the "),a("code",[t._v("titles")]),t._v(" column.")]),t._v(" "),a("p",[t._v("The flatten lens has the following structure:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baseRelation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"flattenedColumn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"datatype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"columns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kept"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"new"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"position"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FlattenLens"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The field "),a("code",[t._v("kept")]),t._v(" takes a list of column names from the original table that should be retained after flattening. The field "),a("code",[t._v("new")]),t._v(" takes the name of the column that contains the flattened output and the field "),a("code",[t._v("position")]),t._v(" takes the name of the column that contains the index of the current output. The flattened column takes two arguments: "),a("code",[t._v("name")]),t._v(" determines the name of the column that should be flattened, and "),a("code",[t._v("datatype")]),t._v(" indicates the column's type. Depending on the SQL dialect, this can vary from "),a("code",[t._v("ARRAY<T>")]),t._v(" or "),a("code",[t._v("T[]")]),t._v(" where "),a("code",[t._v("T")]),t._v(" is a different SQL data type to "),a("code",[t._v("JSON")]),t._v(" or "),a("code",[t._v("VARCHAR")]),t._v(" if arrays are represented and flattened in JSON format.")]),t._v(" "),a("p",[t._v("In DuckDB, the array data type is defined as "),a("code",[t._v("T[]")]),t._v(", so in our specific case, the field "),a("code",[t._v("datatype")]),t._v(" will take the value "),a("code",[t._v("STRING[]")]),t._v(".")]),t._v(" "),a("p",[t._v("A possible "),a("code",[t._v("lenses.json")]),t._v(" file for this task may look like this:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"relations"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lenses"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flattened_titles"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baseRelation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"workers"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"flattenedColumn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"titles"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"datatype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING[]"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"columns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kept"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"worker_id"')]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"new"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"position"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("As we just need to assign a title to a "),a("code",[t._v(":Worker")]),t._v(" individual, the only column that has to be kept is "),a("code",[t._v("worker_id")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapping"}},[t._v("#")]),t._v(" Mapping")]),t._v(" "),a("p",[t._v("Now, we can already define the mapping entries for the wanted properties:")]),t._v(" "),a("div",{staticClass:"language-obda extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mappingId\tMAPID-has-title\ntarget\t\tdata:worker/{worker_id} :hasTitle {title} .\nsource\t\tSELECT worker_id, title FROM lenses.flattened_titles;\n\nmappingId\tMAPID-preferred-title\ntarget\t\tdata:worker/{worker_id} :preferredTitle {title} .\nsource\t\tSELECT worker_id, title FROM lenses.flattened_titles WHERE index = 1;\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("Instead of using a source query with a "),a("code",[t._v("WHERE")]),t._v(" condition in the second mapping, we could also wrap a basic lens around the flatten lens that performs the filter operation, but we kept it like this for the sake of simplicity.")])]),t._v(" "),a("p",[t._v("Let us now run a SPARQL query over the Ontop endpoint to test our mappings and lenses.")]),t._v(" "),a("div",{staticClass:"language-SPARQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sparql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PREFIX")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[a("span",{pre:!0,attrs:{class:"token prefix"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("http://example.org/museum_kg/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("?name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("?title")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("?prefTitle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("?worker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[a("span",{pre:!0,attrs:{class:"token prefix"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),a("span",{pre:!0,attrs:{class:"token local-name"}},[t._v("Worker")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("?worker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[a("span",{pre:!0,attrs:{class:"token prefix"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),a("span",{pre:!0,attrs:{class:"token local-name"}},[t._v("name")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("?name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("?worker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[a("span",{pre:!0,attrs:{class:"token prefix"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),a("span",{pre:!0,attrs:{class:"token local-name"}},[t._v("hasTitle")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("?title")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("?worker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[a("span",{pre:!0,attrs:{class:"token prefix"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),a("span",{pre:!0,attrs:{class:"token local-name"}},[t._v("preferredTitle")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("?prefTitle")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This should result in a list of all employees, together with their titles and their preferred title.")]),t._v(" "),a("h3",{attrs:{id:"flattening-other-types-of-arrays"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flattening-other-types-of-arrays"}},[t._v("#")]),t._v(" Flattening other types of arrays")]),t._v(" "),a("p",[t._v("The flatten lens works on all types of arrays, and, depending on the capabilities of the dialect, can infer the output type of the flattened column. As a further exercise, try looking at the table "),a("code",[t._v("museums")]),t._v(".")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("column")]),t._v(" "),a("th",[t._v("type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("museum_id")]),t._v(" "),a("td",[t._v("integer")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("address")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("yearly_income")]),t._v(" "),a("td",[t._v("integer")])]),t._v(" "),a("tr",[a("td",[t._v("yearly_spendings")]),t._v(" "),a("td",[t._v("integer")])]),t._v(" "),a("tr",[a("td",[t._v("ratings")]),t._v(" "),a("td",[t._v("array of floats")])])])]),t._v(" "),a("p",[t._v("The field "),a("code",[t._v("ratings")]),t._v(" is an array of floating point numbers between 1 and 10. Try creating a flatten lens that can unnest this array to populate the datatype property "),a("code",[t._v(":hasRating")]),t._v("! Ontop will be able to automatically detect that the flattened column has the type "),a("code",[t._v("FLOAT")]),t._v('. Keep in mind that we do not necessarily need a "position" column for this use case.')]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("When arrays in a given dialect are defined as "),a("code",[t._v("ARRAY<T>")]),t._v(", "),a("code",[t._v("T[]")]),t._v(", or similarly, Ontop is able to infer the data type of the output column after flattening. However, when this is not the case (either the array was provided as JSON or the array data type of the dialect is simply called "),a("code",[t._v("ARRAY")]),t._v(" or similarly), Ontop cannot perform this inference. In those cases, it is suggested to put a basic lens over the flatten lens that explicitly performs a "),a("code",[t._v("CAST")]),t._v(" on the output, to allow Ontop to know the column type once again.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("The level of support for the flatten lens depends strongly on the dialect. Please consult the "),a("RouterLink",{attrs:{to:"/guide/advanced/lenses.html"}},[t._v("flatten lens documentation page")]),t._v(" for more info on each supported dialect.")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);