"use client"

import { userCartStore } from "@/store/CartStore"

import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"

import { AlignJustify, ShoppingCartIcon } from "lucide-react"

import { useEffect, useState } from "react"
import Link from "next/link"


export const NavBar = () => {

    const [mobileOpen, setMobileOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false)
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const { items } = userCartStore()
    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/checkout", label: "Checkout" },
    ]

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl sm:text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors"
                    >
                        Dazzlo
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right side - Cart and Mobile Menu */}
                    <div className="flex items-center space-x-3">
                        {/* Cart Icon */}
                        <Link href="/checkout" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <ShoppingCartIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                                    {cartCount > 99 ? "99+" : cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Mobile Menu Button */}
                        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                            <SheetTitle className="hidden">Side Menu</SheetTitle>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="sm" className="md:hidden p-2">
                                    <AlignJustify className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                                <div className="flex flex-col space-y-4 mt-8">
                                    <div className="text-lg font-semibold text-purple-600 mb-4">Navigation</div>
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-3 rounded-md hover:bg-gray-50"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}

                                    {/* Mobile Cart Link */}
                                    <div className="pt-4 border-t border-gray-200">
                                        <Link
                                            href="/checkout"
                                            className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-3 rounded-md hover:bg-gray-50"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            <ShoppingCartIcon className="h-5 w-5" />
                                            <span>Cart ({cartCount})</span>
                                        </Link>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}


// export const NavBar = () => {

//     const [mobileOpen, setMobileOpen] = useState<boolean>(false)

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 768) {
//                 setMobileOpen(false)
//             }
//         }

//         window.addEventListener("resize", handleResize)

//         return () => window.removeEventListener("resize", handleResize)
//     }, [])


//     const { items } = userCartStore()
//     const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)

//     return (
//         <nav className="sticky top-0 z-50 bg-white shadow flex justify-between items-center">

//             <div className="container mx-auto flex justify-between items-center p-4">
//                 <Link href="/" className="text-2xl font-bold text-purple-400">Dazzlo</Link>
//             </div>

//             <div className="hidden md:flex md:px-3 space-x-6">
//                 <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
//                 <Link href="/products" className="hover:text-purple-400 transition-colors">Products</Link>
//                 <Link href="/checkout" className="hover:text-purple-400 transition-colors">Checkout</Link>
//             </div>

//             <div className="flex items-center space-x-4">
//                 <Link href="/checkout" className="relative">
//                     <ShoppingCartIcon />
//                     {
//                         cartCount > 0
//                             ? <span
//                                 className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white"
//                             >
//                                 {cartCount}
//                             </span>
//                             : null
//                     }
//                 </Link>

//                 <Button
//                     variant={"ghost"}
//                     className="md:hidden"
//                     onClick={() => setMobileOpen((prev) => !prev)}
//                 >
//                     {mobileOpen ? <X /> : <AlignJustify />}
//                 </Button>
//             </div>

//             {
//                 mobileOpen && (
//                     <nav className="md:hidden bg-white shadow-md">
//                         <ul className="flex flex-col p-4 space-y-2">
//                             <li>
//                                 <Link href="/" className="block hover:text-blue-600">Home</Link>
//                             </li>
//                             <li>
//                                 <Link href="/products" className="block hover:text-blue-600">Products</Link>
//                             </li>
//                             <li>
//                                 <Link href="/checkout" className="block hover:text-blue-600">Checkout</Link>
//                             </li>
//                         </ul>
//                     </nav>
//                 )
//             }

//         </nav>
//     )
// }