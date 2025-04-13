const languages = [
  'English',
  'Mandarin Chinese',
  'Spanish',
  'Hindi',
  'Arabic',
  'Bengali',
  'Portuguese',
  'Russian',
  'Japanese',
  'Punjabi',
  'German',
  'Javanese',
  'Wu Chinese',
  'Telugu',
  'Vietnamese',
  'Marathi',
  'French',
  'Korean',
  'Tamil',
  'Italian',
  'Turkish',
  'Urdu',
  'Gujarati',
  'Polish',
  'Ukrainian',
  'Persian',
  'Malay',
  'Kannada',
  'Xiang Chinese',
  'Malayalam',
  'Sundanese',
  'Hausa',
  'Odia',
  'Burmese',
  'Hakka Chinese',
  'Thai',
  'Tagalog',
  'Romanian',
  'Dutch',
  'Kazakh',
  'Sindhi',
  'Amharic',
  'Yoruba',
  'Swahili',
  'Maithili',
  'Uzbek',
  'Nepali',
  'Sinhala',
  'Hungarian',
  'Greek'
];

export default function LanguageSelector({ setLang }: { setLang: (lang: string) => void }) {
  return (
    <div className="mb-4">
      <select
        onChange={(e) => setLang(e.target.value)}
        className="w-full p-2 rounded-xl shadow-inner"
      >
        <option value="English">English (Default)</option>
        {languages.filter(lang => lang !== 'English').map(lang => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
    </div>
  );
}
