export default async (...p) => {
  const args = p[1] || {}

  args.headers = args.headers || {}

  // args.headers.Authorization = 'Bearer 13c6a0337fc642827efe0e6aa67a003bc1dbb'

  p[1] = args

  if (args.nojson === true) return window.fetch(...p)

  else {
    const result = await window.fetch(...p)

    if (result.status === 204) return {}

    return result.json()
  }
}
