#include <sw/redis++/redis++.h>
using namespace sw::redis;

try {
    Redis redis("tcp://127.0.0.1:6379");

    redis.set("key", "val");
    auto val = redis.get("key");
    if (val) {
        // dereference val to get the value of string type.
        std::cout << *val << std::endl;
    }   // else key doesn't exist.

    redis.rpush("list", {"a", "b", "c"});
    std::vector<std::string> list;
    redis.lrange("list", 0, -1, std::back_inserter(list));

    // put a vector<string> to Redis list.
    redis.rpush("another-list", list.begin(), list.end());

    auto tx = redis.transaction();

    auto tx_replies = tx.incr("num0")
                        .incr("num1")
                        .mget({"num0", "num1"})
                        .exec();

    auto redis_cluster = RedisCluster("tcp://127.0.0.1:7000");

    // RedisCluster has similar interface as Redis.
    redis_cluster.set("key", "value");
    val = redis_cluster.get("key");
} catch (const Error &err) {
    // error handling.
}