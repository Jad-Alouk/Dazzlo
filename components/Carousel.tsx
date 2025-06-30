"use client"

import type Stripe from "stripe"

import { useEffect, useState, useCallback } from "react"

import { Button } from "./ui/button"
import { Card, CardContent, CardTitle } from "./ui/card"

import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"

import Image from "next/image"
import Link from "next/link"

interface CarouselProps {
    products: Stripe.Product[]
}


export const Carousel = ({ products }: CarouselProps) => {

    const [current, setCurrent] = useState<number>(0)
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const [itemsPerView, setItemsPerView] = useState<number>(1)

    // Responsive items per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(3)
            } else if (window.innerWidth >= 768) {
                setItemsPerView(2)
            } else {
                setItemsPerView(1)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Auto-play functionality
    useEffect(() => {
        if (!isPlaying) return

        const interval = setInterval(() => {
            setCurrent((prev) => {
                const maxIndex = Math.max(0, products.length - itemsPerView)
                return prev >= maxIndex ? 0 : prev + 1
            })
        }, 4000)

        return () => clearInterval(interval)
    }, [products.length, itemsPerView, isPlaying])

    const goToPrevious = useCallback(() => {
        setCurrent((prev) => {
            const maxIndex = Math.max(0, products.length - itemsPerView)
            return prev <= 0 ? maxIndex : prev - 1
        })
    }, [products.length, itemsPerView])

    const goToNext = useCallback(() => {
        setCurrent((prev) => {
            const maxIndex = Math.max(0, products.length - itemsPerView)
            return prev >= maxIndex ? 0 : prev + 1
        })
    }, [products.length, itemsPerView])

    const goToSlide = useCallback((index: number) => {
        setCurrent(index)
    }, [])

    if (!products.length) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500">No products available</p>
            </div>
        )
    }

    const maxIndex = Math.max(0, products.length - itemsPerView)
    const visibleProducts = products.slice(current, current + itemsPerView)

    return (
        <div className="relative w-full">
            {/* Main Carousel */}
            <div
                className="relative overflow-hidden rounded-2xl"
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
            >
                <div className="flex transition-transform duration-500 ease-in-out">
                    <div
                        className={`grid gap-4 w-full ${itemsPerView === 1
                            ? "grid-cols-1"
                            : itemsPerView === 2
                                ? "grid-cols-2"
                                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                            }`}
                    >
                        {visibleProducts.map((product, index) => {
                            const price = product.default_price as Stripe.Price
                            const actualIndex = current + index

                            return (
                                <Card
                                    key={`${product.id}-${actualIndex}`}
                                    className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0"
                                >
                                    {/* Product Image */}
                                    <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                                        {product.images && product.images[0] ? (
                                            <Image
                                                src={product.images[0] || "/placeholder.svg"}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                                                <ShoppingCart className="h-16 w-16 text-purple-400" />
                                            </div>
                                        )}

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Hover Actions */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            <Button
                                                asChild
                                                size="sm"
                                                className="bg-white text-purple-600 hover:bg-purple-50 font-medium shadow-lg"
                                            >
                                                <Link href={`/products/${product.id}`}>View Details</Link>
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <CardContent className="p-4 sm:p-6">
                                        <div className="space-y-2">
                                            <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors">
                                                {product.name}
                                            </CardTitle>

                                            {product.description && (
                                                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                                            )}

                                            <div className="flex items-center justify-between pt-2">
                                                {price && price.unit_amount && (
                                                    <span className="text-xl sm:text-2xl font-bold text-purple-600">
                                                        ${(price.unit_amount / 100).toFixed(2)}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            {products.length > itemsPerView && (
                <>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border-purple-200 hover:bg-purple-50 hover:border-purple-300 shadow-lg"
                        onClick={goToPrevious}
                        disabled={current === 0}
                    >
                        <ChevronLeft className="h-5 w-5 text-purple-600" />
                        <span className="sr-only">Previous products</span>
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border-purple-200 hover:bg-purple-50 hover:border-purple-300 shadow-lg"
                        onClick={goToNext}
                        disabled={current >= maxIndex}
                    >
                        <ChevronRight className="h-5 w-5 text-purple-600" />
                        <span className="sr-only">Next products</span>
                    </Button>
                </>
            )}

            {/* Dots Indicator */}
            {products.length > itemsPerView && (
                <div className="flex justify-center space-x-2 mt-6">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${current === index ? "bg-purple-600 scale-110" : "bg-purple-200 hover:bg-purple-300"
                                }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Play/Pause Indicator */}
            <div className="absolute top-4 right-4 z-10">
                <div className={`w-2 h-2 rounded-full ${isPlaying ? "bg-green-400" : "bg-yellow-400"} shadow-lg`} />
            </div>
        </div>
    )
}


// "use client"

// import Stripe from "stripe"
// import { Card, CardContent, CardTitle } from "./ui/card"
// import { useEffect, useState } from "react"
// import Image from "next/image"

// interface CarouselProps {
//     products: Stripe.Product[]
// }

// export const Carousel = ({ products }: CarouselProps) => {

//     const [current, setCurrent] = useState<number>(0)

//     useEffect(() => {
//         const intrval = setInterval(() => {
//             setCurrent((prev) => (prev + 1) % products.length)
//         }, 3000)

//         return () => clearInterval(intrval)
//     }, [products.length])

//     const currentProduct = products[current]

//     const price = currentProduct.default_price as Stripe.Price

//     return (
//         <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-100">
//             {
//                 currentProduct.images && currentProduct.images[0] &&
//                 (
//                     <div className="relative h-80 w-full">
//                         <Image
//                             src={currentProduct.images[0]}
//                             alt={currentProduct.name}
//                             fill
//                             className="object-cover transition-opacity duration-500 ease-in-out"
//                         />
//                     </div>
//                 )
//             }

//             <CardContent className="absolute inset-0 flex clec-col justify-center items-center">
//                 <CardTitle className="text-3xl font-bold text-white mb-2">
//                     {currentProduct.name}
//                 </CardTitle>

//                 {
//                     price && price.unit_amount &&
//                     <p className="text-xl text-white">$ {(price.unit_amount / 100).toFixed(2)}</p>
//                 }
//             </CardContent>
//         </Card>
//     )
// }