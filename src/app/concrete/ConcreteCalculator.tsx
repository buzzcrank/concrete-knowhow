'use client'

import { useState, useMemo } from 'react'

type Shape = 'rectangular' | 'round'
type Waste = 0 | 5 | 10

function parseInches(feet: string, inches: string): number {
  return (parseFloat(feet) || 0) + (parseFloat(inches) || 0) / 12
}

function calcVolume(shape: Shape, dims: {
  lengthFt: string; lengthIn: string
  widthFt: string; widthIn: string
  diamFt: string; diamIn: string
  thickIn: string
}): number {
  const thickFt = (parseFloat(dims.thickIn) || 0) / 12
  if (shape === 'rectangular') {
    const l = parseInches(dims.lengthFt, dims.lengthIn)
    const w = parseInches(dims.widthFt, dims.widthIn)
    return l * w * thickFt
  } else {
    const d = parseInches(dims.diamFt, dims.diamIn)
    return Math.PI * Math.pow(d / 2, 2) * thickFt
  }
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
  label, value, onChange, placeholder = '0', min = '0',
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; min?: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-gray-500">{label}</label>
      <input
        type="number"
        min={min}
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
        <NumberInput label="Inches" value={inValue} onChange={onInChange} placeholder="0" />
      </div>
    </div>
  )
}

const THICK_PRESETS = ['3.5', '4', '6', '8']

export default function ConcreteCalculator() {
  const [shape, setShape] = useState<Shape>('rectangular')
  const [waste, setWaste] = useState<Waste>(0)
  const [dims, setDims] = useState({
    lengthFt: '', lengthIn: '',
    widthFt: '', widthIn: '',
    diamFt: '', diamIn: '',
    thickIn: '4',
  })

  const set = (key: keyof typeof dims) => (v: string) => setDims((d) => ({ ...d, [key]: v }))

  const { volFt3, volYd3, bags60, bags80, readyMixAdvised } = useMemo(() => {
    const base = calcVolume(shape, dims)
    const multiplier = 1 + waste / 100
    const v = base * multiplier
    const yd3 = v / 27
    return {
      volFt3: v,
      volYd3: yd3,
      bags60: Math.ceil(v / 0.45),
      bags80: Math.ceil(v / 0.60),
      readyMixAdvised: yd3 > 1,
    }
  }, [shape, waste, dims])

  const hasInput = volFt3 > 0

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
      {/* Shape toggle */}
      <div className="flex gap-2 mb-6">
        {(['rectangular', 'round'] as Shape[]).map((s) => (
          <button
            key={s}
            onClick={() => setShape(s)}
            className={`flex-1 rounded-lg border py-2 text-sm font-semibold capitalize transition-colors ${
              shape === s
                ? 'border-brand-600 bg-brand-600 text-white'
                : 'border-gray-300 bg-white text-gray-700 hover:border-brand-400'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Dimensions */}
      <div className="grid gap-5 sm:grid-cols-2 mb-6">
        {shape === 'rectangular' ? (
          <>
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
          </>
        ) : (
          <FtInInput
            label="Diameter"
            ftValue={dims.diamFt} inValue={dims.diamIn}
            onFtChange={set('diamFt')} onInChange={set('diamIn')}
          />
        )}

        {/* Thickness */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Thickness</p>
          <div className="grid grid-cols-2 gap-3 mb-2">
            <NumberInput label="Inches" value={dims.thickIn} onChange={set('thickIn')} placeholder="4" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {THICK_PRESETS.map((p) => (
              <button
                key={p}
                onClick={() => set('thickIn')(p)}
                className={`rounded px-2 py-1 text-xs font-medium border transition-colors ${
                  dims.thickIn === p
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
        <p className="text-xs text-gray-400 mb-2">Extra to cover spills, uneven forms, and short pours. Most pros add 5–10%.</p>
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
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-4">
            <ResultCard
              label="60 lb Bags"
              value={bags60.toLocaleString()}
              sub="buying bags at the store"
            />
            <ResultCard
              label="80 lb Bags"
              value={bags80.toLocaleString()}
              sub="buying bags at the store"
            />
            <ResultCard
              label="Cubic Yards"
              value={volYd3.toFixed(2)}
              sub="for ready-mix delivery"
            />
            <ResultCard
              label="Cubic Feet"
              value={volFt3.toFixed(2)}
              sub="total volume"
            />
          </div>
          {readyMixAdvised && (
            <div className="rounded-lg border border-brand-300 bg-brand-50 px-4 py-3 text-sm text-brand-800">
              <strong>Tip:</strong> At {volYd3.toFixed(2)} yd³, ready-mix concrete delivery is
              typically more economical than bags. Get quotes from local suppliers.
            </div>
          )}
        </>
      ) : (
        <div className="rounded-lg border border-gray-200 bg-white px-4 py-8 text-center text-sm text-gray-400">
          Enter dimensions above to see results
        </div>
      )}
    </div>
  )
}
