import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './ProductsPage'
import { Link } from 'react-router-dom'

interface Product {
  id: number
  name: string
  englishName: string
  description: string
  image: string
  category: string
  price: string
  rating: number
  details: string
  specifications: {
    cellCount: string
    availableIn: string
    composition: string
    base: string
  }
  applications: string[]
  dosage: {
    spray: string
    seedTreatment: string
    soilApplication: string
  }
  benefits: string[]
  usage: string
}

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Product Not Found</h1>
            <p className="mt-4 text-lg text-gray-600">The product you are looking for does not exist.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div>
                <a href="/products" className="text-gray-400 hover:text-gray-500">
                  Products
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <span className="ml-4 text-gray-500">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="relative max-w-sm mx-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-lg shadow-lg object-contain"
                />
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="mt-2 text-xl text-gray-500">{product.price}</p>
                <div className="mt-4 flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{product.rating} out of 5</span>
                </div>
                <p className="mt-4 text-gray-600">{product.description}</p>
                <p className="mt-4 text-gray-600">{product.details}</p>

                {/* Specifications */}
                <div className="mt-8">
                  <h2 className="text-lg font-medium text-gray-900">Specifications</h2>
                  <ul className="mt-4 grid grid-cols-1 gap-2">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Cell Count: {product.specifications.cellCount}</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Available In: {product.specifications.availableIn}</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Composition: {product.specifications.composition}</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Base: {product.specifications.base}</span>
                    </li>
                  </ul>
                </div>

                {/* Applications */}
                <div className="mt-8">
                  <h2 className="text-lg font-medium text-gray-900">Applications</h2>
                  <ul className="mt-4 grid grid-cols-1 gap-2">
                    {product.applications.map((app, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dosage */}
                <div className="mt-8">
                  <h2 className="text-lg font-medium text-gray-900">Dosage</h2>
                  <ul className="mt-4 grid grid-cols-1 gap-2">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Spray: {product.dosage.spray}</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Seed Treatment: {product.dosage.seedTreatment}</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Soil Application: {product.dosage.soilApplication}</span>
                    </li>
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mt-8">
                  <h2 className="text-lg font-medium text-gray-900">Benefits</h2>
                  <ul className="mt-4 grid grid-cols-1 gap-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Usage Instructions */}
                <div className="mt-8">
                  <h2 className="text-lg font-medium text-gray-900">Usage Instructions</h2>
                  <p className="mt-4 text-gray-600">{product.usage}</p>
                </div>

                {/* Contact Button */}
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="block w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-center"
                  >
                    Contact for Price
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 