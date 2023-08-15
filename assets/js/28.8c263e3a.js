(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{405:function(e,a,t){"use strict";t.r(a);var r=t(51),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Ontop is a Virtual Knowledge Graph system.\nIt exposes the content of arbitrary relational databases as knowledge graphs. These graphs are virtual, which means that data remains in the data sources instead of being moved to another database.")]),e._v(" "),t("p",[e._v("Ontop translates "),t("a",{attrs:{href:"https://www.w3.org/TR/sparql11-query/",target:"_blank",rel:"noopener"}},[e._v("SPARQL queries"),t("OutboundLink")],1),e._v(" expressed over the knowledge graphs into SQL queries executed by the relational data sources. It relies on "),t("a",{attrs:{href:"https://www.w3.org/TR/r2rml/",target:"_blank",rel:"noopener"}},[e._v("R2RML mappings"),t("OutboundLink")],1),e._v(" and can take advantage of lightweight ontologies.")]),e._v(" "),t("h2",{attrs:{id:"versions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#versions"}},[e._v("#")]),e._v(" Versions")]),e._v(" "),t("p",[e._v("This documentation is for Ontop 3.0 and more recent versions.")]),e._v(" "),t("p",[e._v("For earlier versions, please refer to "),t("a",{attrs:{href:"https://github.com/ontop/ontop/wiki",target:"_blank",rel:"noopener"}},[e._v("our previous Wiki"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Most recent version:")]),e._v(" "),t("ul",[t("li",[e._v("Stable:  Ontop 5.1.0, released on August 15, 2023.")])]),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"/guide/releases"}},[e._v("release notes")]),e._v(" for more details.")]),e._v(" "),t("h2",{attrs:{id:"main-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-features"}},[e._v("#")]),e._v(" Main features")]),e._v(" "),t("ul",[t("li",[e._v("Uses "),t("a",{attrs:{href:"/guide/compliance#rdf-1-1"}},[e._v("RDF 1.1")]),e._v(" as graph data model")]),e._v(" "),t("li",[e._v("Supports RDFS and OWL 2 QL ontologies")]),e._v(" "),t("li",[e._v("Supports "),t("a",{attrs:{href:"/guide/compliance#r2rml"}},[e._v("R2RML")]),e._v(" and Ontop mappings")]),e._v(" "),t("li",[e._v("Supports "),t("a",{attrs:{href:"/guide/compliance#sparql-1-1"}},[e._v("the majority of SPARQL 1.1 features")]),e._v(", including the main SPARQL aggregation functions (since 4.0.0) and "),t("a",{attrs:{href:"/guide/compliance#geosparql-1-0"}},[e._v("GeoSPARQL functions")]),e._v(" (since 4.1.0)")]),e._v(" "),t("li",[e._v("Can be deployed as "),t("a",{attrs:{href:"/guide/cli#ontop-endpoint"}},[e._v("a SPARQL endpoint")]),e._v(" and as "),t("a",{attrs:{href:"/guide/advanced/predefined"}},[e._v("a predefined query endpoint")]),e._v(" (since 4.1.0)")]),e._v(" "),t("li",[e._v("Produces efficient SQL queries by applying many optimizations")]),e._v(" "),t("li",[e._v("Supports the main database systems: "),t("a",{attrs:{href:"/guide/databases/postgres"}},[e._v("PostgreSQL")]),e._v(", "),t("a",{attrs:{href:"/guide/databases/mysql"}},[e._v("MySQL")]),e._v(", "),t("a",{attrs:{href:"/guide/databases/mariadb"}},[e._v("MariaDB")]),e._v(" (since 5.0.0), "),t("a",{attrs:{href:"/guide/databases/mssql"}},[e._v("SQL Server")]),e._v(", "),t("a",{attrs:{href:"/guide/databases/oracle"}},[e._v("Oracle")]),e._v(", "),t("a",{attrs:{href:"/guide/databases/db2"}},[e._v("DB2")]),e._v(", "),t("a",{attrs:{href:"/guide/databases/snowflake"}},[e._v("Snowflake")]),e._v(" (since 5.0.0), "),t("a",{attrs:{href:"/guide/databases/databricks"}},[e._v("Databricks")]),e._v(" (since 5.0.0), "),t("a",{attrs:{href:"/guide/databases/bigquery"}},[e._v("Google BigQuery")]),e._v(" (since 5.0.2), "),t("a",{attrs:{href:"/guide/databases/redshift"}},[e._v("AWS Redshift")]),e._v(" (since 5.0.2), "),t("a",{attrs:{href:"/guide/databases/duckdb"}},[e._v("DuckDB")]),e._v(" (since 5.0.2), and "),t("a",{attrs:{href:"/guide/databases/dynamodb"}},[e._v("AWS DynamoDB")]),e._v(" (since 5.1.0)")]),e._v(" "),t("li",[e._v("Supports database federators such as "),t("a",{attrs:{href:"/guide/databases/denodo"}},[e._v("Denodo")]),e._v(", "),t("a",{attrs:{href:"/guide/databases/dremio"}},[e._v("Dremio")]),e._v(" (since 4.1.0), Teiid (since 4.1.1), "),t("a",{attrs:{href:"/guide/databases/spark"}},[e._v("Apache Spark")]),e._v(" (since 4.2.0) and "),t("a",{attrs:{href:"/guide/databases/trino"}},[e._v("Trino")]),e._v(" / "),t("a",{attrs:{href:"/guide/databases/presto"}},[e._v("PrestoDB")]),e._v(" / "),t("a",{attrs:{href:"/guide/databases/athena"}},[e._v("AWS Athena")]),e._v(" (since 5.0.2)")]),e._v(" "),t("li",[e._v("Supports "),t("a",{attrs:{href:"/guide/advanced/lenses"}},[e._v("lenses")]),e._v(' which are "virtual views" specified outside of the data sources (since 4.2.0)')]),e._v(" "),t("li",[e._v("Can "),t("a",{attrs:{href:"/guide/cli#ontop-materialize"}},[e._v("materialize")]),e._v(" virtual graphs into RDF files")]),e._v(" "),t("li",[e._v("Provides a plugin for editing and testing mappings in the "),t("a",{attrs:{href:"https://protege.stanford.edu/",target:"_blank",rel:"noopener"}},[e._v("Protégé ontology editor"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"organizations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#organizations"}},[e._v("#")]),e._v(" Organizations")]),e._v(" "),t("p",[e._v("Ontop is backed by the "),t("a",{attrs:{href:"https://www.inf.unibz.it/krdb/in2data/",target:"_blank",rel:"noopener"}},[e._v("Free University of Bozen-Bolzano"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://ontopic.ai",target:"_blank",rel:"noopener"}},[e._v("Ontopic s.r.l."),t("OutboundLink")],1),e._v(". It also receives regular important contributions from "),t("a",{attrs:{href:"https://www.uib.no",target:"_blank",rel:"noopener"}},[e._v("University of Bergen"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"http://www.bbk.ac.uk/",target:"_blank",rel:"noopener"}},[e._v("Birkbeck, University of London"),t("OutboundLink")],1),e._v(". See the "),t("a",{attrs:{href:"/community"}},[e._v("community section")]),e._v(" for more details.")]),e._v(" "),t("h2",{attrs:{id:"licenses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#licenses"}},[e._v("#")]),e._v(" Licenses")]),e._v(" "),t("p",[e._v("Ontop is available under the "),t("a",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank",rel:"noopener"}},[e._v("Apache 2.0"),t("OutboundLink")],1),e._v(" license.")]),e._v(" "),t("p",[e._v("All the documentation is licensed under the\n"),t("a",{attrs:{href:"http://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener"}},[e._v("Creative Commons (Attribution)"),t("OutboundLink")],1),e._v("\nlicense.")]),e._v(" "),t("h2",{attrs:{id:"social"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#social"}},[e._v("#")]),e._v(" Social")]),e._v(" "),t("p",[e._v("You can find us on the following social platforms:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://twitter.com/ontop4obda",target:"_blank",rel:"noopener"}},[e._v("Twitter (ontop4obda)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{rel:"me",href:"https://fosstodon.org/@ontop"}},[e._v("Mastodon (@ontop@fosstodon.org)")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.facebook.com/obdaontop/",target:"_blank",rel:"noopener"}},[e._v("Facebook (obdaontop)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://groups.google.com/forum/#!forum/ontop4obda",target:"_blank",rel:"noopener"}},[e._v("Google Group (ontop4obda)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ontop/ontop/",target:"_blank",rel:"noopener"}},[e._v("GitHub (ontop/ontop)"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"citations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#citations"}},[e._v("#")]),e._v(" Citations")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("If you use Ontop in your work, please cite one of the following articles describing the system.")]),e._v(" "),t("ul",[t("li",[e._v("Guohui Xiao, Davide Lanti, Roman Kontchakov, Sarah Komla-Ebri, Elem Güzel-Kalayci, Linfang Ding, Julien Corman, Benjamin Cogrel, Diego Calvanese, and Elena Botoeva. "),t("a",{attrs:{href:"https://research.bcgl.fr/pdfs/ontop-iswc20.pdf",target:"_blank",rel:"noopener"}},[e._v("The Virtual Knowledge Graph System Ontop"),t("OutboundLink")],1),e._v(". In: International Semantic Web Conference (Resource Track), 2020.")]),e._v(" "),t("li",[e._v("Diego Calvanese, Benjamin Cogrel, Sarah Komla-Ebri, Roman Kontchakov, Davide Lanti, Martin Rezk, Mariano Rodriguez-Muro, and Guohui Xiao. "),t("a",{attrs:{href:"http://www.semantic-web-journal.net/content/ontop-answering-sparql-queries-over-relational-databases-1",target:"_blank",rel:"noopener"}},[e._v("Ontop: Answering SPARQL Queries over Relational Databases"),t("OutboundLink")],1),e._v(".  In: Semantic Web Journal 8.3 (2017), pp. 471–487.")])])]),e._v(" "),t("li",[t("p",[e._v("If you want to cite the techniques behind Ontop, check "),t("a",{attrs:{href:"/research/publications"}},[e._v("our publications")]),e._v(".")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);