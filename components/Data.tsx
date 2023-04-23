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
    <div>
      <DataRaw header="alpha" results={alpha} />
      <DataRaw header="comparisons" results={comparisons} />
      <DataRaw header="data" results={data} />
      <DataRaw header="prepositions" results={prepositions} />
      <DataRaw header="price" results={price} />
      <DataRaw header="questions" results={questions} />
      <DataRaw header="top" results={top} />
    </div>
  )
}