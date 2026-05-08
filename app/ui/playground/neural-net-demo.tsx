"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import { NeuralNetwork } from "@/app/lib/neural-net";

type Gate = "AND" | "OR" | "NAND" | "NOR" | "XOR" | "XNOR";

const GATE_DATA: Record<Gate, { inputs: number[][]; targets: number[][] }> = {
  AND: {
    inputs: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    targets: [[0], [0], [0], [1]],
  },
  OR: {
    inputs: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    targets: [[0], [1], [1], [1]],
  },
  NAND: {
    inputs: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    targets: [[1], [1], [1], [0]],
  },
  NOR: {
    inputs: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    targets: [[1], [0], [0], [0]],
  },
  XOR: {
    inputs: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    targets: [[0], [1], [1], [0]],
  },
  XNOR: {
    inputs: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    targets: [[1], [0], [0], [1]],
  },
};

const STEPS_PER_FRAME = 50;
const MAX_EPOCHS = 10000;
const LOSS_THRESHOLD = 0.001;
const CHART_WIDTH = 400;
const CHART_HEIGHT = 120;
const CHART_MAX_LOSS = 0.25;
const LEARNING_RATE = 0.5;

function buildNetwork(numLayers: number, nodesPerLayer: number): NeuralNetwork {
  const architecture = [2, ...Array(numLayers).fill(nodesPerLayer), 1];
  return new NeuralNetwork(architecture);
}

function lossToY(loss: number): number {
  return (
    CHART_HEIGHT -
    (Math.min(loss, CHART_MAX_LOSS) / CHART_MAX_LOSS) * CHART_HEIGHT
  );
}

