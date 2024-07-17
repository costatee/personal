import React, { useState } from 'react';

const CopyButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('attila@attilaszepe.com');
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <button onClick={copyToClipboard} className="mr-auto min-w-[7rem] text-[1.1rem] bg-gray-100 py-1.5 rounded-2xl border-2 border-gray-200 shadow-md active:border-gray-500 hover:bg-gray-200"> 
      {isCopied ? 'Copied!' : 'Copy Text'}
    </button>
  );
};

export default CopyButton;