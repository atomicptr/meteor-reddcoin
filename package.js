Package.describe({
    summary: 'node-reddcoin wrapper for meteor'
});

Npm.depends({
    'node-reddcoin': '1.1.0',
    'fibers': '1.0.1'
});

Package.on_use(function(api) {
    api.add_files('reddcoin.js', 'server');

    api.export('reddcoin', 'server');
});