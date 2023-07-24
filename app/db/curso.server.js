export async function getCurso() {
  const res = await fetch(`${process.env.API_URL}/course?populate=image`)
  return await res.json()
}