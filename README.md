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

Using
-----

```bash
mvn archetype:generate -DarchetypeGroupId=com.zanclus.codepalousa -DarchetypeArtifactId=vertx-js-archetype -DarchetypeVersion=3.0.0-M4
```

Maven will interactively prompt you to build the template application. A small JavaScript
stub can be found under {{project root}}/src/main/resources/{{package path}}/main.js
