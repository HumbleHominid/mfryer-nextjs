// SVG coordinate helpers
// Input A ∈ {0,1} → x=40 + A*100; Input B ∈ {0,1} → y=120 - B*100 (inverted)

type GatePlot = {
  name: string;
  points: { a: number; b: number; out: number }[];
  // Line defined as two extended endpoint pairs (will be clipped)
  line?: { x1: number; y1: number; x2: number; y2: number };
};

const GATES: GatePlot[] = [
  {
    name: "AND",
    points: [
      { a: 0, b: 0, out: 0 },
      { a: 1, b: 0, out: 0 },
      { a: 0, b: 1, out: 0 },
      { a: 1, b: 1, out: 1 },
    ],
    // A + B = 1.5 — separates only (1,1) from the rest
    // At A=0.5, B=1 → SVG (90, 20); at A=1, B=0.5 → SVG (140, 70)
    // Extended ±30 along both axes for clean clip
    line: { x1: 60, y1: -10, x2: 170, y2: 100 },
  },
  {
    name: "OR",
    points: [
      { a: 0, b: 0, out: 0 },
      { a: 1, b: 0, out: 1 },
      { a: 0, b: 1, out: 1 },
      { a: 1, b: 1, out: 1 },
    ],
    // A + B = 0.5 — separates (0,0) from the rest
    // At A=0, B=0.5 → SVG (40, 70); at A=0.5, B=0 → SVG (90, 120)
    line: { x1: 10, y1: 40, x2: 120, y2: 150 },
  },
  {
    name: "XOR",
    points: [
      { a: 0, b: 0, out: 0 },
      { a: 1, b: 0, out: 1 },
      { a: 0, b: 1, out: 1 },
      { a: 1, b: 1, out: 0 },
    ],
    // No separating line possible
  },
];

function toSvgX(a: number) {
  return 40 + a * 100;
}

function toSvgY(b: number) {
  return 120 - b * 100;
}

function GatePlotSvg({ gate, id }: { gate: GatePlot; id: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        viewBox="0 0 160 155"
        className="w-32 md:w-40"
        aria-label={`${gate.name} input space`}
      >
        <defs>
          <clipPath id={`clip-${id}`}>
            <rect x={40} y={20} width={100} height={100} />
          </clipPath>
        </defs>

        {/* Axes */}
        <line
          x1={40}
          y1={20}
          x2={40}
          y2={120}
          stroke="#cbd5e1"
          strokeWidth={1}
        />
        <line
          x1={40}
          y1={120}
          x2={140}
          y2={120}
          stroke="#cbd5e1"
          strokeWidth={1}
        />

        {/* X-axis ticks + labels */}
        <line
          x1={40}
          y1={120}
          x2={40}
          y2={126}
          stroke="#cbd5e1"
          strokeWidth={1}
        />
        <text x={40} y={138} textAnchor="middle" fontSize={10} fill="#94a3b8">
          0
        </text>
        <line
          x1={140}
          y1={120}
          x2={140}
          y2={126}
          stroke="#cbd5e1"
          strokeWidth={1}
        />
        <text x={140} y={138} textAnchor="middle" fontSize={10} fill="#94a3b8">
          1
        </text>

        {/* Y-axis ticks + labels */}
        <line
          x1={34}
          y1={120}
          x2={40}
          y2={120}
          stroke="#cbd5e1"
          strokeWidth={1}
        />
        <text x={28} y={124} textAnchor="middle" fontSize={10} fill="#94a3b8">
          0
        </text>
        <line
          x1={34}
          y1={20}
          x2={40}
          y2={20}
          stroke="#cbd5e1"
          strokeWidth={1}
        />
        <text x={28} y={24} textAnchor="middle" fontSize={10} fill="#94a3b8">
          1
        </text>

        {/* Axis labels */}
        <text x={90} y={152} textAnchor="middle" fontSize={11} fill="#64748b">
          A
        </text>
        <text x={14} y={72} textAnchor="middle" fontSize={11} fill="#64748b">
          B
        </text>

        {/* Separating line (clipped to plot area) */}
        {gate.line && (
          <line
            x1={gate.line.x1}
            y1={gate.line.y1}
            x2={gate.line.x2}
            y2={gate.line.y2}
            stroke="#94a3b8"
            strokeWidth={1.5}
            strokeDasharray="6 3"
            clipPath={`url(#clip-${id})`}
          />
        )}

        {/* "Not linearly separable" label for XOR */}
        {!gate.line && (
          <text
            x={90}
            y={74}
            textAnchor="middle"
            fontSize={9}
            fill="#94a3b8"
            fontStyle="italic"
          >
            not linearly separable
          </text>
        )}

        {/* Points — rendered last so they sit above the line */}
        {gate.points.map(({ a, b, out }) => (
          <circle
            key={`${a}${b}`}
            cx={toSvgX(a)}
            cy={toSvgY(b)}
            r={6}
            fill={out === 1 ? "#4f46e5" : "white"}
            stroke={out === 1 ? "#4f46e5" : "#94a3b8"}
            strokeWidth={2}
          />
        ))}
      </svg>
      <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
        {gate.name}
      </span>
    </div>
  );
}

export default function SeparabilityPlots() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8">
      {GATES.map((gate) => (
        <GatePlotSvg key={gate.name} gate={gate} id={gate.name.toLowerCase()} />
      ))}
      <div className="flex w-full flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
        <span className="flex items-center gap-2">
          <svg width={14} height={14}>
            <circle cx={7} cy={7} r={6} fill="#4f46e5" />
          </svg>
          output = 1
        </span>
        <span className="flex items-center gap-2">
          <svg width={14} height={14}>
            <circle
              cx={7}
              cy={7}
              r={6}
              fill="white"
              stroke="#94a3b8"
              strokeWidth={2}
            />
          </svg>
          output = 0
        </span>
        <span className="flex items-center gap-2">
          <svg width={24} height={10}>
            <line
              x1={0}
              y1={5}
              x2={24}
              y2={5}
              stroke="#94a3b8"
              strokeWidth={1.5}
              strokeDasharray="5 3"
            />
          </svg>
          separating boundary
        </span>
      </div>
    </div>
  );
}
