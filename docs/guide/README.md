# Mevn CLI



## Getting started

A CLI tool for getting started with MEVN stack. It offers a super simple boilerplate project and additional utilities for building a MEVN app. It helps for beginner developers to easily create a template for their Web application development.

## Prerequisites

- Npm - it is a package manager for the JavaScript programming language.
- Node.js -Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.
- Git - Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for source code management in software development.

## Installing

```bash
npm install -g mevn-cli
```

## Quickstart
```bash
npm install -g mevn-cli
mevn-cli init "Desired File Name" 
```
### Initial Command

This command Initialises the project.

```
mevn-cli init appname
```

### Server Commands

These commands are used to generate the code necessary for running a server.

| command | description |
| ------- | ----------- |
|``` mevn-cli create:route ``` | To create the Routes-File(API) |
|``` mevn-cli create:model ``` | To create the Models-File(SCHEMA) |
|``` mevn-cli create:controller``` |  To create the Controllers-File |
| ```mevn-cli create:config ``` | To create the Config-File |


### General Command
 
 These are generic commands for the entire project.

| command | description |                                                                                                
| -------------- |  ---------------- |
| ```mevn-cli run:server``` | To run the Server |
| ```mevn-cli run:client``` | To run the Client |
| ```mevn-cli add:package``` | To add additional packages as required |
| ```mevn-cli create:component <component_name>``` | To create new components as required |
| ```mevn-cli dockerize``` | To run the client and server in separate docker containers |

## File Hierarchy

  
  | - __Mevn-Cli__- // all the tests for this module goes here
      
      | - lib // Sub components of this module
            | - Commands
              | - addPackagelib.js
              | - componentslib.js
              | - configlib.js
              | - controllerlib.js
              | - initlib.js
              | - modelslib.js
              | - routeslib.js
              | - files
                | - components
                    | - component.vue
                | - controllers
                    | - user_controller.js
                | - models
                    | - user_schema.js
                | - routes
                    | - FacebookRoutes.js
                    | - GoogleRoutes.js
                    | - index.js
                    | - index_with_passport.js
                    | - index_with_social_media_auth.js
                    | - TwitterRoutes.js
                | - vuex
                    | - store.js

        | - container
            | - docker.js

        | - deploy
            | - dply.js

        | - external //sub components of this module
            | - banner.js

        | - Run // Sub components of this module
            | - client.js
            | - server.js

        | - utils
            | - createFile.js
            | - fileOverwritePrompt.js

    | - config.json
    | - index.js
    | - package-lock.json
    | - package.json  


## Features

- This tool provides an easy way to build a web app by providing a super simple boilerplate project and a reliable boilerplate pwa to build upon.  
- Its written in ES6 syntax, which is a developer-friendly syntax that keeps the code simpler and smaller.
- The whole project is done in modules(thanks to ES6 syntax) which enhances user readability and much more compact code.  
- Mevn-Cli will automate the files and generate the codes necessary to start and run a server, API etc


## Contributing

Before contributing to this repository, please first discuss the change you wish to make via issue, or any other method with the owners of this repository before making a change. 

### How do I contribute?
1. Ensure you have no "dummy" files left, if you do simple add them to the bottom of the `.gitignore`.
2. Fork and clone our repository.
3. Make your life-changing changes.
4. Commit and push your changes.
5. Make a detailed pull request.

### Why should I contribute?
Contributing helps people and makes the world simply a better place, without contributors this project would cease to exist.

### What if I cannot code or do not like it?
You can always write documentation, most repositories lack in it.

### What is next?
Nothing! Your done and ready to get coding!


## Versioning And Help

| command | description
| --- | --- |
| ```mevn-cli -v``` | Check CLI version |
|``` mevn-cli --help ``` | Get help and check usage |
