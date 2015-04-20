Vert.x 3.0.0 JavaScript Archetype
=================================

Overview
--------

This archetype, available from Maven Central, generates a basic stub for creating 
Vert.x 3.0.0 applications in JavaScript.

Prerequisites
-------------

* Java >= 1.8
* Maven >= 3.1
* [Vert.x 3.0.0-M4 Bundle](https://bintray.com/artifact/download/vertx/downloads/vert.x-3.0.0-milestone4.zip) (Added to PATH)

Installing Vert.x Bundle
------------------------

1. Extract zip file from link above to a location where you would like it to remain (VERTX_HOME)
2. Add VERTX_HOME/bin to your execution PATH (Add 'export PATH=$PATH:$VERTX_HOME/bin' to your ~/.bashrc on Linux)

Using
-----

```bash
mvn archetype:generate -DarchetypeGroupId=com.zanclus.codepalousa -DarchetypeArtifactId=vertx-js-archetype
```

Maven will interactively prompt you to build the template application. A small JavaScript
stub can be found under {{project root}}/src/main/resources/{{package path}}/main.js
