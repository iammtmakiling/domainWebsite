import { useState } from 'react';

const useResetData = (resetFunction) => {
  const [resetting, setResetting] = useState(false);

  const handleReset = async () => {
    setResetting(true);
    await resetFunction(); 
    setResetting(false);
  };

  return {
    resetting,
    handleReset,
  };
};

export default useResetData;
