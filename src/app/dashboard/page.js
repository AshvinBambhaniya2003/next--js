'use client';
import { FiUser, FiLogOut, FiLoader } from 'react-icons/fi';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FiUser className="text-gray-600" />
                <span className="text-gray-800">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex items-center space-x-2 px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 disabled:opacity-50"
              >
                {isLoggingOut ? (
                  <FiLoader className="animate-spin" />
                ) : (
                  <FiLogOut />
                )}
                <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800">Welcome, {user.name}!</h2>
              <p className="mt-2 text-gray-600">Your email: {user.email}</p>
            </div>
            
            {/* Add your dashboard content here */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-900">Dashboard Section 1</h3>
                  <p className="mt-2 text-gray-600">Content coming soon...</p>
                </div>
              </div>
              
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-900">Dashboard Section 2</h3>
                  <p className="mt-2 text-gray-600">Content coming soon...</p>
                </div>
              </div>
              
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-900">Dashboard Section 3</h3>
                  <p className="mt-2 text-gray-600">Content coming soon...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
