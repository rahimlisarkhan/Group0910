export function shortenText(text, length = 100) {
  if (typeof text !== 'string') return ''; // Handle non-string values
  if (!text) return '';
  return text.length > length
    ? text.slice(0, length).trim() + '...' // Account for the length of "..."
    : text;
}
