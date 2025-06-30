"use client"

import Stripe from "stripe"
import { ProductCard } from "./ProductCard"
import { useState } from "react"

interface ProductsListProps {
    products: Stripe.Product[]
}

export const ProductList = ({ products }: ProductsListProps) => {

    const [searchTerm, setSearchTerm] = useState<string>("")

    const filteredProducts = products.filter((product) => {
        const term = searchTerm.toLowerCase()
        const nameMatch = product.name.toLowerCase().includes(term)
        const descriptionMatch = product.description ?
            product.description.toLowerCase().includes(term) : false

        return nameMatch || descriptionMatch
    })

    return (
        <div>
            <div className="mb-6 flex justify-center">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-2/3 w-max-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:border-purple-400"
                />
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    filteredProducts.map((product, i) => {
                        return (
                            <li key={i}><ProductCard product={product} /></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}