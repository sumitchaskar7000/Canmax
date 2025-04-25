import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Canmax</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering farmers with innovative agricultural solutions and sustainable practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Canmax is a leading agricultural biotechnology company dedicated to transforming India's farming sector. 
              We combine traditional farming wisdom with cutting-edge technology to provide sustainable solutions 
              that help farmers maximize their yields while preserving the environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-2">50,000+</h3>
                <p className="text-gray-600">Farmers Empowered</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-2">100+</h3>
                <p className="text-gray-600">Products & Solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
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
                To empower 1 lakh farmers with free Agricultural consultancy and the latest innovations in agricultural biotechnology, fostering sustainable growth in India's farming sector. Our vision extends beyond just providing solutions - we aim to create a sustainable agricultural ecosystem where farmers have access to cutting-edge technology, expert guidance, and a supportive community. We envision a future where every farmer in India can achieve maximum productivity while maintaining environmental sustainability.
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
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals behind Canmax's success
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team members can be added here */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Join Us in Transforming Agriculture</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Be part of our mission to empower farmers and revolutionize Indian agriculture
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
              <Link to="/products" className="bg-white text-primary font-semibold py-2 px-6 rounded-md hover:bg-gray-100 transition-colors">
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 