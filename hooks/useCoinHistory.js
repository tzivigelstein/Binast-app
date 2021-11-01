import { useState, useEffect } from 'react'

const useCoinHistory = id => {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    id && getChartData(id)
  }, [id])

  const getChartData = async (id = 'BTC') => {
    const oneYear = 365
    const url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${id}&tsym=USD&limit=${oneYear}`

    try {
      const query = await fetch(url)
      const data = await query.json()
      const res = await data.Data.Data

      setChartData(
        res.map(({ close, time }) => ({
          x: time,
          y: close,
        }))
      )
    } catch (error) {
      console.log(error)
    }
  }
  return chartData
}

export default useCoinHistory
