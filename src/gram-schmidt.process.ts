import * as tf from "@tensorflow/tfjs-core";

const x = tf.tensor2d([[1, -2, 0, 4], [5, 0, -7, 8], [9, -1, -1, 5], [-2, 5, 7, -9]]);

const y = tf.linalg.gramSchmidt(x) as tf.Tensor;

y.print();
