

type Result = {
  key: string;
  data: string[];
}


type Props = {
  header: string;
  results: Result[]
}

export default function DataRow(props: Props) {
  const {
    header,
    results,
  } = props;

  return (
    <div>
      <h1>{header}</h1>
      <div>
        {results.map(letter => (
          <div key={letter.key}>
            <h2>
              {letter.key}
            </h2>
            <div>
              {letter.data.map(i => <div key={i}>{i}</div>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}