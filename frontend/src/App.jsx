import './App.css';
import './index.css';
import LanguageSwitcher from './components/LanguageSwitcher';
import Dropzone from './components/Dropzone';
import Parameters from './components/Parameters';
import AnalyzeButton from './components/AnalyzeButton';
import AnalyzeResults from './components/AnalyzeResults';
import { useState } from 'react';
import { createServer } from 'miragejs';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  createServer({
    routes() {
      this.post('/api/mock', () => {
        return {
          metrics: [
            {
              description: 'Test',
              confidenceLevel: 100
            },
            {
              description: 'Test 2',
              confidenceLevel: 98
            },
            {
              description: 'Test 3',
              confidenceLevel: 19
            },
            {
              description: 'Test 4',
              confidenceLevel: 40
            },
            {
              description: 'Test 5',
              confidenceLevel: 52
            },
            {
              description: 'Test 6',
              confidenceLevel: 99
            },
            {
              description: 'Test 7',
              confidenceLevel: 11
            },
            {
              description: 'Test 8',
              confidenceLevel: 75
            },
            {
              description: 'Test 9',
              confidenceLevel: 58
            },
            {
              description: 'Test 10',
              confidenceLevel: 100
            }
          ]
        };
      });
    }
  });
  const [results, setResults] = useState([]);
  const [imageError, setImageError] = useState(false);
  const [resultsError, setResultsError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();

  function analyze(event) {
    event.preventDefault();
    console.log(selectedImage);
    if (!selectedImage) {
      setImageError(true);
      return;
    }
    const maxLabels = document.getElementById('max-labels-input').value;
    const minConfidence = document.getElementById('min-confidence-input').value;

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('maxLabels', maxLabels);
    formData.append('minConfidence', minConfidence);

    fetch('/api/mock', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        setResults(data);
        setResultsError(false);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <header className='flex flex-row justify-end p-4 top-0 sticky'>
        <LanguageSwitcher />
      </header>
      <main className='flex flex-col items-center mx-auto w-2/3 my-10'>
        <form id='formAnalyze' onSubmit={analyze} className='flex flex-col w-full gap-12'>
          <Dropzone setImage={setSelectedImage} setImageError={setImageError} />
          {imageError && <p className='text-red-500 -mt-6'>{t('no_file_error')}</p>}
          <Parameters />
          <AnalyzeButton />
          <div className='border w-full opacity-50'></div>
          <AnalyzeResults results={results} setResults={setResults} setResultsError={setResultsError} />
          {resultsError && <p className='text-red-500 -mt-6'>{t('no_results_error')}</p>}
        </form>
      </main>
    </>
  );
}

export default App;
