Meteor.subscribe('pages');
Meteor.subscribe('posts');
Meteor.subscribe('media');
Meteor.subscribe('categories');
Meteor.subscribe('menus');
Meteor.subscribe('usernames', function () { 
	//if there is a user and the username is "Admin", then disallow additional user creation
	var user = Meteor.users.find().fetch();
	if (user[0].username == 'admin'){
		Accounts.config({
			forbidClientAccountCreation: 'true'
		});
	}
});

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_EMAIL'
});

UI.registerHelper('setTitle', function(title){
	if (title){
		document.title = title;
	} else {
		document.title = "Meteor CMS | Your Blank Canvas"
	}
});

UI.registerHelper('pages', function(){
	return Pages.find();
});

UI.registerHelper('posts', function(){
	return Posts.find();
});

UI.registerHelper('categories', function(){
	return Categories.find();
});

Deps.autorun(function(){
	Meteor.subscribe('settings');
})