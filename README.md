meteor-reddcoin
----------------

Simple library to use reddcoind with meteor

## Dependency

You'll need to have a running reddcoind instance

## Powered by

* [reddcoin](http://www.reddcoin.com/)
* [node-reddcoin](https://www.npmjs.org/package/node-reddcoin)
* [fibers](https://www.npmjs.org/package/fibers)

## Usage

```javascript
var rdd = new reddcoin({
    user: "YOUR_RPC_USERNAME",
    pass: "YOUR_RPC_PASSWORD"
});

var balance = rdd.balance();

console.log("Balance before transaction: " + balance);

rdd.unlock("my_passphrase", 60);

rdd.send("RhAEyriLNWGZCbid6yAvKjFK7eNXVg3tyk", 50, "sending test");

rdd.lock();

balance = rdd.balance();

console.log("Balance after transaction: " + balance);
```

## Install

Inside your project folder run

    mrt add meteor-reddcoin


## License

meteor-reddcoin is licensed under the terms of the MIT license.

## Like it? I also accept Reddcoin Tips

### RhAEyriLNWGZCbid6yAvKjFK7eNXVg3tyk