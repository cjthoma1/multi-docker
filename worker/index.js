const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

// Have to create duplicate of redis client when working with a client that is listening/subscribing to calls 
// or publishing information because it a client that is doing so can't be used for other purposes.
// Sub stands for subscription
const sub = redisClient.duplicate();

function fib(index) {
    if (index < 2) return 1;

    return fib(index - 1 ) + fib(index - 2);
}

sub.on('message', (channel, message) => {
    redisClient.hset('values', message, fib(parseFloat(message))) 
});

sub.subscribe('insert');