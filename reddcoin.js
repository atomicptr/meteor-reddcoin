var Future = Npm.require("fibers/future");

reddcoin = function(object) {
    this.rdd = Npm.require("node-reddcoin")(object);
};

// reddcoind getbalance [account]
reddcoin.prototype.balance = function(account) {
    var future = new Future();

    if(account) {
        this.rdd.exec("getbalance", account, function(err, balance) {
            if(err) {
                console.log(err);
                future.return(err);
            } else {
                future.return(balance);
            }
        });
    } else {
        this.rdd.exec("getbalance", function(err, balance) {
            if(err) {
                console.log(err);
                future.return(err);
            } else {
                future.return(balance);
            }
        });
    }

    return future.wait();
};

// reddcoind getinfo
reddcoin.prototype.info = function() {
    var future = new Future();

    this.rdd.exec("getinfo", function(err, info) {
        if(err) {
            console.log(err);
            future.return(err);
        } else {
            future.return(info);
        }
    });

    return future.wait();
}

// reddcoind gettransaction txid
reddcoin.prototype.transaction = function(txid) {
    var future = new Future();

    this.rdd.exec("gettransaction", txid, function(err, transaction) {
        if(err) {
            console.log(err);
            future.return(err);
        } else {
            future.return(transaction);
        }
    });

    return future.wait();
};

// reddcoind listtransactions
reddcoin.prototype.transactions = function() {
    var future = new Future();

    this.rdd.exec("listtransactions", function(err, transactions) {
        if(err) {
            console.log(err);
            future.return(err);
        } else {
            future.return(transactions);
        }
    });

    return future.wait();
};

// reddcoind listaccounts
reddcoin.prototype.accounts = function() {
    var future = new Future();

    this.rdd.exec("listaccounts", function(err, accounts) {
        if(err) {
            console.log(err);
            future.return(err);
        } else {
            future.return(accounts);
        }
    });

    return future.wait();
};

// reddcoind validateaddress address
reddcoin.prototype.validate = function(address) {
    var future = new Future();

    this.rdd.exec("validateaddress", address, function(err, validate) {
        if(err) {
            console.log(err);
            future.return(err);
        } else {
            future.return(validate);
        }
    });

    return future.wait();
};

// reddcoind getstakinginfo
reddcoin.prototype.stake = function() {
    var future = new Future();

    this.rdd.exec("getstakinginfo", function(err, stake) {
        if(err) {
            console.log(err);
            future.return(err);
        } else {
            future.return(stake);
        }
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
        if(err) {
            console.log(err);
            future.return(err);
        } else {
            future.return(unlock);
        }
    });

    return future.wait();
};

// reddcoind walletlock
reddcoin.prototype.lock = function() {
    var future = new Future();

    this.rdd.exec("walletlock", function(err, lock) {
        if(err) {
            console.log(err);
            future.return(err);
        } else {
            future.return(lock);
        }
    });

    return future.wait();
};

// reddcoind sendtoaddress to_address amount [comment]
reddcoin.prototype.send = function(address, amount, comment) {
    var future = new Future();

    this.rdd.exec("sendtoaddress", address, amount, comment, function(err, send) {
        if(err) {
            console.log(err);
            future.return(err);
        } else {
            future.return(send);
        }
    });

    return future.wait();
}

// reddcoind getblockcount
reddcoin.prototype.blockcount = function() {
    var future = new Future();

    this.rdd.exec("getblockcount", function(err, blockcount) {
        if(err) {
            console.log(err);
            future.return(err);
        } else {
            future.return(blockcount);
        }
    });

    return future.wait();
}

// reddcoind getblockhash [index]
reddcoin.prototype.blockhash = function(index) {
    var future = new Future();

    this.rdd.exec("getblockhash", index, function(err, hash) {
        if(err) {
            console.log(err);
            future.return(err);
        } else {
            future.return(hash);
        }
    });

    return future.wait();
}

// reddcoind getblock [hash]
reddcoin.prototype.block = function(hash) {
    var future = new Future();

    this.rdd.exec("getblock", hash, function(err, block) {
        if(err) {
            console.log(err);
            future.return(err);
        } else {
            future.return(block);
        }
    });

    return future.wait();
}

// reddcoin encryptwallet passphrase
reddcoin.prototype.encryptwallet = function(passphrase) {
    var future = new Future();

    this.rdd.exec("encryptwallet", passphrase, function(err, done) {
        if(err) {
            console.log(err);
            future.return(err);
        } else {
            future.return(done);
        }
    });

    return future.wait();
}
