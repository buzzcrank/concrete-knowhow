'use client'
import { useState, useEffect } from 'react'

export default function EmailLink({ label }: { label: string }) {
  const [href, setHref] = useState<string | null>(null)

  useEffect(() => {
    setHref('mailto:' + ['hello', 'mrknowitall.net'].join('@'))
  }, [])

  if (!href) return <span>{label}</span>
  return (
    <a href={href} className="text-brand-600 hover:underline font-medium">
      {label}
    </a>
  )
}
