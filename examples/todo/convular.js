module.exports = {

    name:"todo",

    modules:{
       "ngRoute":"angular-route/angular-route",
  //   "ui.bootstrap":"angular-loading-bar",
    },

    routes:{

      "/":{
        "controller":"todo",
        "action":"list",
        "view":"todo.list.html",

      },


      "/add":{
        "controller":"todo",
        "action":"add",
        "view":"todo.add.html"
      },

  }



};
