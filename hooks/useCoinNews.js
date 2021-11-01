import { useEffect, useState } from 'react'
import env from '../enviroment'

const { apiPath, newsApiKey } = env

const newsLimit = 10
const sources = 'news,urls,tweets'

const useCoinNews = id => {
  const [coinNews, setCoinNews] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    id && getCoinNews(id)
  }, [id])

  const getCoinNews = async currencyId => {
    if (loading) return
    setLoading(true)

    const url = `${apiPath}data=feeds&key=${newsApiKey}&symbol=${currencyId}&limit=${newsLimit}&sources=${sources}`

    try {
      const query = await fetch(url)
      const data = await query.json()
      const { data: results } = await data

      const imageUrl =
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa23a3a4-2795-482f-b6e7-ddbfc1d1051a/dc56tup-e0d558a3-f7e5-4068-9259-a981431d9a1b.png/v1/fill/w_1024,h_576,q_80,strp/cryptocurrency___blockchain_wallpaper_for_desktop_by_luvcrypto_dc56tup-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvYWEyM2EzYTQtMjc5NS00ODJmLWI2ZTctZGRiZmMxZDEwNTFhXC9kYzU2dHVwLWUwZDU1OGEzLWY3ZTUtNDA2OC05MjU5LWE5ODE0MzFkOWExYi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.qIvgmoSLsj6TCyNij7I6vaDmZEpZSMzJToQoWPSeHnI'

      const parsedData = results.map(({ id, title, description, publisher, name, url, thumbnail, image, time }) => {
        const date = new Date(time * 1000).toLocaleDateString([], { month: 'long', day: 'numeric' })
        console.log({ thumbnail, image })
        return {
          id,
          title,
          description,
          publisher: publisher || name,
          url,
          thumbnail: thumbnail || image || imageUrl,
          date,
        }
      })

      setCoinNews(parsedData)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return [coinNews, getCoinNews]
}

export default useCoinNews
