Package.describe({
  summary: "Zooniverse OAuth",
  version: "0.1.0",
  documentation: '',
  git: ''
});

Package.onUse(function(api) {
  api.use('accounts-base@1.2.0', ['client', 'server']);
  api.imply('accounts-base@1.2.0', ['client', 'server']);
  api.use('accounts-oauth@1.1.5', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('underscore', 'client');
  api.use('templating', 'client');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.export('Zooniverse');

  api.addFiles("zooniverse.js");
  api.addFiles('zooniverse_server.js', 'server');
  api.addFiles('zooniverse_client.js', 'client');
});
