// components/LoadingSpinner.js
export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/1/2">
            <div className="animate-pulse h-8 w-8 bg-blue-600 rounded-full"></div>
          </div>
        </div>
        <p className="mt-4 text-gray-600 animate-pulse">Chargement des photos...</p>
      </div>
    </div>
  );
}