import { FaExclamationCircle, FaRedo } from 'react-icons/fa';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-gray-800/80 border border-red-900/50 rounded-xl shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-4 bg-red-900/20 rounded-full">
          <FaExclamationCircle className="text-red-500 text-4xl" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Oops! Something went wrong</h3>
        <p className="text-gray-400 mb-6">{message || 'Failed to load products. Please try again.'}</p>
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium flex items-center transition-colors duration-200"
        >
          <FaRedo className="mr-2" />
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;