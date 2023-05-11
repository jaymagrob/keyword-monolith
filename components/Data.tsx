import DataRaw from './DataRow';

type Result = {
  key: string;
  data: string[];
}

export type Data = {
  alpha: Result[];
  comparisons: Result[];
  data: Result[];
  prepositions: Result[];
  price: Result[];
  questions: Result[];
  top: Result[];
}

export default function Data(props: { data: Data | null }) {
  if (!props.data) {
    return null;
  }

  const {
    alpha,
    comparisons,
    data,
    prepositions,
    price,
    questions,
    top,
  } = props.data;

  return (
    <>
      <div style={{ position: 'sticky', top: 0 }} className='results-nav'>
        <a href="#alpha">alpha</a>
        <a href="#comparisons">comparisons</a>
        <a href="#data">data</a>
        <a href="#prepositions">prepositions</a>
        <a href="#price">price</a>
        <a href="#questions">questions</a>
        <a href="#top">top</a>
      </div>
      <div className="results-0" onScroll={(e) => console.log('here45454444')}>
        <DataRaw header="alpha" results={alpha} />
        <DataRaw header="comparisons" results={comparisons} />
        <DataRaw header="data" results={data} />
        <DataRaw header="prepositions" results={prepositions} />
        <DataRaw header="price" results={price} />
        <DataRaw header="questions" results={questions} />
        <DataRaw header="top" results={top} />
      </div>
    </>
  )
}