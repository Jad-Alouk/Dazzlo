import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Zap, Globe, Mail, MapPin, Phone, Star } from "lucide-react"

export default function AboutPage() {
    const values = [
        {
            icon: Heart,
            title: "Customer First",
            description: "Every decision we make starts with our customers in mind. Your satisfaction is our top priority.",
        },
        {
            icon: Shield,
            title: "Quality Assurance",
            description: "We maintain the highest standards in product quality and customer service excellence.",
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "Constantly evolving and improving to bring you the latest and greatest products.",
        },
        {
            icon: Globe,
            title: "Sustainability",
            description: "Committed to environmentally responsible practices and sustainable business operations.",
        },
    ]

    const team = [
        {
            name: "Sarah Johnson",
            role: "Founder & CEO",
            bio: "With 15+ years in e-commerce, Sarah founded Dazzlo to revolutionize online shopping.",
        },
        {
            name: "Michael Chen",
            role: "Head of Product",
            bio: "Michael ensures every product meets our high standards before reaching our customers.",
        },
        {
            name: "Emily Rodriguez",
            role: "Customer Experience",
            bio: "Emily leads our customer success team, ensuring every interaction exceeds expectations.",
        },
        {
            name: "David Kim",
            role: "Technology Director",
            bio: "David drives our technical innovation and platform development initiatives.",
        },
    ]

    const stats = [
        { number: "50K+", label: "Happy Customers" },
        { number: "500+", label: "Products" },
        { number: "99.8%", label: "Satisfaction Rate" },
        { number: "24/7", label: "Support" },
    ]

    const milestones = [
        { year: "2020", title: "Company Founded", description: "Started with a vision to transform online shopping" },
        { year: "2021", title: "First 1K Customers", description: "Reached our first major milestone in customer growth" },
        { year: "2022", title: "Product Expansion", description: "Expanded to over 500 premium products" },
        { year: "2023", title: "Global Reach", description: "Serving customers in over 25 countries" },
        { year: "2024", title: "Innovation Award", description: "Recognized for excellence in e-commerce innovation" },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16 sm:py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">About Dazzlo</Badge>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                            Crafting Exceptional{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                                Shopping Experiences
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                            {`Since 2020, we've been dedicated to bringing you the finest products with unmatched quality and service.
                            Our journey began with a simple mission: to make premium shopping accessible to everyone.`}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
                            >
                                <Link href="/products">Shop Our Products</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-medium bg-transparent"
                            >
                                <Link href="#contact">Get In Touch</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Story</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Dazzlo was born from a simple observation: online shopping had become impersonal and overwhelming. We
                                    believed there had to be a better way to connect people with products they truly love.
                                </p>
                                <p>
                                    Our founder, Sarah Johnson, started Dazzlo in her garage with a vision to curate only the finest
                                    products and provide exceptional customer service. What began as a small operation has grown into a
                                    trusted platform serving thousands of customers worldwide.
                                </p>
                                <p>
                                    Today, we continue to uphold those founding principles: quality over quantity, customer satisfaction
                                    above all, and a commitment to making every shopping experience memorable.
                                </p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600">Rated 4.9/5 by our customers</span>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur-2xl opacity-20 transform rotate-3"></div>
                            <Image
                                src="/globe.svg"
                                alt="Our Story"
                                width={600}
                                height={500}
                                className="relative rounded-2xl shadow-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            These core principles guide everything we do and shape how we serve our customers
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <Card
                                key={index}
                                className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
                            >
                                <CardContent className="space-y-4">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
                                        <value.icon className="h-8 w-8 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Key milestones that have shaped our company and defined our growth
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200"></div>
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                                        <Card className="p-6 shadow-lg border-0">
                                            <CardContent className="space-y-2">
                                                <Badge className="bg-purple-600 text-white">{milestone.year}</Badge>
                                                <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                                                <p className="text-gray-600">{milestone.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                    <div className="w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {`The passionate individuals behind Dazzlo's success`}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <Card
                                key={index}
                                className="text-center overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={"/avatar.png"}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                                <CardContent className="p-6 space-y-3">
                                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                    <p className="text-purple-600 font-medium">{member.role}</p>
                                    <p className="text-sm text-gray-600">{member.bio}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 sm:py-20 bg-gradient-to-r from-purple-600 to-purple-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                        <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                            {`Have questions or want to learn more? We'd love to hear from you.`}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center text-white">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                <Mail className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                            <p className="text-purple-100">hello@dazzlo.com</p>
                        </div>
                        <div className="text-center text-white">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                <Phone className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                            <p className="text-purple-100">+1 (555) 123-4567</p>
                        </div>
                        <div className="text-center text-white">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                <MapPin className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                            <p className="text-purple-100">San Francisco, CA</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
