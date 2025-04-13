import { useState, useEffect } from 'react';

interface QueryBuilderProps {
  setQuery: (query: string) => void;
}

export default function QueryBuilder({ setQuery }: QueryBuilderProps) {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');
  const [input, setInput] = useState('');

  const addKeyword = () => {
    if (input.trim()) {
      setKeywords([...keywords, input.trim()]);
      setInput('');
    }
  };

  // Auto-build query whenever inputs change
  useEffect(() => {
    buildQuery();
  }, [keywords, country, type]);

  const buildQuery = () => {
    const keywordPart = keywords.map(k => `"${k}"`).join(' OR ');
    const countryPart = country ? `"${country}"` : '';
    const typePart = type ? `"${type}"` : '';
    const query = [keywordPart, countryPart, typePart].filter(Boolean).join(' AND ');
    setQuery(query);
  };

  return (
    <div className="mt-6 bg-white p-4 rounded-xl shadow-md">
      <h3 className="font-semibold mb-2">Custom Query Builder</h3>

      <div className="flex mb-2 gap-2">
        <input
          type="text"
          placeholder="Add keyword..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-xl shadow-inner"
        />
        <button onClick={addKeyword} className="px-3 py-1 rounded-xl bg-surface shadow">Add</button>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {keywords.map((k, idx) => (
          <span key={idx} className="bg-surface px-3 py-1 rounded-xl shadow-inner text-sm">{k}</span>
        ))}
      </div>

      <input
        type="text"
        placeholder="Country (optional)"
        className="w-full p-2 mb-2 rounded-xl shadow-inner"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <input
        type="text"
        placeholder="Type (e.g., news, blog, report)"
        className="w-full p-2 mb-2 rounded-xl shadow-inner"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
    </div>
  );
}
