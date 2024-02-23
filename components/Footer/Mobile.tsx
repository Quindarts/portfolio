'use client'
import { usePathname } from 'next/navigation'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
const APP_ROUTE_MOBILE = [
    {
        path: '/',
        title: 'Home',
        icon: 'teenyicons:home-outline',
    },
    {
        path: '/me',
        title: 'Me',
        icon: 'basil:user-outline',
    },
    {
        path: '/projects',
        title: 'Projects',
        icon: 'fa6-solid:diagram-project',
    },
    {
        path: '/blogs',
        title: 'Blogs',
        icon: 'uil:blogger',
    },
]
function Mobile() {
    const [active, setActive] = useState<number>(0)

    var pathname = usePathname().replace('/', '')

    useLayoutEffect(() => {
        if (pathname.length === 0) {
            pathname = 'index'
            setActive(0)
        }
        APP_ROUTE_MOBILE.forEach((item, key) => {
            if (item.path.includes(pathname)) {
                setActive(key)
                return
            }
        })
    }, [pathname])

    return (
        <div className="sticky bottom-0 left-1/2 z-50 flex h-28 w-[100vw] justify-center gap-5  border-t-2 border-sky-200 bg-white p-5 text-sm font-[500] shadow-lg shadow-slate-400 xl:top-[140px]">
            {APP_ROUTE_MOBILE.map((child, index) => (
                <Link
                    href={child.path}
                    key={index}
                    className={`group relative inline-flex h-full w-full items-center justify-center overflow-hidden rounded-md sm:h-20 sm:w-20  ${active === index ? ' font-bold text-sky-500 ' : 'text-slate-700'} p-3`}
                >
                    <span className="relative">
                        <Icon className="mx-auto mb-2 h-7 w-7 sm:h-[40px] sm:w-[40px]" icon={child.icon} />
                        <span className="mt-3 text-[14px] sm:text-[20px]">{child.title}</span>
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Mobile
