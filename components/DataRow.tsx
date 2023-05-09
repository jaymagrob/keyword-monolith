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

  const cardVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  return (
    <div id={header} className="results-1">
      <h2>{header}</h2>
      <div className="results-2">
        {!results.length && "No data available"}
        {results.map(letter => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            key={letter.key}
          >
            <motion.div className="card" variants={cardVariants}>
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
          </motion.div>
        ))}
      </div>
    </div>
  )
}