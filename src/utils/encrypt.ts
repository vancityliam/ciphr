/**
 * A function to encrypt a plain text string based on a given cipher alphabet.
 * Currently this uppercases all letters, adds spaces (based on spaces in the plain text) and ignores non-alphabetic symbols.
 * Improvements in the future would be to make this more adaptable to support non-alphabetic symbols and the option to ignore whitespaces.
 * @param inputText Plain text input to be encrypted
 * @param cipherAlphabet Cipher alphabet to be used for the encryption
 * @returns An uppercased string that is encrypted with the given cipher alphabet.
 */
export const encrypt = (inputText: string, cipherAlphabet: string[]) =>
  inputText
    .toUpperCase()
    .split('')
    .map((char) => {
      if (char === ' ') {
        return ' ';
      } else if (/[a-zA-Z]/.test(char)) {
        return cipherAlphabet[char.charCodeAt(0) - 'A'.charCodeAt(0)];
      }
    })
    .join('');
