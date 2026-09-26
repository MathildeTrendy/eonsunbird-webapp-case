export async function fetchProduct(gtin: string) {
  const response = await fetch(`/api/products/${gtin}`)

  if (!response.ok) {
    throw new Error('Product could not be loaded')
  }

  return response.json()
}
