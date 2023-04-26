import { useState } from 'react'
import Data, { Data as DataType } from '../components/Data';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('What are you searcing for?');
  const [data, setData] = useState(null);

  return (
    <>
      <header className="under-border">John&apos;s Keyword Tool</header>
      <nav>
        <div>
          <h1 className="underline">Generate keyword ideas</h1>
          <p>Try entering a keyword or phrase related to your business or industry and explore the insights that the site provides. By understanding the questions and concerns of your audience, you can create content that is more relevant, valuable, and engaging. So go ahead and give it a try – you might just discover new opportunities to connect with your audience and drive more traffic to your website.</p>
        </div>
        <div className="search-form">
          <form onSubmit={e => e.preventDefault()}>
            

            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              />
            <button
              type="submit"
              placeholder="What are you searching for?"
              onClick={() => {
                setData(null);
                setIsLoading(true);
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
            >Generate Keywords</button>
            
          </form>
        </div>
      </nav>
      {isLoading && <h2>Is Loading....</h2>}
      {
        data && (
          <main>
            <Data data={data as DataType} />
          </main>
        )
      }
    </>
  )
}
