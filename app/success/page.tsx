"use client"

import { userCartStore } from "@/store/CartStore"
import Link from "next/link"
import { useEffect } from "react"

export default function Success() {

    const { clearCart } = userCartStore()

    useEffect(() => {
        clearCart()
    }, [clearCart])

    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Purchase Was Success!</h1>
            <p className="mb-4">Thank you for using Dazzlo. Your order is being processed now.</p>

            <Link href="/products" className="text-blue-600 hover:underline">
                Continue Shopping
            </Link>
        </div>
    )
}