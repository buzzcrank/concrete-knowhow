export default function PageMeta({
  lastUpdated,
  readingTime,
  author = 'Concrete Knowhow Editorial Team',
}: {
  lastUpdated: string
  readingTime: string
  author?: string
}) {
  return (
    <p className="mt-2 text-sm text-gray-500">
      By {author} &middot; Updated {lastUpdated} &middot; {readingTime} read
    </p>
  )
}
