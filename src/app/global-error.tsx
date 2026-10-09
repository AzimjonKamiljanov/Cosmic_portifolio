'use client';

import { useEffect } from 'react';

/**
 * Global Error Boundary component for catching errors in the application layout.
 * @param {Object} props - The component props.
 * @param {Error & { digest?: string }} props.error - The error object.
 * @param {() => void} props.reset - Function to attempt to recover from the error.
 * @returns {JSX.Element} The rendered error UI.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Error Boundary caught an error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
          <div className="max-w-md w-full bg-gray-900 border border-red-500 rounded-lg p-6 shadow-2xl">
            <h2 className="text-2xl font-bold text-red-500 mb-4 font-mono">CRITICAL_SYSTEM_FAILURE</h2>
            <p className="text-gray-300 mb-6 text-sm">
              An unexpected error occurred in the global layout.
            </p>
            <div className="bg-black p-3 rounded text-xs text-red-400 overflow-auto max-h-32 mb-6 font-mono">
              {error.message || 'Unknown error'}
            </div>
            <button
              onClick={() => reset()}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              REBOOT_SYSTEM
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
