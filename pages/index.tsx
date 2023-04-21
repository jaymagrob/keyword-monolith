import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <h1>Hello</h1>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        onClick={() => {
          setIsLoading(true)
          fetch(`/api/google?keyword=${keyword}&country=us&language=en`, {
            method: 'GET',
            headers: {
              // "Content-Type": "application/json",
            },
          })
            .then(i => i.json())
            .then(i => console.log(i))
            .finally(() => setIsLoading(false))
          }
        }
      >click</button>
      {isLoading && <h2>Is Loading....</h2>}
    </>
  )
}