export default function NeuralNetDemo() {
  const [gate, setGate] = useState<Gate>("XOR");
  const [numLayers, setNumLayers] = useState(1);
  const [nodesPerLayer, setNodesPerLayer] = useState(3);
  const [isTraining, setIsTraining] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [lossHistory, setLossHistory] = useState<number[]>([]);
  const [predictions, setPredictions] = useState<number[]>([
    0.5, 0.5, 0.5, 0.5,
  ]);

  const networkRef = useRef<NeuralNetwork>(
    buildNetwork(numLayers, nodesPerLayer),
  );
  const rafRef = useRef<number | null>(null);
  const epochRef = useRef(0);
  const lossHistoryRef = useRef<number[]>([]);
  const isTrainingRef = useRef(false);

  const syncPredictions = useCallback(() => {
    const { inputs } = GATE_DATA[gate];
    setPredictions(inputs.map((inp) => networkRef.current.predict(inp)));
  }, [gate]);

  const resetNetwork = useCallback(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    isTrainingRef.current = false;
    setIsTraining(false);
    epochRef.current = 0;
    lossHistoryRef.current = [];
    setEpoch(0);
    setLossHistory([]);
    networkRef.current = buildNetwork(numLayers, nodesPerLayer);
    syncPredictions();
  }, [numLayers, nodesPerLayer, syncPredictions]);

  const runFrame = useCallback(() => {
    if (!isTrainingRef.current) return;
    const { inputs, targets } = GATE_DATA[gate];
    let loss = 0;
    for (let i = 0; i < STEPS_PER_FRAME; i++) {
      loss = networkRef.current.trainStep(inputs, targets, LEARNING_RATE);
      epochRef.current++;
      if (epochRef.current >= MAX_EPOCHS || loss < LOSS_THRESHOLD) {
        isTrainingRef.current = false;
        setIsTraining(false);
        break;
      }
    }

    lossHistoryRef.current = [...lossHistoryRef.current, loss].slice(-200);
    setEpoch(epochRef.current);
    setLossHistory([...lossHistoryRef.current]);

    const preds = inputs.map((inp) => networkRef.current.predict(inp));
    setPredictions(preds);

    if (isTrainingRef.current) {
      rafRef.current = requestAnimationFrame(runFrame);
    }
  }, [gate]);

  useEffect(() => {
    if (isTraining) {
      isTrainingRef.current = true;
      rafRef.current = requestAnimationFrame(runFrame);
    } else {
      isTrainingRef.current = false;
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    }
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isTraining, runFrame]);

  const isXorPlateau = (gate === "XOR" || gate === "XNOR") && numLayers < 1;
  const currentLoss =
    lossHistory.length > 0 ? lossHistory[lossHistory.length - 1] : null;
  const isPlateauing =
    lossHistory.length > 20 &&
    Math.abs(
      lossHistory[lossHistory.length - 1] -
        lossHistory[lossHistory.length - 20],
    ) < 0.001 &&
    lossHistory[lossHistory.length - 1] > 0.01;

  // Build SVG polyline points
  const polylinePoints = lossHistory
    .map((loss, i) => {
      const x = (i / Math.max(lossHistory.length - 1, 1)) * CHART_WIDTH;
      const y = lossToY(loss);
      return `${x},${y}`;
    })
    .join(" ");

  const lineColor =
    isPlateauing && lossHistory.length > 20 ? "#f97316" : "#22c55e";

  const { inputs, targets } = GATE_DATA[gate];

  return (
    <div className="flex flex-col gap-6 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-md">
      {/* Controls */}
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end md:gap-6">
        {/* Mobile row 1: gate + buttons. xs+: contents flows children into parent row */}
        <div className="flex items-end justify-between gap-4 md:contents">
          {/* Gate selector */}
          <div className="flex flex-col gap-1 md:order-1">
            <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Logic Gate
            </label>
            <select
              value={gate}
              onChange={(e) => setGate(e.target.value as Gate)}
              disabled={isTraining}
              className="rounded border border-slate-300 bg-white px-3 py-1.5 font-mono text-sm focus:outline-none disabled:opacity-50"
            >
              {(Object.keys(GATE_DATA) as Gate[]).map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
          {/* Buttons */}
          <div className="flex gap-2 md:order-4">
            <button
              onClick={() => {
                if (!isTraining) {
                  resetNetwork();
                  setIsTraining(true);
                } else {
                  setIsTraining(false);
                }
              }}
              className={clsx(
                "rounded px-4 py-1.5 text-sm font-semibold text-white transition-colors",
                isTraining
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-indigo-600 hover:bg-indigo-700",
              )}
            >
              {isTraining ? "Stop" : "Train"}
            </button>
            <button
              onClick={resetNetwork}
              className="rounded border border-slate-300 px-4 py-1.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100"
            >
              Reset
            </button>
          </div>
        </div>
        {/* Mobile row 2: sliders */}
        <div className="flex items-end gap-6 md:contents">
          {/* Hidden layers slider */}
          <div className="flex w-1/2 flex-col gap-1 md:order-2 md:w-36">
            <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Hidden Layers: {numLayers}
            </label>
            <input
              type="range"
              min={0}
              max={2}
              value={numLayers}
              onChange={(e) => setNumLayers(Number(e.target.value))}
              disabled={isTraining}
              className="accent-indigo-600 disabled:opacity-50"
            />
          </div>
          {/* Nodes per layer slider */}
          <div className="flex w-1/2 flex-col gap-1 md:order-3 md:w-36">
            <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Nodes / Layer: {nodesPerLayer}
            </label>
            <input
              type="range"
              min={1}
              max={5}
              value={nodesPerLayer}
              onChange={(e) => setNodesPerLayer(Number(e.target.value))}
              disabled={isTraining}
              className="accent-indigo-600 disabled:opacity-50"
            />
          </div>
        </div>
      </div>

      {/* XOR callout */}
      {isXorPlateau && (
        <div className="rounded border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-800">
          <strong>XOR is not linearly separable.</strong> A single layer is
          equivalent to a linear classifier &mdash; it can only draw one
          straight boundary through the input space. XOR requires two
          boundaries, so the loss will fail to converge to 0. Increase to at
          least one hidden layer to see the difference.
        </div>
      )}
      {(gate === "XOR" || gate === "XNOR") && numLayers >= 1 && (
        <div className="rounded border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-800">
          With at least one hidden layers, the network can compose two linear
          boundaries into the nonlinear decision region XOR requires. Watch the
          loss drop.
        </div>
      )}

      {/* Chart + Truth table */}
      <div className="grid-rows-min grid gap-8 sm:grid-cols-2">
        {/* Loss curve */}
        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Loss curve
            </span>
            {currentLoss !== null && (
              <span className="font-mono text-xs text-slate-500">
                loss = {currentLoss.toFixed(4)} &nbsp; epoch {epoch}
              </span>
            )}
          </div>
          <svg
            className="w-full rounded border border-slate-200 bg-white"
            viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
          >
            {/* Y-axis ticks */}
            <text x={3} y={9} fontSize={9} fill="#94a3b8">
              0.25
            </text>
            <text x={3} y={CHART_HEIGHT - 3} fontSize={9} fill="#94a3b8">
              0
            </text>
            {/* Loss polyline */}
            {lossHistory.length > 1 && (
              <polyline
                points={polylinePoints}
                fill="none"
                stroke={lineColor}
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
            )}
          </svg>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <span className="inline-block h-0.5 w-4 bg-orange-400" />
              plateauing
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-0.5 w-4 bg-green-500" />
              converging
            </span>
          </div>
        </div>

        {/* Truth table */}
        <div className="flex w-full flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Predictions
          </span>
          <table className="border-collapse font-mono text-sm">
            <thead>
              <tr className="text-slate-500">
                <th className="pb-2 pr-4 text-left font-normal">A</th>
                <th className="pb-2 pr-4 text-left font-normal">B</th>
                <th className="pb-2 pr-4 text-left font-normal">Target</th>
                <th className="pb-2 text-left font-normal">Predicted</th>
              </tr>
            </thead>
            <tbody>
              {inputs.map((inp, i) => {
                const pred = predictions[i];
                const target = targets[i][0];
                const isCorrect =
                  (pred >= 0.9 && target === 1) ||
                  (pred <= 0.1 && target === 0);
                const isWrong =
                  (pred <= 0.1 && target === 1) ||
                  (pred >= 0.9 && target === 0);
                return (
                  <tr key={i} className="border-t border-slate-100">
                    <td className="py-1 pr-4">{inp[0]}</td>
                    <td className="py-1 pr-4">{inp[1]}</td>
                    <td className="py-1 pr-4">{target}</td>
                    <td
                      className={clsx(
                        "py-1 font-semibold tabular-nums",
                        isCorrect && "text-green-600",
                        isWrong && "text-red-500",
                        !isCorrect && !isWrong && "text-yellow-600",
                      )}
                    >
                      {pred.toFixed(3)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="text-green-600">green = correct</span>
            <span className="text-yellow-600">yellow = uncertain</span>
            <span className="text-red-500">red = wrong</span>
          </div>
        </div>

        {/* Architecture label */}
        <p className="col-span-full font-mono text-xs text-slate-400">
          Architecture: [2
          {Array(numLayers)
            .fill(nodesPerLayer)
            .map((n: number) => `, ${n}`)}
          , 1] &nbsp;&middot;&nbsp; sigmoid activation &nbsp;&middot;&nbsp; lr ={" "}
          {LEARNING_RATE} &nbsp;&middot;&nbsp; mini-batch gradient descent
          (batch = 16)
        </p>
      </div>
    </div>
  );
}
