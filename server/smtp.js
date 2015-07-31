Meteor.startup(function () {
  smtp = {
    username: Meteor.settings.emailUsername,   // eg: server@gentlenode.com
    password: Meteor.settings.emailPassword,   // eg: 3eeP1gtizk5eziohfervU
    server:   Meteor.settings.emailServer,  // eg: mail.gandi.net
    port: Meteor.settings.emailPort
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});