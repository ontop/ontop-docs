(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{373:function(e,n,t){"use strict";t.r(n);var a=t(48),i=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"formal-characterization-of-iqs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#formal-characterization-of-iqs"}},[e._v("#")]),e._v(" Formal characterization of IQs")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("TODO: CHECK/UPDATE (2 years old and formatted in AsciiDocs)")])]),e._v(" "),t("p",[e._v("This section aims at providing a more precise characterization of an "),t("em",[e._v("intermediate query")]),e._v(" ("),t("em",[e._v("IQ")]),e._v(" in what follows),\nwhich is the main query representation format used internally in Ontop.")]),e._v(" "),t("p",[e._v("An IQ is a standard (rooted and ordered) tree representation of an algebraic query expression.\nMore exactly,\nfor each node N of a well-formed IQ Q,\nthe maximal subtree or Q rooted in N represents a valid algebraic expression.")]),e._v(" "),t("p",[e._v("In order to give a more precise characterization of this algebra,\nwe will rely on its similarity with Relational Algebra ("),t("em",[e._v("RA")]),e._v(" in what follows),\nmore exactly the select/project/join/rename/union RA with named attributes (and no duplicate attribute),\nextended with additional operators supported by SQL DBMS (and relevant for Ontop's setting).\nThese additional operators are:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("left outer join (which corresponds to the SPARQL OPTIONAL operator),\nand")])]),e._v(" "),t("li",[t("p",[e._v("extended projection")])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("As of now, difference is not supported.")])]),e._v(" "),t("p",[e._v("For readability,\nsome similarities with the SPARQL language will also be (informally) higlighted.")]),e._v(" "),t("p",[e._v("NOTE: This is only one possible way of characterizing the meaning of an IQ.\nOther options would be for instance relying on (a customized version of) the SPARQL algebra,\nor defining from scratch a full-fledged semantic.")]),e._v(" "),t("p",[e._v("link:notation[The first section] introduces some notational conventions,\nwhereas the following ones present the different types of nodes which may appear in an IQ,\nand how they relate to RA operands and operators.\nIn order to simplify notation,\ntheir interpretation is first given in terms of set semantics (which is also the standard interpretation of RA).")]),e._v(" "),t("p",[e._v("The extension to bag semantics has specific implications in an OBDA setting,\nand is discussed in link:bagSemantics[a dedicated Section].")]),e._v(" "),t("h2",{attrs:{id:"notation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notation"}},[e._v("#")]),e._v(" Notation")]),e._v(" "),t("h3",{attrs:{id:"interpretation-of-algebraic-expressions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interpretation-of-algebraic-expressions"}},[e._v("#")]),e._v(" Interpretation of algebraic expressions")]),e._v(" "),t("p",[e._v("We assume the following mutually disjoint sets:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("a countably infinite domain D being queried,")])]),e._v(" "),t("li",[t("p",[e._v("a countably infinite set V of variables names (similar to SPARQL variables,\nor to a lesser extent to RA attribute names).")])]),e._v(" "),t("li",[t("p",[e._v("a finite set P of predicates,\nand")])]),e._v(" "),t("li",[t("p",[e._v("For each p ∈ P with arity n > 0,\na set {p_1, .., p_n} of base attribute names.")])])]),e._v(" "),t("p",[e._v("A database instance will be viewed as a total function I over P,\nwhich,\nto each element p of its domain,\nassociates a set I(p) of partial functions from {p_1, .., p_n} to D.")]),e._v(" "),t("p",[e._v("The "),t("em",[e._v("signature")]),e._v(" sig(M) of an algebraic query expression M is the set of its base operands,\nand it is assumed that for any well-formed M,\nsig(M) ⊆ P holds.")]),e._v(" "),t("p",[e._v("Given a database instance I over P,\nthe "),t("em",[e._v("interpretation")]),e._v(" ||M|| of a well-formed algebraic expression M is built inductively out of all I(p) such that p ∈ sig(M),\nby application of algebraic operators.\nTo each element of its domain,\n||.|| associates a (possibly empty) set of partial functions from a unique subset var(M) of V to D.\nvar(M) will be called the "),t("em",[e._v("projected variables")]),e._v(" of M,\nand does not depend on ||.||,\nbut only on M.")]),e._v(" "),t("h3",{attrs:{id:"interpretation-of-iq-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interpretation-of-iq-nodes"}},[e._v("#")]),e._v(" Interpretation of IQ nodes")]),e._v(" "),t("p",[e._v("If Q is a well-formed IQ,\nthen nodes(Q) will designate its nodes.\nAnd by extension,\nif N ∈ nodes(Q),\nthen sig(N) (resp. ||N|| and var(N)) will designate the signature (resp. the interpretation and the projected variables) of the algebraic expression represented by (the maximal subtree of Q rooted in) N.")]),e._v(" "),t("h3",{attrs:{id:"boolean-expressions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boolean-expressions"}},[e._v("#")]),e._v(" Boolean expressions")]),e._v(" "),t("p",[e._v("A "),t("em",[e._v("boolean expression")]),e._v(" in what follows designates a quantifier-free first-order formula,\nwith variables in V,\nconstants in D and predicates among the ones listed link:[in the dedicated section].")]),e._v(" "),t("p",[e._v("For instance,\nx ≠ y,\n(x ≥ 2) ∨ (x = z) and IsNotNull(x) are valid expressions.")]),e._v(" "),t("p",[e._v('Given a boolean expression φ and a partial function f : V ↦ D,\nthe formula φ[f] is obtained by replacing each variable x appearing in φ by f(x) if defined,\nand by NULL otherwise.\nThen the valuation val(φ[f]) of φ[f] corresponds to the one expected in SQL,\nand operators like "=" or ≥ are polymorphic.\nFor instance,\nfor any d ∈ D,\nval(d ≤ d) = TRUE,\nval(d ≠= d) = FALSE,\nval(NULL = d) = UNKNOWN,\nval(NULL ≤ d) = UNKNOWN,\netc.,')]),e._v(" "),t("p",[e._v("These boolean expressions are explicit RA selection conditions.\nImplicit selection conditions (exclusively equality between variables and/or constant) may also be expressed,\nfor instance by joining two algebraic expressions with shared variables (natural join).")]),e._v(" "),t("h2",{attrs:{id:"leaf-node-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#leaf-node-types"}},[e._v("#")]),e._v(" Leaf node types")]),e._v(" "),t("h3",{attrs:{id:"data-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-node"}},[e._v("#")]),e._v(" Data node")]),e._v(" "),t("p",[e._v("Data nodes are prototypical leaf nodes of IQs.\nIntuitively,\na data node is similar to a SPARQL triple pattern,\nbut extended to n-uples.")]),e._v(" "),t("p",[e._v("Equivalently,\na data node may represent the application to some p ∈ P of a (possibly trivial) selection (σ in RA),\nfollowed by a variable renaming (ρ in RA).")]),e._v(" "),t("p",[e._v("Internally,\na data node N is characterized (using logical notation) with an expression of the form p(v~1~, .., v~n~),\nwhere p ∈ P,\nand each v~i~ is either a constant or a variable,\ni.e. v~i~ ∈ D ∪ V.\nIn addition,\nwe have var(N) = {v~1~, .., v~n~} ∩ V.")]),e._v(" "),t("p",[e._v("Constants and repeated variable names express selection in the expected way.")]),e._v(" "),t("p",[e._v("For instance,\nif N is characterized by p(x,x),\nthen it represents the RA expression ρ~[x/p1,x/p2]~ (σ~[p1=p2]~ p).")]),e._v(" "),t("p",[e._v("Therefore,\nif I(p) = { {p1 ↦ 1, p2 ↦ 2}, {p1 ↦ 3, p2 ↦ 3} },\nthen ||N|| = { {p1 ↦ 3, p2 ↦ 3} } will hold.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Second order queries")]),e._v(" "),t("p",[e._v('SPARQL triple patterns allow for querying over the name of an RDF property,\ni.e. the name of a binary predicate.\nIn an IQ,\nthe data node corresponding to such a triple pattern is characterized by a ternary predicate with a meaningless predicate name (currently "triple"),\nand the property name variable as first argument.\nFor instance,\na data node encoding the SPARQL triple pattern ?s ?p ?o (where ?p stands for RDF property names) will be characterized by the expression triple(p,s,o).')]),e._v(" "),t("p",[e._v('This mechanism may be extended in future versions to all predicates.\nIn other words,\nP may be reduced to a set of one predicate per arity ("pair", "triple, "quadruple", etc),\nwith the current (n-1 ary) predicate names as first argument.')])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Intensional VS extensional data nodes")]),e._v(" "),t("p",[e._v("Todo")])]),e._v(" "),t("h3",{attrs:{id:"empty-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#empty-node"}},[e._v("#")]),e._v(" Empty node")]),e._v(" "),t("p",[e._v("An empty node E can be viewed as a specific kind of data node (whether it should be considered as intensional or extensional is not important).\nThe evaluation of the subquery rooted in E will always be (similar to) the RA n-ary empty relation,\nwith n ≥ 0.")]),e._v(" "),t("p",[e._v("In other words,\nfor any database instance,\n||E|| = {} holds (although var(E) may be nonempty).")]),e._v(" "),t("p",[e._v("Alternatively,\nif var(E) = {v~1~, .., v~n~},\nassuming some p ∈ P with arity n,\n(the subtree whose only node is) E can be viewed as representing the RA expression ρ~[v1/p1,..,vn/pn]~ (σ~FALSE~ p).")]),e._v(" "),t("p",[e._v("The behavior of ||E|| as an operand is similar to the behavior of an empty relation in RA.\nIn particular (see link:nonLeafNodes[the dedicated sections] below for the definitions of the corresponding operators):")]),e._v(" "),t("ul",[t("li",[e._v("(Left and right) identity element for union: ||E UNION M|| = ||M||,\nfor any M s.t. var(M) = var(E)")]),e._v(" "),t("li",[e._v("(Left and right) absorbing element for a natural join: ||E JOIN M|| = ||E||,\nfor any M")]),e._v(" "),t("li",[e._v("Left absorbing for left outer join,\nand right identity element if there is no join condition,\nor if the condition is met (right absorbing otherwise)")]),e._v(" "),t("li",[e._v("Fixpoint for selection.")])]),e._v(" "),t("h3",{attrs:{id:"true-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#true-node"}},[e._v("#")]),e._v(" True node")]),e._v(" "),t("p",[e._v("True nodes represent another limit case.\nThe evaluation of the subquery rooted in a true node T will always be (similar to) the RA nonempty but 0-ary relation.\nOr in other words,\nvar(T) = {},\nand for any database instance,\n||T|| = {f},\nwhere f has an empty domain.")]),e._v(" "),t("p",[e._v("The behavior of ||T|| as an operand is in most cases similar to the behavior of its RA counterpart.\nIn particular (see link:nonLeafNodes[the dedicated sections] below for the definitions of the corresponding operators):")]),e._v(" "),t("ul",[t("li",[e._v("(Left and right) identity element for a natural join: ||T JOIN M|| = ||M||,\nfor any M")]),e._v(" "),t("li",[e._v("||T UNION T|| = ||T|| (see the section about link:bagSemantics[bag semantics] for the treatment of cardinalities in this specific case).")])]),e._v(" "),t("p",[e._v("As expected,\nT is also the right identity element for the left outer join operator:")]),e._v(" "),t("ul",[t("li",[e._v("||M LEFT JOIN T|| = ||M||,\nfor any M.")])]),e._v(" "),t("p",[e._v("In the case where T is the left operand,\nwe have:")]),e._v(" "),t("ul",[t("li",[e._v("||T LEFT JOIN M|| = ||M||,\nif ||M|| ≠ {}")]),e._v(" "),t("li",[e._v("||T LEFT JOIN M|| = ||T|| otherwise.")])]),e._v(" "),t("p",[e._v("Note that in RA,\nbecause the left outer join operator is traditionally defined in terms of join,\nprojection,\nunion and difference,\nthese two queries would be syntactically invalid (implying a difference and a union of two relations with different arities).\nIn IQs on the other hand,\nthe left outer join is viewed as a primitive operator.")]),e._v(" "),t("h2",{attrs:{id:"non-leaf-node-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#non-leaf-node-types"}},[e._v("#")]),e._v(" Non-leaf node types")]),e._v(" "),t("h3",{attrs:{id:"inner-join-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inner-join-node"}},[e._v("#")]),e._v(" Inner join node")]),e._v(" "),t("p",[e._v("An inner join node N represents the n-ary natural join of the evaluations of its children nodes,\nExplicit joining conditions can also be attached to it,\nin the form of a boolean expression φ~N~,\nas defined above.")]),e._v(" "),t("p",[e._v("It can be defined almost identically to its SPARQL counterpart.\nFirst,\nfor any two partial functions f and g from V to D,\nlet f ~ g hold iff for all x ∈ dom(f) ∩ dom(g),\nwe have f(x) = g(x).")]),e._v(" "),t("p",[e._v("Then algebraic operation represented by an inner join node with explicit joining condition φ,\ndenoted with JOIN~φ~,\nis defined by:")]),e._v(" "),t("p",[e._v("Then ||N_1 JOIN~φ~ N_2|| = { f ∪ g | (f,g) ∈ ||N1|| × ||N2|| and f ~ g holds and val(φ[f ∪ g]) = TRUE},\nand V(N_1 JOIN N_2) = v(N1) ∪ v(N2).")]),e._v(" "),t("p",[e._v("If there is no explicit condition attached to an inner join node,\nthen it represents the operation N1 JOIN~1=1~ N2,\nabbreviated as  N1 JOIN N2.")]),e._v(" "),t("h3",{attrs:{id:"left-join-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#left-join-node"}},[e._v("#")]),e._v(" Left join node")]),e._v(" "),t("p",[e._v("A left join node represents the RA binary natural left outer join (or SPARQL OPTIONAL) of the evaluations of its children nodes.\nThe left and right children nodes respectively stand for the left and right part of the join.")]),e._v(" "),t("p",[e._v("Explicit joining conditions may also be attached to it.")]),e._v(" "),t("p",[e._v("As for join nodes,\nthis algebraic operation can be defined similarly to its SPARQL counterpart.\nAn inner join node with explicit joining condition φ,\nrepresents the algebraic operation INNER JOIN~φ~,\ndefined by:")]),e._v(" "),t("p",[e._v("||N_1 INNER JOIN~φ~ N_2|| = ||N1 JOIN N2|| ∪ { f & isin ||N1|| | for all (g) ∈ ||N2||,\nf ~ g or val(φ[f ∪ g]) = TRUE does not hold}.")]),e._v(" "),t("p",[e._v("As for join nodes,\nif there is no explicit condition attached to an inner join node,\nthen it represents the operation N1 INNER JOIN~1=1~ N2,\nabbreviated as  N1 INNER JOIN N2.")]),e._v(" "),t("h3",{attrs:{id:"union-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#union-node"}},[e._v("#")]),e._v(" Union node")]),e._v(" "),t("h3",{attrs:{id:"construction-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#construction-node"}},[e._v("#")]),e._v(" Construction node")]),e._v(" "),t("p",[e._v("A construction represents a RA extended projection,\nfollowed by an attribute renaming.")]),e._v(" "),t("p",[e._v('"Extended" projection means here that some additional operations on the values of the projected attributes can be expressed,\nprototypically string concatenation to create URIs out of data values (but also for instance arithmetic operations).')]),e._v(" "),t("p",[e._v("Attribute renaming is always the second operation,\ni.e. it is alway performed on the output of the (extended) projection.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("optional projection and renaming")]),e._v(" "),t("p",[e._v("Both operations (extended projection and renaming) are in a sense optional,\nin that the projection with all selected attributes (and no non-trivial additional operation) is the identity operator,\nand so is renaming with empty substituion.\nSo in practice,\na construction node may encode one of these operations.")])])])}),[],!1,null,null,null);n.default=i.exports}}]);