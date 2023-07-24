export async function getGuitarras() {
  const res = await fetch(`${process.env.API_URL}/guitars?populate=image`)
  return await res.json()
}

export async function getGuitarra(url) {
  const res = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
  return await res.json()
}