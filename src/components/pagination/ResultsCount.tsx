import { useJobItemsContext } from "../../lib/hooks";

export default function ResultsCount() {
  const { totalNumberOfJobs } = useJobItemsContext();
  return (
    <p className="count">
      <span className="u-bold">{totalNumberOfJobs}</span> results
    </p>
  );
}
