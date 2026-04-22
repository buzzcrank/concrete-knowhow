'use client'

import { useState, useMemo } from 'react'

type Waste = 0 | 5 | 10

const MATERIALS = [
  { id: 'crushed', label: 'Crushed Stone / Gravel', density: 1.5 },
  { id: 'pea', label: 'Pea Gravel', density: 1.4 },
  { id: 'river', label: 'River Rock', density: 1.35 },
  { id: 'dg', label: 'Decomposed Granite', density: 1.35 },
  { id: 'lava', label: 'Lava Rock', density: 0.8 },
]

const DEPTH_PRESETS = ['2', '3', '4', '6']

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

export default function GravelCalculator() {
  const [waste, setWaste] = useState<Waste>(0)
  const [materialId, setMaterialId] = useState('crushed')
  const [dims, setDims] = useState({
    lengthFt: '', lengthIn: '',
    widthFt: '', widthIn: '',
    depthIn: '3',
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
        <p className="text-sm font-medium text-gray-700 mb-2">Material</p>
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

        {/* Depth */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Depth</p>
          <div className="grid grid-cols-2 gap-3 mb-2">
            <NumberInput label="Inches" value={dims.depthIn} onChange={set('depthIn')} placeholder="3" />
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

      {/* Waste buffer */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Waste Buffer</p>
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
              {w === 0 ? 'None' : `+${w}%`}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {hasInput ? (
        <div className="grid grid-cols-3 gap-3">
          <ResultCard label="Cubic Feet" value={volFt3.toFixed(2)} sub="ft³" />
          <ResultCard label="Cubic Yards" value={volYd3.toFixed(2)} sub="yd³" />
          <ResultCard
            label="Tons"
            value={tons.toFixed(2)}
            sub={`@ ${material.density} t/yd³`}
          />
        </div>
      ) : (
        <div className="rounded-lg border border-gray-200 bg-white px-4 py-8 text-center text-sm text-gray-400">
          Enter dimensions above to see results
        </div>
      )}
    </div>
  )
}
