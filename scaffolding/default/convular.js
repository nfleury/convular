module.exports = {

    name:"myapp",

    modules:{
       "ngRoute":"angular-route/angular-route",
    },

    routes:{

      "/":{
        "controller":"index",
        "action":"list",
        "view":"todo.list.html",

      }

  }



};
