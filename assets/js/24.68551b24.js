(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{412:function(e,t,a){"use strict";a.r(t);var s=a(48),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"make-a-new-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-a-new-release"}},[e._v("#")]),e._v(" Make a new release")]),e._v(" "),a("h3",{attrs:{id:"update-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-documents"}},[e._v("#")]),e._v(" Update documents")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("README.html")]),e._v(" in "),a("code",[e._v("client/protege")]),e._v(". This file will be displayed in the Protégé Plugin Update window.")]),e._v(" "),a("li",[a("code",[e._v("README.md")]),e._v(" in "),a("code",[e._v("build/distribution")]),e._v(". This file will be uploaded to SourceForge")]),e._v(" "),a("li",[a("code",[e._v("update.properties")]),e._v(" file in "),a("code",[e._v("client/protege")]),e._v(". This is the configuration file for Protégé plugin Auto Update")])]),e._v(" "),a("h3",{attrs:{id:"create-a-git-branch-for-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-git-branch-for-release"}},[e._v("#")]),e._v(" Create a git branch for release")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout develop\n$ git checkout -b release/v-number\n")])])]),a("h3",{attrs:{id:"update-the-version-numbers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-version-numbers"}},[e._v("#")]),e._v(" Update the version numbers")]),e._v(" "),a("p",[e._v("Update pom.xml files by Maven plugin to a SNAPSHOT version:")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ./mvnw versions:set -DnewVersion=4.0.0-SNAPSHOT \n")])])]),a("h3",{attrs:{id:"build-maven-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-maven-packages"}},[e._v("#")]),e._v(" Build maven packages")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ ./mvnw release:clean\n\n# Preparing the release will create the new tag in git and automatically push to github\n# When 100% sure, you can skip the test by `-Darguments="-DskipTests"`\n$ ./mvnw -DperformRelease=true release:prepare\n\n# stage the release\n$ ./mvnw release:perform \n\n# Or stage from a Git tag\n# ./mvnw release:perform  -DconnectionUrl=scm:git:git@github.com:ontop/ontop.git -Dtag=ontop-3.0.0\n')])])]),a("h3",{attrs:{id:"build-ontop-bundles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-ontop-bundles"}},[e._v("#")]),e._v(" Build Ontop bundles")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/dev/build"}},[e._v("Build Instruction")])])]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ./build-release.sh \n")])])]),a("h3",{attrs:{id:"test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[e._v("#")]),e._v(" Test")]),e._v(" "),a("ul",[a("li",[e._v("run protege plugin tests")]),e._v(" "),a("li",[e._v("test CLI")])]),e._v(" "),a("h3",{attrs:{id:"release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release"}},[e._v("#")]),e._v(" Release")]),e._v(" "),a("ul",[a("li",[e._v("Deploy the packages to SourceForge via sftp.")])]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sftp user,ontop4obda@frs.sourceforge.net\n$ cd /home/pfs/project/o/on/ontop4obda\n# sftp://ghxiao,ontop4obda@frs.sourceforge.net/home/pfs/project/o/on/ontop4obda\n")])])]),a("ul",[a("li",[a("p",[e._v("Stage the artifacts in sonatype "),a("a",{attrs:{href:"https://oss.sonatype.org",target:"_blank",rel:"noopener"}},[e._v("https://oss.sonatype.org"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Update "),a("a",{attrs:{href:"/guide"}},[e._v("the guide homepage")]),e._v(" and "),a("a",{attrs:{href:"/guide/releases"}},[e._v("the release notes")]),e._v(" of this website")])]),e._v(" "),a("li",[a("p",[e._v("Update "),a("a",{attrs:{href:"https://github.com/ontop/ontop-api-examples",target:"_blank",rel:"noopener"}},[e._v("https://github.com/ontop/ontop-api-examples"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Send release emails to several mail lists")])])]),e._v(" "),a("h3",{attrs:{id:"prepare-for-next-development-iteration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-for-next-development-iteration"}},[e._v("#")]),e._v(" Prepare for next development iteration")]),e._v(" "),a("p",[e._v("Update branches:")]),e._v(" "),a("p",[e._v("Merge the tag for the release to master and the release branch to develop")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout master\n$ git merge v-number # tag\n\n$ git checkout develop\n$ git merge release/v-number #branch \n")])])]),a("h3",{attrs:{id:"time-for-celebration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time-for-celebration"}},[e._v("#")]),e._v(" Time for celebration!")])])}),[],!1,null,null,null);t.default=r.exports}}]);