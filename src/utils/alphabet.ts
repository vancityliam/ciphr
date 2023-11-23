import { alphabet } from '@/constants/alphabet';

export const shiftBy = (shift: number) => {
  const alphabetLength = alphabet.length;
  const result: string[] = Array(alphabetLength);

  for (let i = 0; i < alphabetLength; i++) {
    const char = alphabet.charAt(i);
    const newPosition = i + shift;
    if (newPosition >= alphabetLength) {
      result[Math.abs(alphabetLength - Math.abs(i + shift))] = char;
    } else {
      result[newPosition] = char;
    }
  }

  return result;
};
