import { shortenText } from '../utils/shortText';

describe('shortenText utility', () => {
  it('should shorten text to the specified length', () => {
    const text = 'This is a very long text that should be shortened.';
    expect(shortenText(text, 20)).toBe('This is a very long...');
  });

  it("should return the original text if it's shorter than the specified length", () => {
    const text = 'Short text';
    expect(shortenText(text, 20)).toBe('Short text');
  });

  it('should handle empty strings', () => {
    expect(shortenText('', 20)).toBe('');
  });

  it('should handle undefined or null input', () => {
    expect(shortenText(null, 20)).toBe('');
    expect(shortenText(undefined, 20)).toBe('');
  });
});
