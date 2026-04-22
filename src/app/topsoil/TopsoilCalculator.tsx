'use client'

import { useState, useMemo } from 'react'

type Settling = 0 | 10 | 15

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

export default function TopsoilCalculator() {
  const [settling, setSettling] = useState<Settling>(10)
  const [dims, setDims] = useState({
    lengthFt: '', lengthIn: '',
    widthFt: '', widthIn: '',
    depthIn: '4',
  })

  const set = (key: keyof typeof dims) => (v: string) => setDims((d) => ({ ...d, [key]: v }))

  const { volFt3, volYd3, volYd3WithSettling } = useMemo(() => {
    const l = parseInches(dims.lengthFt, dims.lengthIn)
    const w = parseInches(dims.widthFt, dims.widthIn)
    const depthFt = (parseFloat(dims.depthIn) || 0) / 12
    const v = l * w * depthFt
    const yd3 = v / 27
    return {
      volFt3: v,
      volYd3: yd3,
      volYd3WithSettling: yd3 * (1 + settling / 100),
    }
  }, [dims, settling])

  const hasInput = volFt3 > 0

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

        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Depth</p>
          <div className="grid grid-cols-2 gap-3 mb-2">
            <NumberInput label="Inches" value={dims.depthIn} onChange={set('depthIn')} placeholder="4" />
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

      {/* Settling allowance */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-1">Settling Allowance</p>
        <p className="text-xs text-gray-400 mb-2">
          Topsoil compacts 10–15% after delivery. Order extra so you end up at your target depth — not short.
        </p>
        <div className="flex gap-2">
          {([0, 10, 15] as Settling[]).map((s) => (
            <button
              key={s}
              onClick={() => setSettling(s)}
              className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
                settling === s
                  ? 'border-brand-600 bg-brand-600 text-white'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-brand-400'
              }`}
            >
              {s === 0 ? 'Exact' : `+${s}%`}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {hasInput ? (
        <div className="grid grid-cols-3 gap-3">
          <ResultCard label="Cubic Feet" value={volFt3.toFixed(2)} sub="ft³" />
          <ResultCard label="Cubic Yards" value={volYd3.toFixed(2)} sub="no settling" />
          <ResultCard
            label="Order This Much"
            value={volYd3WithSettling.toFixed(2)}
            sub={settling > 0 ? `yd³ (+${settling}% settling)` : 'yd³'}
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
