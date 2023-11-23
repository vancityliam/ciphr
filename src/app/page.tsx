'use client';

import { Input } from '@/components';
import { alphabetArray } from '@/constants/alphabet';
import { shiftBy } from '@/utils/alphabet';
import { encrypt } from '@/utils/encrypt';
import { useState } from 'react';

export default function Home() {
  const [shift, setShift] = useState(1);
  const [cipherAlphabet, setCipherAlphabet] = useState(shiftBy(shift));
  const [encryptedInput, setEncryptedInput] = useState('');
  const [originalInput, setOriginalInput] = useState<string>();

  const handleShiftChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const shiftVal = parseInt(target.value);

    setShift(shiftVal);
    setCipherAlphabet(shiftBy(shiftVal));

    if (originalInput) {
      setEncryptedInput(encrypt(originalInput, shiftBy(shiftVal)));
    }
  };

  const handleInputTextChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const plainTextInput = target.value;

    setOriginalInput(plainTextInput);
    setEncryptedInput(encrypt(plainTextInput, cipherAlphabet));
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-10 p-24">
      <div className="w-full items-center font-mono text-sm flex gap-x-4">
        <Input
          label="Input Text"
          onChange={handleInputTextChange}
          required={true}
          pattern={'/^[a-zA-Z]*$gi/'}
        />
        <Input type="number" label="Shift" value={shift} onChange={handleShiftChange} />
      </div>

      <div className="flex flex-col w-full gap-y-8">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] w-full justify-between flex-col gap-y-2">
          <h2 className="w-full">Plain Text Alphabet</h2>
          <div className="flex justify-between w-full">
            {alphabetArray.map((char) => (
              <p key={char}>{char}</p>
            ))}
          </div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] w-full justify-between flex-col gap-y-2">
          <h2 className="w-full">Cipher Alphabet</h2>
          <div className="flex justify-between w-full">
            {cipherAlphabet.map((char) => (
              <p key={char}>{char}</p>
            ))}
          </div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] w-full justify-between flex-col gap-y-2">
          <h2 className="w-full">Encrypted Output</h2>
          <span>{encryptedInput}</span>
        </div>
      </div>
    </main>
  );
}
