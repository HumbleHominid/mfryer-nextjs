// Box-Muller: samples from N(0,1), guaranteeing symmetric negative/positive values
function randNormal(): number {
  const u = 1 - Math.random();
  const v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

function sigmoidPrime(x: number): number {
  const s = sigmoid(x);
  return s * (1 - s);
}

export class NeuralNetwork {
  private layers: number[];
  private weights: number[][][]; // weights[layer][to][from]
  private biases: number[][];

  constructor(layers: number[]) {
    this.layers = layers;
    this.weights = [];
    this.biases = [];
    this.reset();
  }

  reset(): void {
    this.weights = [];
    this.biases = [];
    for (let l = 1; l < this.layers.length; l++) {
      const fanIn = this.layers[l - 1];
      const fanOut = this.layers[l];
      // Glorot normal: std = sqrt(2/(fanIn+fanOut)), always symmetric around 0
      const std = Math.sqrt(2 / (fanIn + fanOut));
      this.weights.push(
        Array.from({ length: fanOut }, () =>
          Array.from({ length: fanIn }, () => randNormal() * std),
        ),
      );
      // Small random biases break inter-neuron symmetry in narrow layers
      this.biases.push(
        Array.from({ length: fanOut }, () => randNormal() * std),
      );
    }
  }

  private forward(input: number[]): {
    zs: number[][];
    activations: number[][];
  } {
    const activations: number[][] = [input];
    const zs: number[][] = [];
    let current = input;
    for (let l = 0; l < this.weights.length; l++) {
      const z: number[] = [];
      const next: number[] = [];
      for (let j = 0; j < this.weights[l].length; j++) {
        let sum = this.biases[l][j];
        for (let k = 0; k < current.length; k++) {
          sum += this.weights[l][j][k] * current[k];
        }
        z.push(sum);
        next.push(sigmoid(sum));
      }
      zs.push(z);
      activations.push(next);
      current = next;
    }
    return { zs, activations };
  }

  predict(input: number[]): number {
    const { activations } = this.forward(input);
    return activations[activations.length - 1][0];
  }

  // Mini-batch gradient descent — one epoch over all samples, returns mean MSE loss
  trainStep(inputs: number[][], targets: number[][], lr = 0.1): number {
    const numLayers = this.weights.length;
    const n = inputs.length;
    const batchSize = Math.min(16, n);

    // Fisher-Yates shuffle of indices
    const indices = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    let totalLoss = 0;

    for (let start = 0; start < n; start += batchSize) {
      const batch = indices.slice(start, start + batchSize);
      const batchN = batch.length;

      const wGrads = this.weights.map((layer) =>
        layer.map((row) => row.map(() => 0)),
      );
      const bGrads = this.biases.map((layer) => layer.map(() => 0));

      for (const s of batch) {
        const { zs, activations } = this.forward(inputs[s]);
        const output = activations[activations.length - 1];
        const target = targets[s];

        totalLoss += target.reduce(
          (acc, t, i) => acc + (output[i] - t) ** 2,
          0,
        );

        let delta = output.map(
          (o, i) => 2 * (o - target[i]) * sigmoidPrime(zs[numLayers - 1][i]),
        );

        for (let l = numLayers - 1; l >= 0; l--) {
          for (let j = 0; j < delta.length; j++) {
            bGrads[l][j] += delta[j];
            for (let k = 0; k < activations[l].length; k++) {
              wGrads[l][j][k] += delta[j] * activations[l][k];
            }
          }
          if (l > 0) {
            const prevDelta: number[] = [];
            for (let k = 0; k < this.weights[l][0].length; k++) {
              let err = 0;
              for (let j = 0; j < this.weights[l].length; j++) {
                err += this.weights[l][j][k] * delta[j];
              }
              prevDelta.push(err * sigmoidPrime(zs[l - 1][k]));
            }
            delta = prevDelta;
          }
        }
      }

      for (let l = 0; l < numLayers; l++) {
        for (let j = 0; j < this.weights[l].length; j++) {
          this.biases[l][j] -= lr * (bGrads[l][j] / batchN);
          for (let k = 0; k < this.weights[l][j].length; k++) {
            this.weights[l][j][k] -= lr * (wGrads[l][j][k] / batchN);
          }
        }
      }
    }

    return totalLoss / n;
  }
}
