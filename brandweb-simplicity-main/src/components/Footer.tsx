
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Your<span className="text-blue-400">Brand</span></h3>
            <p className="text-gray-300 mb-6">
              Empowering businesses to achieve their full potential through innovative solutions and strategic partnerships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-blue-400 transition-colors">Our Team</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Business Strategy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">UX/UI Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Product Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Team Building</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Mobile Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-gray-800 text-gray-200 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-4">By subscribing you agree to our Privacy Policy.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {currentYear} YourBrand. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
