'use client';

import { useState } from 'react';
import QueryBuilder from './QueryBuilder';
import LanguageSelector from './LanguageSelector';
import { generateSearchURL, downloadCSV, copyToClipboard } from '../lib/utils';

export default function Home() {
  const [query, setQuery] = useState('');
  const [name, setName] = useState('');
  const [lang, setLang] = useState('English');
  const [searchURL, setSearchURL] = useState('');

  const handleSearch = () => {
    const url = generateSearchURL(name, query, lang);
    setSearchURL(url);
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen p-6 bg-surface text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Open Media String Search</h1>

        <LanguageSelector setLang={setLang} />

        <input
          type="text"
          placeholder="Enter Name or Entity..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 rounded-xl shadow-inner"
        />

        <QueryBuilder setQuery={setQuery} />

        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSearch}
            disabled={!name && !query}
            className={`flex-1 bg-surface px-4 py-2 rounded-xl shadow hover:shadow-inner ${(!name && !query) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Search on Google
          </button>
          <button
            onClick={() => copyToClipboard(searchURL)}
            disabled={!searchURL}
            className={`flex-1 bg-surface px-4 py-2 rounded-xl shadow hover:shadow-inner ${!searchURL ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Copy URL
          </button>
          <button
            onClick={() => downloadCSV([searchURL])}
            disabled={!searchURL}
            className={`flex-1 bg-surface px-4 py-2 rounded-xl shadow hover:shadow-inner ${!searchURL ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Download CSV
          </button>
        </div>
      </div>
    </div>
  );
}
