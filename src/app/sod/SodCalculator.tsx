'use client'

import { useState, useMemo } from 'react'

type Waste = 0 | 5 | 10

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

export default function SodCalculator() {
  const [waste, setWaste] = useState<Waste>(5)
  const [dims, setDims] = useState({
    lengthFt: '', lengthIn: '',
    widthFt: '', widthIn: '',
  })

  const set = (key: keyof typeof dims) => (v: string) => setDims((d) => ({ ...d, [key]: v }))

  const { areaSqFt, areaWithWaste, rolls, pallets } = useMemo(() => {
    const l = parseInches(dims.lengthFt, dims.lengthIn)
    const w = parseInches(dims.widthFt, dims.widthIn)
    const area = l * w
    const areaW = area * (1 + waste / 100)
    return {
      areaSqFt: area,
      areaWithWaste: areaW,
      rolls: Math.ceil(areaW / 10),
      pallets: Math.ceil(areaW / 450),
    }
  }, [dims, waste])

  const hasInput = areaSqFt > 0

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
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
      </div>

      {/* Waste buffer */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-1">Waste Buffer</p>
        <p className="text-xs text-gray-400 mb-2">
          Cut pieces add up fast. Add 5% for straight rectangular lawns; 10% for curved or irregular edges.
        </p>
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
            <ResultCard label="Rolls" value={rolls.toLocaleString()} sub="buying by the roll" />
            <ResultCard label="Pallets" value={pallets.toLocaleString()} sub="bulk order (450 sq ft each)" />
            <ResultCard label="Area" value={areaSqFt.toFixed(0)} sub="sq ft measured" />
            <ResultCard
              label="With Overage"
              value={areaWithWaste.toFixed(0)}
              sub={waste > 0 ? `sq ft (+${waste}%)` : 'sq ft (exact)'}
            />
          </div>
          {pallets >= 2 && (
            <div className="rounded-lg border border-brand-300 bg-brand-50 px-4 py-3 text-sm text-brand-800">
              <strong>Tip:</strong> At {pallets} pallets, ask your supplier about pallet pricing — it&apos;s
              often cheaper per sq ft than ordering by the roll.
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
