'use client';

import { useEffect } from 'react';

/**
 * Error Boundary component for catching runtime errors within the Next.js app router.
 * @param {Object} props - The component props.
 * @param {Error & { digest?: string }} props.error - The error object caught by Next.js.
 * @param {() => void} props.reset - Function to attempt to recover by re-rendering the segment.
 * @returns {JSX.Element} The rendered error fallback UI.
 */
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('App Error Boundary caught an error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 font-sans z-50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black pointer-events-none" />

      <div className="max-w-lg w-full bg-gray-900/80 backdrop-blur-md border border-red-500/50 rounded-xl p-8 shadow-[0_0_30px_rgba(239,68,68,0.2)] relative z-10">
        <div className="flex items-center space-x-3 mb-6">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          <h2 className="text-2xl font-bold text-red-400 tracking-wider">SYSTEM_ERROR</h2>
        </div>

        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
          The planetary simulation encountered an unexpected anomaly.
          Our engineers have been notified.
        </p>

        <div className="bg-black/50 p-4 rounded-lg text-xs text-red-300/80 overflow-auto max-h-40 mb-8 font-mono border border-red-500/20">
          <p className="font-bold text-red-400 mb-1">Error Trace:</p>
          {error.message || 'Unknown anomaly detected in space-time continuum.'}
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => reset()}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex justify-center items-center group"
          >
            <span>REINITIALIZE_SYSTEM</span>
            <svg className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
