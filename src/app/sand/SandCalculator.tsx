'use client'

import { useState, useMemo } from 'react'

type Waste = 0 | 5 | 10

const MATERIALS = [
  { id: 'dry', label: 'Dry Sand', density: 1.35 },
  { id: 'wet', label: 'Wet / Packed Sand', density: 1.68 },
  { id: 'fill', label: 'Fill Sand', density: 1.28 },
  { id: 'mason', label: 'Mason Sand', density: 1.44 },
  { id: 'play', label: 'Play Sand', density: 1.20 },
]

const DEPTH_PRESETS = ['1', '2', '3', '4']

function parseInches(feet: string, inches: string): number {
  return (parseFloat(feet) || 0) + (parseFloat(inches) || 0) / 12
}

function ResultCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-extrabold text-brand-700">{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  )
}

function NumberInput({
  label, value, onChange, placeholder = '0',
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-gray-500">{label}</label>
      <input
        type="number"
        min="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
      />
    </div>
  )
}

function FtInInput({
  label, ftValue, inValue, onFtChange, onInChange,
}: {
  label: string
  ftValue: string; inValue: string
  onFtChange: (v: string) => void; onInChange: (v: string) => void
}) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="grid grid-cols-2 gap-3">
        <NumberInput label="Feet" value={ftValue} onChange={onFtChange} />
        <NumberInput label="Inches" value={inValue} onChange={onInChange} />
      </div>
    </div>
  )
}

export default function SandCalculator() {
  const [waste, setWaste] = useState<Waste>(0)
  const [materialId, setMaterialId] = useState('dry')
  const [dims, setDims] = useState({
    lengthFt: '', lengthIn: '',
    widthFt: '', widthIn: '',
    depthIn: '2',
  })

  const set = (key: keyof typeof dims) => (v: string) => setDims((d) => ({ ...d, [key]: v }))

  const material = MATERIALS.find((m) => m.id === materialId) ?? MATERIALS[0]

  const { volFt3, volYd3, tons } = useMemo(() => {
    const l = parseInches(dims.lengthFt, dims.lengthIn)
    const w = parseInches(dims.widthFt, dims.widthIn)
    const depthFt = (parseFloat(dims.depthIn) || 0) / 12
    const base = l * w * depthFt
    const multiplier = 1 + waste / 100
    const v = base * multiplier
    const yd3 = v / 27
    return {
      volFt3: v,
      volYd3: yd3,
      tons: yd3 * material.density,
    }
  }, [dims, waste, material])

  const hasInput = volFt3 > 0

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
      {/* Material selector */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Sand Type</p>
        <select
          value={materialId}
          onChange={(e) => setMaterialId(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 bg-white"
        >
          {MATERIALS.map((m) => (
            <option key={m.id} value={m.id}>
              {m.label} ({m.density} t/yd³)
            </option>
          ))}
        </select>
      </div>

      {/* Dimensions */}
      <div className="grid gap-5 sm:grid-cols-2 mb-6">
        <FtInInput
          label="Length"
          ftValue={dims.lengthFt} inValue={dims.lengthIn}
          onFtChange={set('lengthFt')} onInChange={set('lengthIn')}
        />
        <FtInInput
          label="Width"
          ftValue={dims.widthFt} inValue={dims.widthIn}
          onFtChange={set('widthFt')} onInChange={set('widthIn')}
        />

        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Depth</p>
          <div className="grid grid-cols-2 gap-3 mb-2">
            <NumberInput label="Inches" value={dims.depthIn} onChange={set('depthIn')} placeholder="2" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {DEPTH_PRESETS.map((p) => (
              <button
                key={p}
                onClick={() => set('depthIn')(p)}
                className={`rounded px-2 py-1 text-xs font-medium border transition-colors ${
                  dims.depthIn === p
                    ? 'border-brand-600 bg-brand-600 text-white'
                    : 'border-gray-300 bg-white text-gray-600 hover:border-brand-400'
                }`}
              >
                {p}&Prime;
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overage */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-1">Overage</p>
        <p className="text-xs text-gray-400 mb-2">Extra for spillage and uneven surfaces. A little leftover is better than running short.</p>
        <div className="flex gap-2">
          {([0, 5, 10] as Waste[]).map((w) => (
            <button
              key={w}
              onClick={() => setWaste(w)}
              className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
                waste === w
                  ? 'border-brand-600 bg-brand-600 text-white'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-brand-400'
              }`}
            >
              {w === 0 ? 'Exact' : `+${w}%`}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {hasInput ? (
        <div className="grid grid-cols-3 gap-3">
          <ResultCard label="Cubic Yards" value={volYd3.toFixed(2)} sub="order by the yard (bulk)" />
          <ResultCard label="Tons" value={tons.toFixed(2)} sub="weight for delivery quotes" />
          <ResultCard label="Cubic Feet" value={volFt3.toFixed(2)} sub="total volume" />
        </div>
      ) : (
        <div className="rounded-lg border border-gray-200 bg-white px-4 py-8 text-center text-sm text-gray-400">
          Enter dimensions above to see results
        </div>
      )}
    </div>
  )
}
