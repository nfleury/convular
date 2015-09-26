# CONVULARJS

## AngularJS convention over configuration framework

Convular is a MVC framework for Angularjs written in NodeJS that helps to create apps quickly based on simple conventions and best practices
rather than boring configurations that you would have to write again and again.


## Starting with convular

Install convular globally:

npm install convular -g

Initialize a project:

npm init <myproject>

cd <myproject>

convular init <myproject>

You will end up with a project with the following structure:

```
myproject
|_controllers/
|_views/
|_services/
|_www/
|_entrypoint.js
|_convular.js
package.json
```
Run you application:
convular run

By default Convular uses Livereload to check for updates and automatically reload you app ! Enjoy !

A todo app example is available here: to check how does a Convular app looks like !


## Why ?

- There are many ways to create an angularjs app. As AngularJS does not provide any specific convention to create an application

- The Model View Controller pattern is a pattern that every developper knows and understands (right ?)

- Because I'm lazy and I like to create app quickly :)


## When should I use it ?

- To create small, medium or big apps with AngularJS
- You don't know how to start or structure your Angular app
- You are working in a team, you have to work with some conventions in order to be productive
- Manage multiple environments configuration for your app easily (development, staging, production)
- You want to focus on your business logic not application configuration

## When shouldn't I use it ?

When you want to create a simple Angular module or directive, Convular has been designed to create applications.

## How does it work ?

Convular is based on conventions. The main convention to adopt is the project structure. A Convular project must be structured as the followed:

app
|_controllers/ --> application controllers
|_views/ --> html views of your app
|_services/ --> application services that can be used in controllers
|_www/
|_entrypoint.js --> application entrypoint, this is the entry point of your application. It can be used to
|_convular.js --> minimal configuration -> route mapping, used modules

Convular uses Webpack in order to bundle the application into a standalone and eventually reusable app.

Convular provides a CLI to deal with the project worflow: create, build, test, run etc ... So that you don't have to care about these things
and spend your time developping great apps !

## Convular ClI

### Workflow

When you create an application, Convular will generate the application based on a template (this template can be customized). The file that is
generated based on that template is then used by Webpack

1- Generate Application based on a template and project structure + a minimal configuration (route mapping)
2- Application is bundled with Webpack and the result output goes into www directory

### Options

## Concepts

#Templates
Templates represents the convention you want to adopt. The template availabe by default assumes

#Webpack configuration

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/nfleury/convular/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
