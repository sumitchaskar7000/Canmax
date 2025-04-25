import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface BlogPost {
  id: number
  title: string
  englishTitle: string
  content: string
  image: string
  date: string
  author: string
  authorRole: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "शेतीमध्ये टिकाऊ पद्धतींचा वापर",
    englishTitle: "Sustainable Farming Practices",
    content: `
      <p>शेतीमध्ये टिकाऊ पद्धतींचा वापर हा आजच्या काळाची गरज आहे. आपल्या शेतीची उत्पादकता वाढवण्यासाठी आणि पर्यावरणाचे संरक्षण करण्यासाठी या पद्धतींचा अवलंब करणे महत्वाचे आहे.</p>
      
      <h2>टिकाऊ शेतीचे महत्व</h2>
      <p>टिकाऊ शेतीच्या पद्धतींमुळे खालील फायदे मिळतात:</p>
      <ul>
        <li>पर्यावरण संतुलन राखणे</li>
        <li>जमिनीचे आरोग्य सुधारणे</li>
        <li>पाण्याचा काटकसरीने वापर</li>
        <li>खर्चात कपात</li>
        <li>दीर्घकालीन फायदे</li>
      </ul>

      <h2>आधुनिक पद्धती</h2>
      <p>आधुनिक टिकाऊ शेतीच्या पद्धतींमध्ये खालील गोष्टींचा समावेश होतो:</p>
      <ul>
        <li>सेंद्रिय शेती</li>
        <li>एकात्मिक शेती</li>
        <li>सूक्ष्म सिंचन</li>
        <li>जैविक नियंत्रण</li>
      </ul>

      <h2>यशस्वी शेतकऱ्यांचे अनुभव</h2>
      <p>अनेक शेतकऱ्यांनी टिकाऊ शेतीच्या पद्धतींचा अवलंब करून उत्पादनात लक्षणीय वाढ केली आहे. त्यांच्या अनुभवांमधून इतर शेतकऱ्यांना मार्गदर्शन मिळते.</p>
    `,
    image: "/images/zhendu.jpg",
    date: "March 2024",
    author: "Dr. Rajesh Shinde",
    authorRole: "Agricultural Scientist",
    category: "Agriculture"
  },
  {
    id: 2,
    title: "कृषी क्षेत्रातील नवीन तंत्रज्ञान",
    englishTitle: "Latest Agricultural Technologies",
    content: `
     <p>आधुनिक तंत्रज्ञानाच्या वापरामुळे शेतीमध्ये सकारात्मक बदल घडवून आणणे शक्य झाले आहे. या तंत्रज्ञानाच्या मदतीने शेतीची कार्यक्षमता वाढते, उत्पादनात वाढ होते आणि शेतकऱ्यांचे जीवनमान उंचावण्यास मदत होते.</p>

<h2>मुख्य तंत्रज्ञाने</h2>
<p>सध्याच्या काळात शेतीमध्ये वापरली जाणारी काही प्रमुख तंत्रज्ञाने खालीलप्रमाणे आहेत:</p>
<ul>
  <li>डिजिटल शेती माहिती आणि संप्रेषण तंत्रज्ञानाचा वापर करून शेतीचे व्यवस्थापन</li>
  <li>अचूक शेती जमिनीच्या प्रकारानुसार आणि पिकांच्या गरजेनुसार अचूक निर्णय घेणे</li>
  <li>स्मार्ट सिंचन पाण्याचा योग्य वापर सुनिश्चित करणारे स्वयंचलित सिंचन प्रणाली</li>
  <li>ड्रोन तंत्रज्ञान पिकांचे निरीक्षण, कीड नियंत्रण आणि खत फवारणीसाठी वापर</li>
</ul>

<h2>फायदे</h2>
<p>या आधुनिक तंत्रज्ञानाच्या वापरामुळे शेतकऱ्यांना अनेक प्रकारचे फायदे होतात:</p>
<ul>
  <li>शेती अधिक कार्यक्षम आणि नियोजित होते</li>
  <li>खर्चात लक्षणीय बचत होते</li>
  <li>उत्पादनात वाढ होऊन उत्पन्न वाढते</li>
  <li>श्रमात घट होऊन वेळ वाचतो</li>
</ul>

<h2>भविष्यातील संधी</h2>
<p>कृषी तंत्रज्ञान हे सतत विकसित होणारे क्षेत्र आहे. नवीन संशोधन आणि नवकल्पनांमुळे भविष्यात आणखी प्रगत साधने आणि प्रणाली शेतीत लागू होतील. यामुळे शेतकऱ्यांना अधिक चांगले निर्णय घेता येतील आणि त्यांची उत्पादकता अधिक वाढेल.</p>

    `,
    image: "/images/modernTech.jpg",
    date: "March 2024",
    author: "Tech Team",
    authorRole: "Agricultural Technology Expert",
    category: "Technology"
  }
]

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>()
  const post = blogPosts.find(p => p.id === Number(id))

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
                        {post.category}
                      </span>
                      <span className="text-white/90">•</span>
                      <span className="text-white/90">{post.date}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                      {post.title}
                    </h1>
                    <p className="text-2xl text-white/90 mb-6">{post.englishTitle}</p>
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
                <div
                  className="whitespace-pre-line text-xl text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  )
} 