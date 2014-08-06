var Future = Npm.require("fibers/future");

reddcoin = function(object) {
    this.rdd = Npm.require("node-reddcoin")(object);
};

// reddcoind getbalance [account]
reddcoin.prototype.balance = function(account) {
    var future = new Future();

    if(account) {
        this.rdd.exec("getbalance", account, function(err, balance) {
            if(err) return console.log(err);

            future.return(balance);
        });
    } else {
        this.rdd.exec("getbalance", function(err, balance) {
            if(err) return console.log(err);

            future.return(balance);
        });
    }

    return future.wait();
};

// reddcoind getinfo
reddcoin.prototype.info = function() {
    var future = new Future();

    this.rdd.exec("getinfo", function(err, info) {
        if(err) return console.log(err);

        future.return(info);
    });

    return future.wait();
}

// reddcoind gettransaction txid
reddcoin.prototype.transaction = function(txid) {
    var future = new Future();

    this.rdd.exec("gettransaction", txid, function(err, transaction) {
        if(err) return console.log(err);

        future.return(transaction);
    });

    return future.wait();
};

// reddcoind listtransactions
reddcoin.prototype.transactions = function() {
    var future = new Future();

    this.rdd.exec("listtransactions", function(err, transactions) {
        if(err) return console.log(err);

        future.return(transactions);
    });

    return future.wait();
};

// reddcoind listaccounts
reddcoin.prototype.accounts = function() {
    var future = new Future();

    this.rdd.exec("listaccounts", function(err, accounts) {
        if(err) return console.log(err);

        future.return(accounts);
    });

    return future.wait();
};

// reddcoind validateaddress address
reddcoin.prototype.validate = function(address) {
    var future = new Future();

    this.rdd.exec("validateaddress", address, function(err, validate) {
        if(err) return console.log(err);

        future.return(validate);
    });

    return future.wait();
};

// reddcoind getstakinginfo
reddcoin.prototype.stake = function() {
    var future = new Future();

    this.rdd.exec("getstakinginfo", function(err, stake) {
        if(err) return console.log(err);

        future.return(stake);
    });

    return future.wait();
};

// reddcoind walletpassphrase passphrase timeout stakeonly?
reddcoin.prototype.unlock = function(passphrase, timeout, stakeonly) {
    var future = new Future();

    if(stakeonly == undefined) {
        stakeonly = false;
    }

    this.rdd.exec("walletpassphrase", passphrase, timeout, stakeonly, function(err, unlock) {
        if(err) return console.log(err);

        future.return(unlock);
    });

    return future.wait();
};

// reddcoind walletlock
reddcoin.prototype.lock = function() {
    var future = new Future();

    this.rdd.exec("walletlock", function(err, lock) {
        if(err) return console.log(err);

        future.return(lock);
    });

    return future.wait();
};

// reddcoind send to_address amount [comment]
reddcoin.prototype.send = function(address, amount, comment) {
        var future = new Future();

    this.rdd.exec("send", address, amount, comment, function(err, send) {
        if(err) return console.log(err);

        future.return(send);
    });

    return future.wait();
}