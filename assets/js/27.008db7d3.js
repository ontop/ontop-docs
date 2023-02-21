(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{403:function(e,t,a){"use strict";a.r(t);var n=a(51),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Ontop is a Virtual Knowledge Graph system.\nIt exposes the content of arbitrary relational databases as knowledge graphs. These graphs are virtual, which means that data remains in the data sources instead of being moved to another database.")]),e._v(" "),a("p",[e._v("Ontop translates "),a("a",{attrs:{href:"https://www.w3.org/TR/sparql11-query/",target:"_blank",rel:"noopener"}},[e._v("SPARQL queries"),a("OutboundLink")],1),e._v(" expressed over the knowledge graphs into SQL queries executed by the relational data sources. It relies on "),a("a",{attrs:{href:"https://www.w3.org/TR/r2rml/",target:"_blank",rel:"noopener"}},[e._v("R2RML mappings"),a("OutboundLink")],1),e._v(" and can take advantage of lightweight ontologies.")]),e._v(" "),a("h2",{attrs:{id:"versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versions"}},[e._v("#")]),e._v(" Versions")]),e._v(" "),a("p",[e._v("This documentation is for Ontop 3.0 and more recent versions.")]),e._v(" "),a("p",[e._v("For earlier versions, please refer to "),a("a",{attrs:{href:"https://github.com/ontop/ontop/wiki",target:"_blank",rel:"noopener"}},[e._v("our previous Wiki"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Most recent version:")]),e._v(" "),a("ul",[a("li",[e._v("Stable:  Ontop 5.0.1, released on January 29, 2023.")])]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"/guide/releases"}},[e._v("release notes")]),e._v(" for more details.")]),e._v(" "),a("h2",{attrs:{id:"main-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-features"}},[e._v("#")]),e._v(" Main features")]),e._v(" "),a("ul",[a("li",[e._v("Uses "),a("a",{attrs:{href:"/guide/compliance#rdf-1-1"}},[e._v("RDF 1.1")]),e._v(" as graph data model")]),e._v(" "),a("li",[e._v("Supports RDFS and OWL 2 QL ontologies")]),e._v(" "),a("li",[e._v("Supports "),a("a",{attrs:{href:"/guide/compliance#r2rml"}},[e._v("R2RML")]),e._v(" and Ontop mappings")]),e._v(" "),a("li",[e._v("Supports "),a("a",{attrs:{href:"/guide/compliance#sparql-1-1"}},[e._v("the majority of SPARQL 1.1 features")]),e._v(", including the main SPARQL aggregation functions (since 4.0-beta-1) and "),a("a",{attrs:{href:"/guide/compliance#geosparql-1-0"}},[e._v("GeoSPARQL functions")]),e._v(" (since 4.1.0)")]),e._v(" "),a("li",[e._v("Can be deployed as "),a("a",{attrs:{href:"/guide/cli#ontop-endpoint"}},[e._v("a SPARQL endpoint")]),e._v(" and as "),a("a",{attrs:{href:"/guide/advanced/predefined"}},[e._v("a predefined query endpoint")]),e._v(" (since 4.1.0)")]),e._v(" "),a("li",[e._v("Produces efficient SQL queries by applying many optimizations")]),e._v(" "),a("li",[e._v("Supports the main database systems: PostgreSQL, MySQL, MariaDB (since 5.0.0), SQL Server, Oracle, DB2 and Snowflake (since 5.0.0)")]),e._v(" "),a("li",[e._v("Supports database federators such as Denodo (beta), Dremio (since 4.1.0), Teiid (since 4.1.1), and Apache Spark / Databricks (since 4.2.0)")]),e._v(" "),a("li",[e._v("Supports "),a("a",{attrs:{href:"/guide/advanced/lenses"}},[e._v("lenses")]),e._v(" specified outside the data sources (since 4.2.0)")]),e._v(" "),a("li",[e._v("Can "),a("a",{attrs:{href:"/guide/cli#ontop-materialize"}},[e._v("materialize")]),e._v(" virtual graphs into RDF files")]),e._v(" "),a("li",[e._v("Provides a plugin for editing and testing mappings in the "),a("a",{attrs:{href:"https://protege.stanford.edu/",target:"_blank",rel:"noopener"}},[e._v("Protégé ontology editor"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"organizations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#organizations"}},[e._v("#")]),e._v(" Organizations")]),e._v(" "),a("p",[e._v("Ontop is backed by the "),a("a",{attrs:{href:"https://www.inf.unibz.it/krdb/in2data/",target:"_blank",rel:"noopener"}},[e._v("Free University of Bozen-Bolzano"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://ontopic.ai",target:"_blank",rel:"noopener"}},[e._v("Ontopic s.r.l."),a("OutboundLink")],1),e._v(". It also receives regular important contributions from "),a("a",{attrs:{href:"https://www.uib.no",target:"_blank",rel:"noopener"}},[e._v("University of Bergen"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"http://www.bbk.ac.uk/",target:"_blank",rel:"noopener"}},[e._v("Birkbeck, University of London"),a("OutboundLink")],1),e._v(". See the "),a("a",{attrs:{href:"/community"}},[e._v("community section")]),e._v(" for more details.")]),e._v(" "),a("h2",{attrs:{id:"licenses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#licenses"}},[e._v("#")]),e._v(" Licenses")]),e._v(" "),a("p",[e._v("Ontop is available under the "),a("a",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank",rel:"noopener"}},[e._v("Apache 2.0"),a("OutboundLink")],1),e._v(" license.")]),e._v(" "),a("p",[e._v("All the documentation is licensed under the\n"),a("a",{attrs:{href:"http://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener"}},[e._v("Creative Commons (Attribution)"),a("OutboundLink")],1),e._v("\nlicense.")]),e._v(" "),a("h2",{attrs:{id:"social"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#social"}},[e._v("#")]),e._v(" Social")]),e._v(" "),a("p",[e._v("You can find us on the following social platforms:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://twitter.com/ontop4obda",target:"_blank",rel:"noopener"}},[e._v("Twitter (ontop4obda)"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{rel:"me",href:"https://fosstodon.org/@ontop"}},[e._v("Mastodon (@ontop@fosstodon.org)")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.facebook.com/obdaontop/",target:"_blank",rel:"noopener"}},[e._v("Facebook (obdaontop)"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://groups.google.com/forum/#!forum/ontop4obda",target:"_blank",rel:"noopener"}},[e._v("Google Group (ontop4obda)"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ontop/ontop/",target:"_blank",rel:"noopener"}},[e._v("GitHub (ontop/ontop)"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"citations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#citations"}},[e._v("#")]),e._v(" Citations")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If you use Ontop in your work, please cite one of the following articles describing the system.")]),e._v(" "),a("ul",[a("li",[e._v("Guohui Xiao, Davide Lanti, Roman Kontchakov, Sarah Komla-Ebri, Elem Güzel-Kalayci, Linfang Ding, Julien Corman, Benjamin Cogrel, Diego Calvanese, and Elena Botoeva. "),a("a",{attrs:{href:"https://research.bcgl.fr/pdfs/ontop-iswc20.pdf",target:"_blank",rel:"noopener"}},[e._v("The Virtual Knowledge Graph System Ontop"),a("OutboundLink")],1),e._v(". In: International Semantic Web Conference (Resource Track), 2020.")]),e._v(" "),a("li",[e._v("Diego Calvanese, Benjamin Cogrel, Sarah Komla-Ebri, Roman Kontchakov, Davide Lanti, Martin Rezk, Mariano Rodriguez-Muro, and Guohui Xiao. "),a("a",{attrs:{href:"http://www.semantic-web-journal.net/content/ontop-answering-sparql-queries-over-relational-databases-1",target:"_blank",rel:"noopener"}},[e._v("Ontop: Answering SPARQL Queries over Relational Databases"),a("OutboundLink")],1),e._v(".  In: Semantic Web Journal 8.3 (2017), pp. 471–487.")])])]),e._v(" "),a("li",[a("p",[e._v("If you want to cite the techniques behind Ontop, check "),a("a",{attrs:{href:"/research/publications"}},[e._v("our publications")]),e._v(".")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);