import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const AnalyzeResults = ({ results, setResults, setResultsError }) => {
  const { t } = useTranslation();
  const cleanResults = () => {
    const tableBody = document.getElementById('results-table-body');
    const trElements = tableBody.querySelectorAll('tr');
    if (trElements.length > 0) {
      setResults([]);
    } else {
      setResultsError(true);
    }
  }

  return (
    <div className='flex flex-col gap-3'>
      <span>{t("analyze_results")}</span>
      <table id="results-table" className='w-full border border-slate-400'>
        <thead className='bg-slate-400'>
          <tr>
            <th>{t("labels")}</th>
            <th>{t("confidence")}</th>
          </tr>
        </thead>
        <tbody id='results-table-body' className='text-center'>
          {results.metrics && results.metrics.length > 0 && results.metrics.map((result, index) => (
            <tr key={index}>
              <td>{result.description}</td>
              <td>{result.confidenceLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-end'>
        <button onClick={cleanResults} type='button' className='p-2 border border-slate-400 rounded-lg hover:bg-slate-400'>
          {t("clean_results")}
        </button>
      </div>
    </div>
  );
}

export default AnalyzeResults;