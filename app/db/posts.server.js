export async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/posts?populate=image`)
  return res.json()
}

export async function getPost(url) {
  const res = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
  return res.json()
}