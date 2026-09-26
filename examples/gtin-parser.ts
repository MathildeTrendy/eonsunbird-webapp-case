export function extractGtin(value: string): string | null {
  const match = value.match(/\/01\/(\d{14})/)

  return match ? match[1] : null
}
