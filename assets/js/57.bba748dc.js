(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{383:function(t,e,a){"use strict";a.r(e);var s=a(48),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sparql-endpoint-deployment-using-ontop-tomcat-rdf4j-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sparql-endpoint-deployment-using-ontop-tomcat-rdf4j-bundle"}},[t._v("#")]),t._v(" SPARQL endpoint deployment using Ontop Tomcat/RDF4J bundle")]),t._v(" "),a("h2",{attrs:{id:"apache-tomcat-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-tomcat-setup"}},[t._v("#")]),t._v(" Apache Tomcat setup")]),t._v(" "),a("p",[t._v("Procedure:")]),t._v(" "),a("ol",[a("li",[t._v("Download and unzip the Tomcat bundle "),a("code",[t._v("ontop-tomcat-bundle-[version].zip")]),t._v(" from "),a("a",{attrs:{href:"https://github.com/ontop/ontop/releases",target:"_blank",rel:"noopener"}},[t._v("GitHub"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Copy the driver file of H2 "),a("a",{attrs:{href:"jdbc/h2-1.4.196.jar"}},[a("code",[t._v("jdbc/h2-1.4.196.jar")])]),t._v(" to the "),a("code",[t._v("lib")]),t._v(" directory of tomcat")])]),t._v(" "),a("p",[t._v("Note: environment variable "),a("code",[t._v("JAVA_HOME")]),t._v(" must be set")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Start tomcat from the "),a("em",[a("code",[t._v("bin")]),t._v(" folder")]),t._v(" using the commands:\n"),a("ul",[a("li",[t._v("On Mac/Linux: using the terminal run "),a("code",[t._v("sh catalina.sh run")]),t._v(".")]),t._v(" "),a("li",[t._v("On Windows: click on the executable "),a("code",[t._v("startup.bat")]),t._v(".")])])]),t._v(" "),a("li",[t._v("Connect to RDF4J Workbench at http://localhost:8080/rdf4j-workbench/ .")]),t._v(" "),a("li",[t._v("You will be automatically redirected to the repositories view .")])]),t._v(" "),a("h2",{attrs:{id:"setting-up-a-ontop-virtual-rdf-repository-using-the-rdf4j-workbench"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-ontop-virtual-rdf-repository-using-the-rdf4j-workbench"}},[t._v("#")]),t._v(" Setting up a Ontop Virtual RDF Repository using the RDF4J Workbench")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("The files needed are under the input directory:")]),t._v(" "),a("ul",[a("li",[t._v("the OWL ontology file "),a("a",{attrs:{href:"input/university-complete.ttl"}},[t._v("input/university-complete.ttl")])]),t._v(" "),a("li",[t._v("the mapping file "),a("a",{attrs:{href:"input/university-complete.obda"}},[t._v("input/university-complete.obda")])]),t._v(" "),a("li",[t._v("the properties file "),a("a",{attrs:{href:"input/university-complete.properties"}},[t._v("input/university-complete.properties")])])])]),t._v(" "),a("li",[a("p",[t._v("Click on "),a("em",[t._v("New repository")])])])]),t._v(" "),a("ul",[a("li",[t._v("Select "),a("em",[t._v("Ontop Virtual RDF Store")]),t._v(" from the list.")]),t._v(" "),a("li",[t._v("Give an ID to your new repository (ex: "),a("code",[t._v("Session1Repo")]),t._v(")")]),t._v(" "),a("li",[t._v("Give optionally also a descriptive title (ex: Universities Repository)")]),t._v(" "),a("li",[t._v("Click on "),a("em",[t._v("Next")]),t._v(".")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("On the next page:")])]),t._v(" "),a("ul",[a("li",[t._v("Type in the path of the ontology file "),a("em",[t._v("university-complete.ttl")]),t._v(" using the separator '/' (ex: "),a("code",[t._v("C:/Users/Me/ontop-tutorial/endpoint/input/university-complete.ttl")]),t._v(")")]),t._v(" "),a("li",[t._v("Type in the path of the obda file "),a("em",[t._v("university-complete.obda")]),t._v(" using the separator '/' (ex: "),a("code",[t._v("C:/Users/Me/ontop-v3-tutorial/endpoint/input/university-complete.obda")]),t._v(")")]),t._v(" "),a("li",[t._v("Type in the path of the properties file "),a("em",[t._v("university-complete.properties")]),t._v(" using the separator '/' (ex: "),a("code",[t._v("C:/Users/Me/ontop-v3-tutorial/endpoint/input/university-complete.properties")]),t._v(")")]),t._v(" "),a("li",[t._v("Keep the default options.")]),t._v(" "),a("li",[t._v("Click on "),a("em",[t._v("Create")]),t._v(".")])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("The "),a("em",[t._v("Summary")]),t._v(" page contains your newly created repository's SPARQL endpoint URL (as Location).")])]),t._v(" "),a("h2",{attrs:{id:"querying"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querying"}},[t._v("#")]),t._v(" Querying")]),t._v(" "),a("ol",[a("li",[t._v("We can query the newly created repository by clicking on the "),a("em",[t._v("Query")]),t._v(" submenu .")]),t._v(" "),a("li",[t._v("Run the following query clicking on "),a("em",[t._v("Execute")]),t._v(":")])]),t._v(" "),a("div",{staticClass:"language-sparql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sparql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PREFIX")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[a("span",{pre:!0,attrs:{class:"token prefix"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("http://example.org/voc#"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PREFIX")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[a("span",{pre:!0,attrs:{class:"token prefix"}},[t._v("foaf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("http://xmlns.com/foaf/0.1/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTINCT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("?prof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("?lastName")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("?prof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[a("span",{pre:!0,attrs:{class:"token prefix"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),a("span",{pre:!0,attrs:{class:"token local-name"}},[t._v("FullProfessor")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[a("span",{pre:!0,attrs:{class:"token prefix"}},[t._v("foaf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),a("span",{pre:!0,attrs:{class:"token local-name"}},[t._v("lastName")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("?lastName")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"querying-the-sparql-endpoint-with-curl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querying-the-sparql-endpoint-with-curl"}},[t._v("#")]),t._v(" Querying the SPARQL endpoint with curl")]),t._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl  -H 'Accept: application/json' \\\n-G http://localhost:8080/rdf4j-server/repositories/Session1Repo \\\n--data-urlencode query='\nPREFIX : <http://example.org/voc#>\nPREFIX foaf: <http://xmlns.com/foaf/0.1/>\n\nSELECT DISTINCT ?prof ?lastName {\n  ?prof a :FullProfessor ; foaf:lastName ?lastName .\n}\n'\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);