

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
    <div className="results-1">
      <h2>{header}</h2>
      <div className="results-2">
        {results.map(letter => (
          <div key={letter.key} className="results-3">
            <h3>
              {letter.key}
            </h3>
            <div>
              {letter.data.map(i => <div key={i}>{i}</div>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}