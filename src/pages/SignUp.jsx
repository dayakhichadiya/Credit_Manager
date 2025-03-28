import React from 'react'

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Credit Card Manager</h1>
        <div>
          <button className="mr-4">Dashboard</button>
          <button>Settings</button>
        </div>
      </nav>
      
      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">My Credit Cards</h2>
          <button className="flex items-center">
            Add Card
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((card) => (
            <div key={card} className="p-4 bg-white shadow rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">Visa Classic</p>
                  <p className="text-gray-600">**** **** **** 1234</p>
                </div>
                <span className="text-blue-500 text-2xl">💳</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default SignUp