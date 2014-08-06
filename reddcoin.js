var Future = Npm.require("fibers/future");

reddcoin = function(user, pass) {
    this.user = user;
    this.pass = pass;

    this.rdd = Npm.require("node-reddcoin")({
        user: this.user,
        pass: this.pass
    });
};

reddcoin.prototype.transactions = function() {
    var future = new Future();

    this.rdd.exec("listtransactions", function(err, transactions) {
        if(err) return console.log(err);

        future.return(transactions);
    });

    return future.wait();
};

reddcoin.prototype.balance = function() {
    var future = new Future();

    this.rdd.exec("getbalance", function(err, balance) {
        if(err) return console.log(err);

        future.return(balance);
    });

    return future.wait();
}