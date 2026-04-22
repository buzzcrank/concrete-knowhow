export default function QuickAnswer({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-brand-600 bg-brand-50 px-5 py-4">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-700 mb-1">
        Quick Answer
      </p>
      <div className="text-gray-800 text-base leading-relaxed">{children}</div>
    </div>
  )
}
