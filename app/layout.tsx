'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import loadingImg from '@/public/loading.jpg'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Mobile from '@/components/Footer/Mobile'

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
                    <div className="relative flex min-h-[100vh] flex-col  justify-center gap-9 xl:flex-row xl:bg-slate-300 xl:p-10">
                        <Sidebar />
                        <main className="mx-auto w-full bg-white xl:rounded-2xl xl:p-14">{children}</main>
                        <Navbar />
                        <Link
                            href="#"
                            className="bottm-[120px] fixed right-6 w-[70px] animate-bounce rounded-full bg-white p-3 shadow-lg shadow-slate-400 xl:bottom-5    "
                        >
                            <Icon icon="noto-v1:top-arrow" className="h-full w-full" />
                        </Link>
                        <Mobile className="" />
                    </div>
                )}
            </body>
        </html>
    )
}
