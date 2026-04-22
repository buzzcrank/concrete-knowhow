export default function AdSlot({ id = 'ad-slot' }: { id?: string }) {
  return (
    <div
      id={id}
      className="my-8 flex items-center justify-center rounded bg-gray-100 text-xs text-gray-400"
      style={{ minHeight: 280 }}
      aria-label="Advertisement"
    >
      Advertisement
    </div>
  )
}
