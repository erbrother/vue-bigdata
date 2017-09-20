import kafka from 'kafka-node'

const Consumer = kafka.Consumer
const client = new kafka.Client('localhost:2181/')
const consumer = new Consumer(client, [{topic: 't', partition: 0}, {topic: 't1', partition: 1 }], {autoCommit: false})

export function getMessage() {
	consumer.on('message', function (message) {
	    return message
	})
}