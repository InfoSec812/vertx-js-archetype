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

Running In Dev Mode
-------------------

The Maven POM has a configuration for running the application in "redeploy" mode
so that changes are detected and redeployed without restarting the application.

```bash
mvn exec:java
```

Packaging And Deploying
-----------------------

Package the application using Maven:

```bash
mvn clean package
```

Run the created JAR file:

```bash
java -jar ${projectdir}/target/${project.name}-${project.version}-SNAPSHOT-fat.jar
```

You can optionally add other parameters to the JAR run like:

```
    valid options are:
        -conf <config>         Specifies configuration that should be provided 
                               to the verticle. <config> should reference      
                               either a text file containing a valid JSON      
                               object which represents the configuration OR    
                               be a JSON string.                               
        -instances <instances> specifies how many instances of the verticle    
                               will be deployed. Defaults to 1                 
        -worker                if specified then the verticle is a worker      
                               verticle.                                       
        -cluster               if specified then the vert.x instance will form 
                               a cluster with any other vert.x instances on    
                               the network.                                    
        -cluster-port          port to use for cluster communication.          
                               Default is 0 which means choose a spare          
                               random port.                                    
        -cluster-host          host to bind to for cluster communication.      
                               If this is not specified vert.x will attempt    
                               to choose one from the available interfaces.  

        -ha                    if specified the verticle will be deployed as a 
                               high availability (HA) deployment.              
                               This means it can fail over to any other nodes 
                               in the cluster started with the same HA group   
        -quorum                used in conjunction with -ha this specifies the 
                               minimum number of nodes in the cluster for any  
                               HA deploymentIDs to be active. Defaults to 0      
        -hagroup               used in conjunction with -ha this specifies the 
                               HA group this node will join. There can be      
                               multiple HA groups in a cluster. Nodes will only
                               failover to other nodes in the same group.      
                               Defaults to __DEFAULT__
```