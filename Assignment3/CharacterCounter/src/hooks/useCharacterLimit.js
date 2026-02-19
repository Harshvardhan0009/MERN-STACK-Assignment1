import { useEffect } from 'react';

const useCharacterLimit = (text, maxLength, onWarning) => {
  useEffect(() => {
    const remaining = maxLength - text.length;
    if (remaining <= 10 && remaining >= 0) {
      onWarning(true);
    } else {
      onWarning(false);
    }
  }, [text, maxLength, onWarning]);
};

export default useCharacterLimit;
