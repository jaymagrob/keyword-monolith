import { motion } from "framer-motion";

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
    <div id={header} className="results-1">
      <h2>{header}</h2>
      <div className="results-2">
        {!results.length && "No data available"}
        {results.map(letter => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            key={letter.key}
          >
            <div key={letter.key} className="results-3">
              <h3>
                {letter.key || "Data"}
              </h3>
              <div>
                {!letter.data.length && "No data available"}
                {letter.data.map(i => <div key={i}>{i}</div>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}