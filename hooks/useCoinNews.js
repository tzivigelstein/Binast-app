import { useEffect, useState } from 'react'

const useCoinNews = id => {
  const [coinNews, setCoinNews] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async currencyId => {
    if (loading) return
    setLoading(true)
    const apiToken = 'a78e43bd00d7e7e364226e3caa1202155050e808'

    const url = `https://cryptopanic.com/api/v1/posts/?auth_token=${apiToken}&currencies=${currencyId}`

    try {
      const query = await fetch(url)
      const data = await query.json()
      const { results } = await data

      const parsedData = results.map(({ source, title, published_at, id, url }) => ({
        source,
        title,
        published_at,
        id,
        url,
      }))
      console.log({ url })

      setCoinNews(parsedData)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return [coinNews, getData]
}

export default useCoinNews
