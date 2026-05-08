import { Metadata } from "next";
import NeuralNetDemo from "@/app/ui/playground/neural-net-demo";
import SeparabilityPlots from "@/app/ui/playground/separability-plots";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "An interactive neural network demo showing why XOR requires two layers — exploring universal function approximation through logic gates.",
};

export default function PlaygroundPage() {
  return (
    <main className="flex flex-col gap-10 text-lg font-normal">
      <h1 className="text-7xl font-thin md:text-9xl">Playground</h1>

      {/* Section 1: Universal approximation */}
      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-light">
          Neural networks as universal approximators
        </h2>
        <p className="text-slate-700 sm:text-justify">
          Neural networks with can approximate any continuous function to
          arbitrary precision in just one layer and enough neurons. This sounds
          like a superpower but it comes with a catch: the Universal
          Approximation Theorem says nothing about <em>how efficiently</em> a
          network learns, or whether a single layer is sufficient for every
          problem. The question is not whether a network <em>can</em> learn
          something; it is how deep it needs to be to do so tractably.
        </p>
        <p className="text-slate-700 sm:text-justify">
          Depth (more layers) adds expressive power that width (more neurons)
          alone cannot replicate cheaply, if at all. A shallow network may need
          an exponentially large number of neurons to represent what a deeper
          network can express with far fewer parameters. The best way to see
          this concretely is with the simplest possible classification problem:
          logic gates.
        </p>
      </section>

      {/* Section 2: Logic gates */}
      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-light">
          Logic gates and linear separability
        </h2>
        <p className="text-slate-700 sm:text-justify">
          A logic gate takes two binary inputs and produces a binary output.
          Most gates &mdash; AND, OR, NAND, NOR &mdash; are{" "}
          <strong className="font-semibold">linearly separable</strong>: you can
          draw a single straight line through the input space that correctly
          divides the 0-outputs from the 1-outputs. A single-layer perceptron is
          exactly a learned linear boundary, so it can solve these gates
          directly.
        </p>
        <p className="text-slate-700 sm:text-justify">
          XOR is different; no single line can separate the 1-outputs from the
          0-outputs. A single-layer perceptron network will not be able to
          converge to a loss near 0 as one point will always be misclassified.
          You need at least one hidden layer to compose the nonlinear boundary
          XOR requires. The below plots show the decision boundaries of a
          single-layer perceptron trained on each gate. What could a non-linear
          boundary look like for XOR?
        </p>
        <div className="flex w-full justify-center">
          <SeparabilityPlots />
        </div>
      </section>

      {/* Section 3: Interactive demo */}
      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-light">Try it yourself</h2>
        <p className="text-slate-700">
          Configure the network architecture below and hit{" "}
          <strong className="font-semibold">Train</strong>. Since the network
          weights are initialized randomly, you may need to hit Train a few
          times to see the loss fail to converge. Try different combinations of
          layers and neurons and watch how the loss curve changes!
        </p>
        <NeuralNetDemo />
      </section>
    </main>
  );
}
