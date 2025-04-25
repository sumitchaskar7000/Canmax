import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  englishTitle: string;
  date: string;
  image: string;
  excerpt: string;
  englishExcerpt: string;
  author: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "शेतीमध्ये टिकाऊ पद्धतींचा वापर",
    englishTitle: "Sustainable Farming Practices",
    date: "March 2024",
    image: "/images/zhendu.jpg",
    excerpt: "आधुनिक शेती पद्धतींचा वापर करून पर्यावरणाचे संरक्षण करत उत्पादन वाढवा. टिकाऊ शेतीच्या पद्धतींमुळे जमिनीचे आरोग्य सुधारते, पाण्याचा काटकसरीने वापर होतो आणि दीर्घकालीन फायदे मिळतात.",
    englishExcerpt: "Learn about modern sustainable farming practices that help increase yield while protecting the environment. Sustainable farming improves soil health, optimizes water usage, and provides long-term benefits.",
    author: "Dr. Rajesh Patel",
    readTime: "10 min",
    category: "Agriculture"
  },
  {
    id: 2,
    title: "कृषी क्षेत्रातील नवीन तंत्रज्ञान",
    englishTitle: "Latest Agricultural Technologies",
    date: "March 2024",
    image: "/images/modernTech.jpg",
    excerpt: "शेतीमध्ये वापरली जाणारी नवीन तंत्रज्ञाने आणि त्यांचे फायदे जाणून घ्या. डिजिटल शेती, अचूक शेती, स्मार्ट सिंचन आणि ड्रोन तंत्रज्ञानामुळे शेतीची कार्यक्षमता वाढते.",
    englishExcerpt: "Discover how new technologies are revolutionizing farming. Digital agriculture, precision farming, smart irrigation, and drone technology are enhancing agricultural efficiency.",
    author: "Tech Team",
    readTime: "8 min",
    category: "Technology"
  },
  {
    id: 3,
    title: "यशस्वी शेतकऱ्यांच्या कहाण्या",
    englishTitle: "Success Stories: Our Farmers",
    date: "March 2024",
    image: "/images/narayan.jpeg",
    excerpt: "कॅनमॅक्स प्रॉडक्ट्स वापरून यशस्वी झालेल्या शेतकऱ्यांच्या प्रेरणादायी कहाण्या. त्यांच्या अनुभवांमधून इतर शेतकऱ्यांना मार्गदर्शन मिळेल.",
    englishExcerpt: "Read inspiring stories of farmers who have transformed their farms using Canmax products. Their experiences provide valuable guidance for other farmers.",
    author: "Farmer Community",
    readTime: "12 min",
    category: "Agriculture"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <motion.div
            className="absolute inset-0 -z-10 bg-primary/5 rounded-3xl transform -skew-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          />
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            शेतीविषयक महत्वपूर्ण माहिती
          </motion.h1>
          <motion.p
            className="text-2xl text-primary font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Agricultural Insights
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            शेतीच्या नवीन तंत्रज्ञानाची माहिती, यशोगाथा आणि मार्गदर्शन
          </motion.p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.id}`}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center space-x-2">
                        <span className="bg-primary/90 px-3 py-1 rounded-full text-sm font-medium">
                          {post.author}
                        </span>
                        <span className="text-sm">•</span>
                        <span className="text-sm">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">{post.englishTitle}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{post.englishExcerpt}</p>
                  <div className="flex items-center text-primary font-semibold group/link">
                    अधिक वाचा
                    <svg
                      className="w-5 h-5 ml-2 transform transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 