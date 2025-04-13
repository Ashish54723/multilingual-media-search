export function generateSearchURL(name: string, query: string, lang: string): string {
  const base = 'https://www.google.com/search?q=';
  
  // Map language names to Google's language codes
  const langCodes: {[key: string]: string} = {
    'English': 'en',
    'Mandarin Chinese': 'zh-CN',
    'Spanish': 'es',
    'Hindi': 'hi',
    'Arabic': 'ar',
    'Bengali': 'bn',
    'Portuguese': 'pt',
    'Russian': 'ru',
    'Japanese': 'ja',
    'Punjabi': 'pa',
    'German': 'de',
    'Javanese': 'jw',
    'Wu Chinese': 'zh-CN', // No specific code for Wu Chinese, using standard Chinese
    'Telugu': 'te',
    'Vietnamese': 'vi',
    'Marathi': 'mr',
    'French': 'fr',
    'Korean': 'ko',
    'Tamil': 'ta',
    'Italian': 'it',
    'Turkish': 'tr',
    'Urdu': 'ur',
    'Gujarati': 'gu',
    'Polish': 'pl',
    'Ukrainian': 'uk',
    'Persian': 'fa',
    'Malay': 'ms',
    'Kannada': 'kn',
    'Xiang Chinese': 'zh-CN', // No specific code for Xiang Chinese, using standard Chinese
    'Malayalam': 'ml',
    'Sundanese': 'su',
    'Hausa': 'ha',
    'Odia': 'or',
    'Burmese': 'my',
    'Hakka Chinese': 'zh-CN', // No specific code for Hakka Chinese, using standard Chinese
    'Thai': 'th',
    'Tagalog': 'tl',
    'Romanian': 'ro',
    'Dutch': 'nl',
    'Kazakh': 'kk',
    'Sindhi': 'sd',
    'Amharic': 'am',
    'Yoruba': 'yo',
    'Swahili': 'sw',
    'Maithili': 'mai', // May not be fully supported by Google
    'Uzbek': 'uz',
    'Nepali': 'ne',
    'Sinhala': 'si',
    'Hungarian': 'hu',
    'Greek': 'el'
  };
  
  const langCode = langCodes[lang] || '';
  const langParam = langCode && lang !== 'English' ? `&lr=lang_${langCode}` : '';
  
  return `${base}${encodeURIComponent(name + ' ' + query)}${langParam}`;
}

export function downloadCSV(urls: string[]) {
  if (!urls[0]) return; // Don't download if URL is empty
  
  const csvContent = 'data:text/csv;charset=utf-8,' + urls.map(u => `"${u}"`).join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'search_results.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function copyToClipboard(text: string) {
  if (!text) return; // Don't copy if text is empty
  
  navigator.clipboard.writeText(text).then(() => alert('Copied to clipboard!'));
}
