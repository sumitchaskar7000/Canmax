import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="py-10">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl font-bold text-accent mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Canmax
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're dedicated to providing high-quality agricultural products and solutions to help farmers maximize their yields and grow sustainably.
          </motion.p>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, Canmax India began with a simple mission: to help farmers achieve better results through quality products and innovative solutions.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small operation has grown into a trusted provider of agricultural products serving farmers across the country. Our team of experts combines deep agricultural knowledge with a commitment to sustainability.
            </p>
            <p className="text-gray-600">
              Today, we continue to innovate and expand our product line, always with the goal of supporting farmers in their vital work of feeding the world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/canmax_all.png"
              alt="Canmax team in the field"
              className="rounded-lg  w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Vision, Mission & Values Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <h3 className="text-2xl font-bold text-primary">Vision</h3>
              </div>
              <p className="text-gray-600">
                To empower 1 lakh farmers with free Agricultural consultancy and the latest innovations in agricultural biotechnology, fostering sustainable growth in India's farming sector. Our vision extends beyond just providing solutions - we aim to create a sustainable agricultural ecosystem where farmers have access to cutting-edge technology, expert guidance, and a supportive community.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-primary">Mission</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Provide free Agri consultancy to farmers</span>
                    <p className="text-sm mt-1">Our expert team offers personalized guidance on crop management, soil health, and sustainable practices through digital platforms and on-field visits.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Educate farmers on new Agriculture advancements</span>
                    <p className="text-sm mt-1">We conduct regular workshops, webinars, and training programs to keep farmers updated with the latest agricultural technologies and best practices.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Promote sustainable and efficient farming through biotechnology</span>
                    <p className="text-sm mt-1">We develop and promote bio-based solutions that enhance crop yield while reducing environmental impact and input costs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Build a community of informed, biotech-savvy farmers</span>
                    <p className="text-sm mt-1">We foster a collaborative environment where farmers can share knowledge, experiences, and success stories, creating a strong support network.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Values */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-primary">Values</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  We are dedicated to sustainability, innovation, and quality, creating products you can trust. With integrity and ethical sourcing, we support local farmers and prioritize customer satisfaction. We focus on health, resilience, and collaboration for long-term success and growth.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Sustainability</h4>
                    <p className="text-sm">Committed to eco-friendly practices and long-term environmental stewardship</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Innovation</h4>
                    <p className="text-sm">Continuously developing cutting-edge solutions for modern farming challenges</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Quality</h4>
                    <p className="text-sm">Maintaining the highest standards in all our products and services</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Community</h4>
                    <p className="text-sm">Building strong relationships and supporting the farming community</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              "To empower farmers with sustainable solutions that enhance productivity, protect the environment, and ensure food security for future generations."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Constantly developing and improving our products to meet the evolving needs of modern farming.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600">Creating products that not only maximize yields but also protect and nurture the environment.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-gray-600">Working closely with farmers to understand their challenges and provide effective solutions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner with Canmax?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied farmers who trust our products to improve their yields and farming practices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/products" className="btn-secondary">
              Explore Our Products
            </Link>
            <Link to="/contact" className="bg-white text-primary font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 