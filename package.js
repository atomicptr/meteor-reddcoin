Package.describe({
    summary: 'Simple library to use reddcoind with meteor',
    version: "0.1.6",
    git: "https://github.com/kasoki/meteor-reddcoin.git"
});

Npm.depends({
    'node-reddcoin': '1.1.0',
    'fibers': '1.0.1'
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
    api.add_files('reddcoin.js', 'server');

    api.export('reddcoin', 'server');
});