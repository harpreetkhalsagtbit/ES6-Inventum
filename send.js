#!/usr/bin/env node

var amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function(error, connection) {
  console.log(error);
  if (error) {
    throw error;
  }
  connection.createChannel(function(errorCreateChannel, channel) {
    if (errorCreateChannel) {
      throw errorCreateChannel;
    }
    var queue = "hello";
    var msg = "Hello world";

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
  });
});
