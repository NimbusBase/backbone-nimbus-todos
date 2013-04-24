var app = app || {};
var ENTER_KEY = 13;

$(function() {

	// Kick things off by creating the **App**.
	new app.AppView();

	sync_object = {
	"GDrive": {
		"key": "106903753207.apps.googleusercontent.com",
		"scope": "https://www.googleapis.com/auth/drive",
		"app_name": "nimbus-todo-demo"
	},
	"Dropbox": {
		"key": "q5yx30gr8mcvq4f",
		"secret": "qy64qphr70lwui5",
		"app_name": "todomvc_app"
	}
	};
	Nimbus.Auth.authorized_callback = function(){
		if(Nimbus.Auth.authorized()){
			$("#loading").fadeOut();
			console.log("authorized_callback");
			app.Todos.nimbus.sync_all(function(){
				app.Todos.fetch();
			});
		}
	}
	Nimbus.Auth.setup(sync_object);
});
