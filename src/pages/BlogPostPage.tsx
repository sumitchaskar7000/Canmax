import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  authorRole: string;
  image: string;
  readTime: string;
  content: string;
  tags: string[];
  products: {
    title: string;
    items: string[];
  }[];
  benefits: string[];
}

const BlogPostPage = () => {
  const { id } = useParams()

  const blogPosts: Record<number, BlogPost> = {
    1: {
      id: 1,
      title: "शेतीमध्ये टिकाऊ पद्धतींचा वापर",
      date: "March 2024",
      author: "Dr. Rajesh Patel",
      authorRole: "Agricultural Scientist",
      image: "/images/zhendu.jpg",
      readTime: "10 min read",
      content: `
        शेतीमध्ये टिकाऊ पद्धतींचा वापर हा आजच्या काळाची गरज आहे. आपल्या शेतीची उत्पादकता वाढवण्यासाठी आणि पर्यावरणाचे संरक्षण करण्यासाठी या पद्धतींचा अवलंब करणे महत्वाचे आहे.

        टिकाऊ शेतीचे महत्व:
        • पर्यावरण संतुलन
        • जमिनीचे आरोग्य
        • पाणी बचत
        • खर्चात कपात
        • दीर्घकालीन फायदे

        आधुनिक पद्धती:
        • सेंद्रिय शेती
        • एकात्मिक शेती
        • सूक्ष्म सिंचन
        • जैविक नियंत्रण
      `,
      products: [
        {
          title: "जमीन आरोग्य व्यवस्थापन",
          items: [
            "नियमित माती परीक्षण",
            "सेंद्रिय पदार्थांचा वापर",
            "पीक फेरपालट",
            "जैविक खतांचा वापर"
          ]
        },
        {
          title: "पाणी व्यवस्थापन",
          items: [
            "ठिबक सिंचन",
            "पावसाचे पाणी साठवण",
            "आच्छादन तंत्र",
            "कमी पाण्यावर येणारी पिके"
          ]
        },
        {
          title: "एकात्मिक कीड व्यवस्थापन",
          items: [
            "जैविक नियंत्रण",
            "पारंपारिक पद्धती",
            "रोगप्रतिकारक वाण",
            "लक्ष्य-केंद्रित कीड नियंत्रण"
          ]
        }
      ],
      benefits: [
        "पीक उत्पादनात वाढ",
        "जमिनीच्या आरोग्यात सुधारणा",
        "पाण्याचा कमी वापर",
        "अधिक नफा",
        "दीर्घकालीन शाश्वतता",
        "पर्यावरण संरक्षण"
      ],
      tags: ["टिकाऊ शेती", "माती आरोग्य", "पाणी व्यवस्थापन", "कीड व्यवस्थापन"]
    },
    2: {
      id: 2,
      title: "कृषी क्षेत्रातील नवीन तंत्रज्ञान",
      date: "March 2024",
      author: "Tech Team",
      authorRole: "Agricultural Technology Expert",
      image: "/images/modernTech.jpg",
      readTime: "8 min read",
      content: `
        आधुनिक तंत्रज्ञानाचा वापर करून शेतीमध्ये क्रांती घडवून आणणे शक्य आहे. या तंत्रज्ञानामुळे शेतीची कार्यक्षमता वाढते आणि उत्पादनात वाढ होते.

        मुख्य तंत्रज्ञाने:
        • डिजिटल शेती
        • अचूक शेती
        • स्मार्ट सिंचन
        • ड्रोन तंत्रज्ञान
      `,
      products: [
        {
          title: "डिजिटल शेती",
          items: [
            "स्मार्ट सेंसर्स",
            "ड्रोन तंत्रज्ञान",
            "आयओटी उपकरणे",
            "डेटा विश्लेषण"
          ]
        },
        {
          title: "अचूक शेती",
          items: [
            "जीपीएस तंत्रज्ञान",
            "व्हेरिएबल रेट तंत्रज्ञान",
            "रिमोट सेंसिंग",
            "ऑटोमेटेड मशीनरी"
          ]
        }
      ],
      benefits: [
        "कार्यक्षमता वाढते",
        "खर्चात बचत",
        "उत्पादन वाढते",
        "श्रम कमी होतो"
      ],
      tags: ["डिजिटल शेती", "अचूक शेती", "स्मार्ट तंत्रज्ञान", "जलव्यवस्थापन"]
    },
    3: {
      id: 3,
      title: "एक प्रेरणादायी शेतकरी",
      date: "March 2024",
      author: "Farmer Community",
      authorRole: "Community Leader",
      image: "/images/narayan.jpeg",
      readTime: "12 min read",
      content: `
        श्री. नारायण चासकर:
        शेती म्हणजे पारंपरिक पद्धती, कष्ट आणि निसर्गावर अवलंबून राहणं — हीच बहुतेकांची कल्पना असते. पण याच क्षेत्रात आधुनिक विचार, नवकल्पना आणि तंत्रज्ञान यांचा समावेश करून शेतीचा चेहरामोहरा बदलणारे काही तरुण आहेत. अशाच शेतकऱ्यांपैकी एक म्हणजे नारायण चासकर.

        नारायण हे महाराष्ट्रातील एका छोट्याशा गावात राहतात. त्यांनी शेती परंपरेने स्वीकारली असली, तरी तिच्या पद्धती मात्र पूर्णपणे आधुनिक केल्या. त्यांच्या शेतीतील प्रवासाची सुरुवात पारंपरिक पद्धतीने झाली, पण बदलत्या काळानुसार त्यांनी स्वतःला अपडेट केलं.

        तंत्रज्ञानाचा वापर – आधुनिकतेकडे वाटचाल
        नारायण यांनी डिजिटल शेतीचा स्वीकार केला. जमिनीचे आरोग्य तपासण्यासाठी मृदा चाचणी, हवामानाचा अचूक अंदाज घेण्यासाठी मोबाइल अ‍ॅप्स, आणि सिंचनासाठी स्मार्ट ड्रिप सिस्टम यांचा त्यांनी प्रभावी वापर केला. कीड नियंत्रणासाठी ड्रोन तंत्रज्ञान आणि पिकांचे निरीक्षण करण्यासाठी सेंसर टेक्नोलॉजी वापरली.

        यशस्वी प्रयोग आणि परिणाम
        या तंत्रज्ञानामुळे त्यांच्या उत्पादनात ३०% वाढ झाली आणि खर्चात मोठी बचत झाली. पूर्वी जिथे फक्त पारंपरिक पद्धतीवर अवलंबून राहावे लागे, तिथे आता त्यांनी पाण्याचा अचूक वापर, खतांचे योग्य नियोजन आणि वेळेवर पीक व्यवस्थापन यावर भर दिला आहे.

        इतर शेतकऱ्यांसाठी प्रेरणा
        नारायण चासकर हे फक्त एक यशस्वी शेतकरी नाहीत, तर एक प्रेरणादायी व्यक्तिमत्व आहेत. त्यांनी त्यांच्या गावातील अनेक तरुणांना तंत्रज्ञानाचा वापर करून शेतीत उतरायला प्रवृत्त केले आहे. त्यांच्या मार्गदर्शनाखाली अनेकांनी नवे प्रयोग करून यश मिळवलं आहे.
      `,
      products: [
        {
          title: "यशस्वी शेतकरी",
          items: [
            "श्री. नारायण पाटील"
          ]
        },
        {
          title: "यशाची गुरुकिल्ली",
          items: [
            "नवीन तंत्रज्ञान",
            "योग्य मार्गदर्शन",
            "कष्ट आणि चिकाटी",
            "नियोजन"
          ]
        }
      ],
      benefits: [
        "प्रेरणादायी कहाण्या",
        "व्यावहारिक मार्गदर्शन",
        "अनुभवांचे आदान-प्रदान",
        "नेटवर्किंग संधी"
      ],
      tags: ["शेतकरी यशोगाथा", "जैविक शेती", "पाणी वाचव", "समुदाय विकास"]
    },
    4: {
      id: 4,
      title: "जैविक उत्पादनांचे महत्व",
      date: "एप्रिल 2024",
      author: "डॉ. सुनील पाटील",
      authorRole: "जैविक शेती तज्ञ",
      image: "/images/canmaxP.png",
      readTime: "12 मिनिटे",
      content: `
        जैविक शेती ही आजच्या काळाची गरज बनली आहे. पर्यावरणाचे संरक्षण करताना आरोग्यदायी पिके घेणे हे आपल्या आणि आपल्या पुढच्या पिढीच्या भविष्यासाठी महत्वाचे आहे.

        जैविक शेतीचे फायदे:
        • मातीचे आरोग्य सुधारते
        • पाण्याचा कमी वापर होतो
        • पर्यावरणाचे संरक्षण होते
        • पिकांची गुणवत्ता वाढते
        • दीर्घकालीन फायदे मिळतात

        जैविक खतांचा वापर:
        • कंपोस्ट खत
        • जैविक खत
        • हिरवळीचे खत
        • वर्मीकंपोस्ट

        जैविक कीड नियंत्रण:
        • नीमाचा वापर
        • जैविक कीडनाशके
        • पिकांची फेरपालट
        • सहपिकांची लागवड
      `,
      products: [
        {
          title: "जैविक खते",
          items: [
            "कंपोस्ट खत",
            "वर्मीकंपोस्ट",
            "जैविक खत",
            "हिरवळीचे खत"
          ]
        },
        {
          title: "जैविक कीडनाशके",
          items: [
            "नीमाचा वापर",
            "जैविक कीडनाशके",
            "सहपिकांची लागवड",
            "पिकांची फेरपालट"
          ]
        }
      ],
      benefits: [
        "मातीचे आरोग्य सुधारते",
        "पर्यावरणाचे संरक्षण होते",
        "पिकांची गुणवत्ता वाढते",
        "दीर्घकालीन फायदे मिळतात",
        "पाण्याचा कमी वापर होतो",
        "आरोग्यदायी पिके मिळतात"
      ],
      tags: ["जैविक शेती", "जैविक खते", "कीड नियंत्रण", "पर्यावरण संरक्षण"]
    },
    5: {
      id: 5,
      title: "समुदायाचे सहकार्य आणि शेती",
      date: "एप्रिल 2024",
      author: "श्री. राजेश जाधव",
      authorRole: "समुदाय नेता",
      image: "/images/grp_farming.jpg",
      readTime: "15 मिनिटे",
      content: `
        शेती ही एकट्याने करण्याचा व्यवसाय नाही. समुदायाच्या सहकार्याने शेती करणे हे यशस्वी शेतीचे रहस्य आहे. आपल्या गावातील शेतकऱ्यांनी एकत्र येऊन काम केल्यास अनेक फायदे मिळू शकतात.

        समुदाय सहकार्याचे फायदे:
        • संसाधनांचा सामायिक वापर
        • ज्ञानाची देवाणघेवाण
        • खर्चात बचत
        • बाजारपेठेपर्यंत सहज प्रवेश
        • सामूहिक शक्ती

        सहकारी शेतीचे प्रकार:
        • सहकारी संस्था
        • किसान क्लब
        • स्वयंसेवी गट
        • उत्पादक कंपनी

        यशस्वी सहकार्याची उदाहरणे:
        • सामूहिक खरेदी
        • सामूहिक विक्री
        • ज्ञान सामायिकरण
        • तंत्रज्ञानाचा वापर
      `,
      products: [
        {
          title: "सहकारी संस्था",
          items: [
            "किसान क्लब",
            "स्वयंसेवी गट",
            "उत्पादक कंपनी",
            "सहकारी संस्था"
          ]
        },
        {
          title: "सामूहिक क्रियाकलाप",
          items: [
            "सामूहिक खरेदी",
            "सामूहिक विक्री",
            "ज्ञान सामायिकरण",
            "तंत्रज्ञान वापर"
          ]
        }
      ],
      benefits: [
        "संसाधनांचा सामायिक वापर",
        "ज्ञानाची देवाणघेवाण",
        "खर्चात बचत",
        "बाजारपेठेपर्यंत सहज प्रवेश",
        "सामूहिक शक्ती",
        "यशस्वी शेती"
      ],
      tags: ["सहकारी शेती", "समुदाय विकास", "किसान क्लब", "सामूहिक शक्ती"]
    }
  }

  const post = blogPosts[Number(id)]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container-custom">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-primary font-semibold mb-8 hover:text-primary/80 group"
          >
            <svg
              className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            ब्लॉगकडे परत जा
          </Link>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-[600px]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="bg-primary/90 text-white px-4 py-1.5 rounded-full text-sm">
                        {post.readTime}
                      </span>
                      <span className="text-white/90">•</span>
                      <span className="text-white/90">{post.date}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                      {post.title}
                    </h1>
                    <div className="flex items-center text-white/90">
                      <div>
                        <p className="font-semibold text-lg">{post.author}</p>
                        <p className="text-sm text-white/70">{post.authorRole}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="mb-12">
                  <div className="whitespace-pre-line text-xl text-gray-700 leading-relaxed">
                    {post.content}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {post.products.map((product, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <h3 className="text-xl font-bold text-primary mb-4">{product.title}</h3>
                      <ul className="space-y-3">
                        {product.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="bg-primary/5 rounded-xl p-8 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-primary mb-6">फायदे आणि परिणाम</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">मुख्य फायदे</h3>
                      <ul className="space-y-3">
                        {post.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <svg
                              className="w-5 h-5 text-primary mr-3 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-12 pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">संबंधित विषय</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  )
}

export default BlogPostPage 