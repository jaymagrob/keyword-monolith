import { useState } from 'react'
import Data, { Data as DataType } from '../components/Data';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState(null);

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
            .then((i) => {
              setData(i)
              console.log(i)
            })
            .finally(() => setIsLoading(false))
        }
        }
      >click</button>
      {isLoading && <h2>Is Loading....</h2>}
      {data && (
        <main>
          <Data data={data as DataType}/>
        </main>
      )}
    </>
  )
}
