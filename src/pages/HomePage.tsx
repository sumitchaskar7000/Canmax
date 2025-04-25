import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from '../components/Logo'

// Hero section component
const Hero = () => {
  return (
    <div
      className="relative py-16 md:py-24 text-white"
      style={{
        backgroundImage: "url('/images/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              {/* <Logo size="large" className="text-white" /> */}
            </motion.div>
            <motion.p
              className="text-3xl md:text-4xl font-bold mb-2 text-white font-marathi"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              नमस्कार,
            </motion.p>
            <motion.p
              className="text-2xl md:text-3xl font-bold mb-4 text-white font-marathi"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              शेतीची प्रगती, शेतकऱ्यांची समृद्धी
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Grow Better with Canmax India
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide high-quality agricultural products to help farmers maximize their yields and grow sustainably.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/products" className="btn-secondary">
                Explore Products
              </Link>
              <Link to="/contact" className="bg-white text-primary font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.img
              src="/images/canmaxP.png"
              alt="Canmax Product"
              className="rounded-lg w-full h-auto max-h-[500px] object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Welcome section component
const WelcomeSection = () => {
  const images = [
    {
      src: '/images/zhendu.jpg',
      alt: 'Beautiful farm field',
      title: 'Sustainable Farming',
      blogId: 1
    },
    {
      src: '/images/modernTech.jpg',
      alt: 'Modern agriculture technology',
      title: 'Innovative Technology',
      blogId: 2
    },
    {
      src: '/images/narayan.jpeg',
      alt: 'Successful farmer',
      title: 'Farmer Success Stories',
      blogId: 3
    },
    {
      src: '/images/canmaxP.png',
      alt: 'Organic products',
      title: 'Quality Products',
      blogId: 4
    },
    {
      src: '/images/grp_farming.jpg',
      alt: 'Community support',
      title: 'Community Support',
      blogId: 5
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Welcome to CanmaxIndia
          </motion.h2>
          <motion.p
            className="text-xl text-primary font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Your trusted partner in agricultural excellence. We combine traditional farming wisdom with modern technology to deliver the best solutions for Indian farmers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {images.slice(0, 3).map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/blog/${image.blogId}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-semibold p-4">{image.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.slice(3).map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/blog/${image.blogId}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-semibold p-4">{image.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Features section component
const Features = () => {
  const features = [
    {
      title: 'Sustainable Solutions',
      description: 'Our products are designed with sustainability in mind, helping farmers reduce environmental impact.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: 'Expert Support',
      description: 'Our team of agricultural experts is always available to provide guidance and support.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
    },
    {
      title: 'Quality Guaranteed',
      description: 'We source only the highest quality products to ensure optimal results for your farm.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Innovative Technology',
      description: 'Stay ahead with our innovative agricultural solutions designed for modern farming.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Canmax?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to helping farmers succeed with high-quality products and expert support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Featured products section
const FeaturedProducts = () => {
  const products = [
    {
      id: 10,
      name: 'TEERAFERT',
      description: 'TeeraFert is a water-soluble fertilizer rich in phosphorus and potash.',
      image: '/images/TeeraFert 0_42_47.png',
      category: 'Fertilizers',
      features: ['Rich in phosphorus & potash', 'Suitable for pre-bloom and post-bloom', 'Improves fruit quality'],
      rating: 4.8,
      reviews: 128
    },
    {
      id: 13,
      name: 'CALBION',
      description: 'Calbion is an amino acid-based plant growth promoter.',
      image: '/images/Calbion.png',
      category: 'Growth Promoters',
      features: ['Enhances protein synthesis', 'Improves stress resistance', 'Promotes chlorophyll synthesis'],
      rating: 4.9,
      reviews: 95
    },
    {
      id: 11,
      name: 'KADU PLUS',
      description: 'Kadu Plus is a unique botanical extract for pest control.',
      image: '/images/Kadu Plus.png',
      category: 'Pest Control',
      features: ['Controls red spider mite', 'Controls thrips', 'Safe for crops'],
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: 'MICROZIL VAM',
      description: 'Microzil is a symbiotic mutualistic relationship between special soil fungi and fine plant roots.',
      image: '/images/Microzil.png',
      category: 'Soil Health',
      features: ['Enhances nutrient uptake', 'Improves root system', 'Increases plant growth'],
      rating: 4.6,
      reviews: 112
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="section-title mb-2">Featured Products</h2>
            <p className="text-gray-600">Discover our best-selling agricultural solutions</p>
          </div>
          <Link
            to="/products"
            className="btn-primary mt-4 md:mt-0 flex items-center gap-2"
          >
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="relative">
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex space-x-6 min-w-max">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[350px] flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-56 flex items-center justify-center bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-4/5 h-4/5 object-contain p-4"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center bg-white/90 px-3 py-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm font-medium">{product.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <div className="mt-auto flex justify-center">
                      <Link
                        to={`/products/${product.id}`}
                        className="btn-secondary flex items-center gap-2"
                      >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 hidden md:block">
            <button className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden md:block">
            <button className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

// Testimonials section
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'फक्कड थेटे',
      role: 'प्रगतशील शेतकरी ',
      quote: "नमस्कार! मी फक्कड थेटे, राहणार जाधववाडी, तालुका जुन्नर, जिल्हा पुणे.मी कॅनमॅक्स इंडिया या कंपनीसोबत गेल्या १ वर्षापासून जोडलेलो आहे. सध्या माझ्या झेंडूच्या प्लॉटमध्ये कॅनमॅक्सची बायोसमृद्धी, मायक्रोझिल आणि कंप्लस पीएसबी केएमबी ही उत्पादने वापरत आहे.या प्रोडक्ट्सचा मला खूप चांगला फायदा झाला आहे. माझ्या प्लॉटमध्ये कळ्यांची संख्या वाढली आहे आणि फुटवे सुद्धा खूप चांगले आले आहेत.माझ्या सर्व शेतकरी बांधवांना मी हेच सांगू इच्छितो की – कॅनमॅक्स इंडिया कंपनीची उत्पादने अत्यंत प्रभावी आणि फायदेशीर आहेत.  तुम्ही नक्की वापरून पहा.  धन्यवाद! 🙏",
      avatar: '/images/thite.jpg',
    },
    {
      id: 2,
      name: 'कैलास बारवे',
      role: 'प्रगतशील शेतकरी ',
      quote: "नमस्कार! मी कैलास बारवे राहणार चास,तालुका .आंबेगाव,जिल्हा पुणे. मी कॅनमॅक्स इंडिया या कंपनी सोबत गेल्या १.५ वर्षापासून जोडलो गेलो आहे .मी गेल्या २५ वर्षा पासून शेती करत आहे मी या वर्षी टोमेटो केली आहे सुरवातीचा वेळेस माझा प्लाट खूप बाकीच्यांच्या तुलनेत खूप मागे होता मग मी कॅनमैक्स कंपनी चे काही प्रोडक्ट वापरले त्यात माइक्रोझिल आणि कंप्लस पीएसबी केएमबी वापरल आहे . मला त्याचे खूप चांगले रिसल्ट आले. माझ्या प्लॅाट मधे मुळ्यांची संख्या वाढली ,फुटवे चांगले आहे ,माझी शेतकरी बांधवना एकच विनती आहे की कॅनमॅक्स इंडिया कंपनी चे प्रोडक्ट खूप प्रभावी आहे .तुम्ही नक्की वापरा धन्यवाद 🙏.",
      avatar: '/images/barve.jpg',
    },
    {
      id: 3,
      name: 'नारायण चासकर',
      role: 'शेतकरी',
      quote: "नमस्कार! मी नारायण चासकर, राहणार चास (कडेवाडी), तालुका आंबेगाव, जिल्हा पुणे.मी कॅनमॅक्स इंडिया या कंपनीसोबत गेल्या वर्षभरापासून जोडलेलो आहे. शेतीत मला दहा वर्षांचा अनुभव आहे आणि या वर्षी मी कांद्याची लागवड केली आहे. सुरुवातीला माझा प्लॉट इतरांच्या तुलनेत बऱ्यापैकी मागे होता. त्यानंतर मी कॅनमॅक्स कंपनीची मायक्रोझिल आणि कंप्लस पीएसबी केएमबी ही उत्पादने वापरली.या प्रोडक्ट्सचा मला खूपच चांगला परिणाम पाहायला मिळाला. सध्या माझ्या प्लॉटमधील कांद्याची फुगवण व रंग उत्कृष्ट आहे.माझ्या सर्व शेतकरी बांधवांना मी एक सांगू इच्छितो कॅनमॅक्स इंडिया कंपनीची उत्पादने खरोखरच परिणामकारक आहेत. तुम्ही नक्की वापरून पहा.  धन्यवाद! 🙏",
      avatar: '/images/narayan.jpeg',
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Farm's Productivity?</h2>
          <p className="text-lg mb-8">
            Join thousands of satisfied farmers who trust Canmax for their agricultural needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/products" className="btn-secondary">
              Explore Products
            </Link>
            <Link to="/contact" className="bg-white text-primary font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">
              Contact Our Experts
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main HomePage component
export default function HomePage() {
  return (
    <div>
      <Hero />
      <WelcomeSection />
      <Features />
      <FeaturedProducts />
      <Testimonials />
      <CTASection />
    </div>
  )
} 