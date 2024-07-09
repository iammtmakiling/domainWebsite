import { useState } from 'react';

/**
 * Custom hook to handle data reset operation.
 * @param {Function} resetFunction - Function to perform data reset asynchronously.
 * @returns {Object} An object containing resetting state and a function to trigger reset.
 */
const useResetData = (resetFunction) => {
  const [resetting, setResetting] = useState(false);

  /**
   * Handles the reset operation asynchronously.
   * Sets `resetting` to true, calls the provided `resetFunction`, and then sets `resetting` to false.
   */
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
