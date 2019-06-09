import * as tf from "@tensorflow/tfjs-core";

const x = tf.tensor2d([[1, -2, 0, 4], [5, 0, -7, 8]]);

const [q, r] = tf.linalg.qr(x);

console.log("Q");

q.print();

console.log("R");

r.print();

console.log("Orthogonalized");

q.dot(q.transpose()).print();

console.log("Reconstructed");

q.dot(r).print();
