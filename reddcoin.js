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