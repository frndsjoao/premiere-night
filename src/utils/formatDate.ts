export function formatDate(dateString: string): string {
  const date = new Date(dateString)

  const formatted = date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  return formatted
}

export function getYear(dateString: string): number {
  const date = new Date(dateString)
  const year = date.getFullYear()

  return year
}
