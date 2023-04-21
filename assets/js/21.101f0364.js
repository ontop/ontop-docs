(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{398:function(e,t,o){"use strict";o.r(t);var n=o(51),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"debug-protege"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debug-protege"}},[e._v("#")]),e._v(" Debug Protégé")]),e._v(" "),o("p",[e._v("This page describes how to debug the Protégé Plugin of Ontop from IntelliJ.")]),e._v(" "),o("p",[e._v("If you just want to test the plugin (without debugging), you only need to follow the step of building the Protégé plugin, and then run Protégé as usual (use "),o("code",[e._v("run.bat")]),e._v(" on Windows)")]),e._v(" "),o("div",{staticClass:"language-console extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ Protege-[protege-version]/run.sh\n")])])]),o("h2",{attrs:{id:"build-the-protege-plugin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-the-protege-plugin"}},[e._v("#")]),e._v(" Build the Protégé plugin")]),e._v(" "),o("h3",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("Checkout and build Ontop source code as described "),o("a",{attrs:{href:"/dev/build"}},[e._v("here")]),e._v(".\nWe assume all commands listed below are issued from the root directory of Ontop source tree.")]),e._v(" "),o("h3",{attrs:{id:"first-time-build"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#first-time-build"}},[e._v("#")]),e._v(" First time build")]),e._v(" "),o("p",[e._v("Unzip the Ontop Protégé bundle (obtained by previously building Ontop source code), which contains Protégé preconfigured with the Ontop Protégé plugin")]),e._v(" "),o("div",{staticClass:"language-console extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ unzip protege/distribution/target/ontop-protege-bundle-platform-independent-[ontop-version].zip\n")])])]),o("p",[e._v("Notes:")]),e._v(" "),o("ul",[o("li",[e._v("for older versions of Ontop (before 5.0.0) the bundle to unzip is located either in "),o("code",[e._v("build/distribution/ontop-protege")]),e._v("  (up to 4.0.3) or in "),o("code",[e._v("build/distribution/target")]),e._v(" (up to 5.0.0 excluded);")]),e._v(" "),o("li",[e._v("you may also reuse a (platform independent) Protégé distribution obtained directly from Protégé web site and already installed locally. In this case make sure that the Protégé version matches the one used during Ontop build, that Protégé directory contains a "),o("code",[e._v("plugins")]),e._v(" sub-directory (create it if missing), and run the commands below to deploy the Ontop Protégé plugin (adapting paths accordingly).")])]),e._v(" "),o("h3",{attrs:{id:"subsequent-builds"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#subsequent-builds"}},[e._v("#")]),e._v(" Subsequent builds")]),e._v(" "),o("p",[o("strong",[e._v("Each time you modify the code, you need to recompile and build the Ontop distribution.")])]),e._v(" "),o("p",[e._v("The fastest command to re-compile the Ontop Protégé plugin and the code it depends on is")]),e._v(" "),o("div",{staticClass:"language-console extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ mvn clean package -Dmaven.test.skip -Passet-plugin -pl protege/distribution -am\n")])])]),o("p",[e._v("Where:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("clean package")]),e._v(" forces a full re-build and may be generally omitted (which defaults to running "),o("code",[e._v("package")]),e._v(") unless you encounter build errors, in which case "),o("code",[e._v("clean")]),e._v(" helps ruling out they stem from incremental builds;")]),e._v(" "),o("li",[o("code",[e._v("-Dmaven.test.skip")]),e._v(" disables compiling and executing unit tests;")]),e._v(" "),o("li",[o("code",[e._v("-Passet-plugin")]),e._v(" activates the generation of the Ontop Protégé plugin (OSGI bundle with all its dependencies), without including other uneeded artifacts (e.g., full ZIP/tar.gz Protégé bundles, source and Javadoc JARs, etc);")]),e._v(" "),o("li",[o("code",[e._v("-pl protege/distribution -am")]),e._v(" (optional) tells Maven to only build the Ontop Protégé module located in "),o("code",[e._v("protege/distribution")]),e._v(" and all the other Ontop modules it depends on, saving another couple of seconds.")])]),e._v(" "),o("p",[e._v("Notes:")]),e._v(" "),o("ul",[o("li",[e._v("in Ontop versions 4.1 to 5.0.0 excluded, the command above should be replaced by "),o("code",[e._v("mvn clean package -Dmaven.test.skip -Pprotege -pl client/protege -am")]),e._v(";")]),e._v(" "),o("li",[e._v("in Ontop version 4.0.3 or earlier, the command above should be replaced by "),o("code",[e._v("mvn clean install -pl client/protege -am -DskipTests")]),e._v(" to compile code and install it in local maven repository, followed by "),o("code",[e._v("mvn bundle:bundle -pl client/protege")]),e._v(" to package the plugin.")])]),e._v(" "),o("p",[e._v("Once the Ontop Protégé plugin is built, it must be copied to the Protégé plugin directory via")]),e._v(" "),o("div",{staticClass:"language-console extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ cp protege/distribution/target/it.unibz.inf.ontop.protege-[ontop-version].jar Protege-[protege-version]/plugins/\n")])])]),o("p",[e._v("The command above should replace any previous Ontop Protégé plugin in the "),o("code",[e._v("plugins")]),e._v(" directory. In any case, "),o("strong",[e._v("make sure that there is only one Protégé plugin in "),o("code",[e._v("Protege-[protege-version]/plugins/")])])]),e._v(" "),o("h2",{attrs:{id:"debug-in-intellij-using-the-remote-debugger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debug-in-intellij-using-the-remote-debugger"}},[e._v("#")]),e._v(" Debug in IntelliJ using the Remote debugger")]),e._v(" "),o("h3",{attrs:{id:"intellij-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#intellij-configuration"}},[e._v("#")]),e._v(" IntelliJ configuration")]),e._v(" "),o("p",[e._v("Create a remote configuration:")]),e._v(" "),o("ul",[o("li",[e._v("select 'Edit configurations', click '+', then select 'Remote'")]),e._v(" "),o("li",[e._v("Host: "),o("code",[e._v("localhost")])]),e._v(" "),o("li",[e._v("Port: choose a port number ("),o("code",[e._v("5005")]),e._v(" in what follows)")])]),e._v(" "),o("h3",{attrs:{id:"protege-run-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#protege-run-options"}},[e._v("#")]),e._v(" Protégé run options")]),e._v(" "),o("p",[e._v("Edit the script "),o("code",[e._v("Protege-[protege-version]/run.sh")]),e._v(" (on Windows: "),o("code",[e._v("run.bat")]),e._v("), adding the following JVM option (note that parameter "),o("code",[e._v("suspend")]),e._v(" is set to "),o("code",[e._v("y")]),e._v(")")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005\n")])])]),o("h3",{attrs:{id:"run-debug"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#run-debug"}},[e._v("#")]),e._v(" Run / Debug")]),e._v(" "),o("p",[e._v("Execute "),o("code",[e._v("Protege-[protege-version]/run.sh")]),e._v(" (on Windows: "),o("code",[e._v("run.bat")]),e._v(").\nThen, from IntelliJ, click on the Debug button (or Shift+F9).")])])}),[],!1,null,null,null);t.default=i.exports}}]);