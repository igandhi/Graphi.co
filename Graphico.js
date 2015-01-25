Stories = new Mongo.Collection('stories');

if (Meteor.isClient) {
	
	Template.body.helpers({
		stories : function() {
			return Stories.find({});
		}
	});
	
	Template.body.events({
		'submit .new-message': function(event) {
			var text = event.target.text.value;
			
			Stories.insert({
				text: text,
				createdAt: new Date()
			})
			
			event.target.text.value = "";
			
			return false;
		}
	});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
