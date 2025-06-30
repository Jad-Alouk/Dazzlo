import { stripe } from "@/lib/stripe"

import { Carousel } from "@/components/Carousel"
import { Button } from "@/components/ui/button"

import Image from "next/image"
import Link from "next/link"


export default async function Home() {

	const products = await stripe.products.list({
		expand: ["data.default_price"],
		limit: 5,
	})

	const heroImage = products.data[0]?.images[0] || "/globe.svg"

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						{/* Content */}
						<div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
							<div className="space-y-4">
								<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
									Welcome to{" "}
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
										Dazzlo
									</span>
								</h1>
								<p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
									Discover our latest products and shop with the best prices. Experience quality and style like never
									before.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
								<Button
									asChild
									size="lg"
									className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
								>
									<Link href="/products">Browse All Products</Link>
								</Button>
								<Button
									asChild
									variant="outline"
									size="lg"
									className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-medium transition-all duration-200 bg-transparent"
								>
									<Link href="/about">Learn More</Link>
								</Button>
							</div>

							{/* Stats or Features */}
							<div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
								<div className="text-center">
									<div className="text-2xl sm:text-3xl font-bold text-purple-600">500+</div>
									<div className="text-sm text-gray-600">Products</div>
								</div>
								<div className="text-center">
									<div className="text-2xl sm:text-3xl font-bold text-purple-600">10k+</div>
									<div className="text-sm text-gray-600">Customers</div>
								</div>
								<div className="text-center">
									<div className="text-2xl sm:text-3xl font-bold text-purple-600">99%</div>
									<div className="text-sm text-gray-600">Satisfaction</div>
								</div>
							</div>
						</div>

						{/* Hero Image */}
						<div className="order-1 lg:order-2 flex justify-center">
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur-2xl opacity-20 transform rotate-6"></div>
								<Image
									className="relative rounded-2xl shadow-2xl object-cover w-full max-w-md lg:max-w-lg xl:max-w-xl"
									src={heroImage || "/globe.svg"}
									alt="Featured Product"
									width={500}
									height={500}
									priority
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Decorative Elements */}
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
					<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
					<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
				</div>
			</section>

			{/* Featured Products Section */}
			<section className="py-12 sm:py-16 lg:py-20 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Explore our handpicked selection of premium products
						</p>
					</div>
					<Carousel products={products.data} />
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 sm:py-16 bg-gradient-to-r from-purple-600 to-purple-800">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="max-w-3xl mx-auto space-y-6">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Ready to Start Shopping?</h2>
						<p className="text-lg sm:text-xl text-purple-100">
							Join thousands of satisfied customers and discover amazing products today.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
						>
							<Link href="/products">Shop Now</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}


// export default async function Home() {

// 	const products = await stripe.products.list({
// 		expand: ["data.default_price"],
// 		limit: 5
// 	})


// 	return (
// 		<div>

// 			<section className="rounded bg-neutral-100 py-8 sm:py-12">

// 				<div className="mx-auto flex justify-evenly items-center gap-8 px-8 sm:px-16">

// 					<div className="max-w-md space-y-4">

// 						<h2 className="text-3xl font-bold tracking-tight md:text-4xl">Welcome to Dazzlo</h2>

// 						<p className="text-neutral-600">
// 							Discover our latest products and shop with the best prices
// 						</p>

// 						<Button
// 							asChild
// 							variant={"default"}
// 							className="inline-flex justify-center items-center rounded-full px-6 py-3 bg-black "
// 						>
// 							<Link
// 								href="/products"
// 								className="inline-flex justify-center items-center rounded-full px-6 py-3"
// 							>
// 								Browse All Products
// 							</Link>
// 						</Button>

// 					</div>

// 					<Image
// 						className="rounded"
// 						src={products.data[0].images[0]}
// 						alt="Banner Image"
// 						width={450}
// 						height={450}
// 					/>

// 				</div>

// 			</section>

// 			<section className="py-8">
// 				<Carousel products={products.data} />
// 			</section>

// 		</div>
// 	)
// }