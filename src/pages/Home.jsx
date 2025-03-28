// import React from 'react'
// import logo from '../assets/logo1.png'
// import img1 from '../assets/img1.png'
// import img3 from '../assets/img3.png'
// import img2 from '../assets/img2.png'
// import img4 from '../assets/img4.png'
// import { Link } from 'react-router'


// const Home = () => {

  
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center justify-center">
    
      

//       <section className="flex flex-col md:flex-row items-center max-w-6xl mt-12 px-6">

//         <div className="md:w-1/2 text-center md:text-left space-y-4 animate-fadeIn">
//           <h1 className="text-4xl font-bold text-blue-700">
//             Credit Card <span className="text-blue-500">Management</span> System
//           </h1>
//           <p className="text-gray-600">
//             Securely manage your credit cards, track transactions, and improve your financial health.
//           </p>
//           <Link to="/login">
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 transition-transform hover:scale-105">
//             Get Started
//           </button>
//           </Link>
//         </div>

//         <div className="md:w-1/2 flex justify-center animate-fadeIn">
//           <img
//             src={img4}
//             alt="Credit Card Management"
//             className="w-80 md:w-full drop-shadow-lg"
//           />
//         </div>
//       </section>

      
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import img4 from '../assets/img4.png';
import health4 from '../assets/health4.jpg'
import secure3img from '../assets/secure3.avif'
import trackimg4 from '../assets/track3.jpg'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center max-w-6xl mt-12 px-6">
        <div className="md:w-1/2 text-center md:text-left space-y-4 animate-fadeIn">
          <h1 className="text-4xl font-bold text-blue-700">
            Credit Card <span className="text-blue-500">Management</span> System
          </h1>
          <p className="text-gray-600">
            Securely manage your credit cards, track transactions, and improve your financial health.
          </p>
          <Link to="/login">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 transition-transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fadeIn">
          <img src={img4} alt="Credit Card Management" className="w-80 md:w-full drop-shadow-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl px-6 mt-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700">Why Choose Us?</h2>
        <p className="text-gray-600 mt-2">Our system helps you manage your credit cards effortlessly.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={secure3img} alt="Secure Management" className="w-28 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-600 mt-4">Secure Management</h3>
            <p className="text-gray-500 mt-2">Your credit card details are encrypted and safe.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={trackimg4} alt="Track Transactions" className="w-28 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-600 mt-4">Track Transactions</h3>
            <p className="text-gray-500 mt-2">View all your transactions in real-time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={health4} alt="Financial Health" className="w-28 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-600 mt-4">Financial Health</h3>
            <p className="text-gray-500 mt-2">Get insights to improve your financial stability.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl px-6 mt-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "This app has made managing my credit cards so easy! Highly recommend."
            </p>
            <h4 className="text-blue-600 mt-4 font-semibold">- Sarah Johnson</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "A lifesaver for tracking my spending and keeping my finances in check."
            </p>
            <h4 className="text-blue-600 mt-4 font-semibold">- Mark Wilson</h4>
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="max-w-6xl px-6 mt-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700">Start Managing Your Credit Cards Today</h2>
        <p className="text-gray-600 mt-2">Join thousands of users who trust our platform.</p>
        <Link to="/register">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 transition-transform hover:scale-105">
            Sign Up Now
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="w-full bg-blue-700 text-white text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Credit Manager. All rights reserved.</p>
      </footer>
      
    </div>
  );
};

export default Home;
