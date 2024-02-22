'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import loadingImg from '@/public/loading.jpg'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//     title: 'Trang cá nhân',
//     description: ' Trang cá nhân Le Minh Quang',
// }

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])
    return (
        <html lang="en">
            <body className={inter.className}>
                {loading ? (
                    <div className="relative flex h-[100vh] w-full items-center justify-center">
                        <div className="absolute h-80 w-80 animate-spin rounded-full border-b-4 border-t-4 border-sky-500"></div>
                        <Image src={loadingImg} width={200} alt="" className="h-72 w-72 rounded-full" />
                    </div>
                ) : (
                    <div className="flex min-h-[100vh] flex-col  justify-center gap-9 bg-slate-300 p-5 xl:flex-row xl:p-10">
                        <Sidebar />
                        <main className="*: w-full rounded-2xl bg-white xl:p-14">{children}</main>
                        <Navbar />
                    </div>
                )}
            </body>
        </html>
    )
}
