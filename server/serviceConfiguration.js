// Facebook Configuration
ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: Meteor.settings.facebookAppId, 
      secret: Meteor.settings.facebookAppSecret
    }
  }
);

// Twitter Configuration
ServiceConfiguration.configurations.upsert(
  { service: "twitter" },
  {
    $set: {
      consumerKey: Meteor.settings.twitterConsumerKey, 
      secret: Meteor.settings.twitterSecret
    }
  }
);

// Google Configuration
ServiceConfiguration.configurations.upsert(
  { service: "google" },
  {
    $set: {
      clientId: Meteor.settings.googleClientId, 
      secret: Meteor.settings.googleSecret
    }
  }
);