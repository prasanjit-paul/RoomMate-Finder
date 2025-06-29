import React from 'react'

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-600 text-lg">
            <p>
              Welcome to Find Your Ideal Room Partner! Our mission is to connect individuals 
              seeking roommates in a safe and friendly environment. We understand that finding 
              the right room partner can be challenging, and we are here to simplify that process.
            </p>
            <p>
              Our platform allows users to create profiles, specify their preferences, and find 
              compatible roommates nearby. We prioritize user safety and provide resources to 
              help you make informed decisions.
            </p>
            <p>
              Join our community today and take the first step towards finding your ideal room partner!
            </p>
          </div>
          
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Section</h2>
            <p className="text-gray-600 text-lg mb-4">Page is under Construction</p>
            <p className="text-gray-500">Till that time, enjoy our service!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog
