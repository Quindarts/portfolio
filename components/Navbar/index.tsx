'use client'
import { usePathname } from 'next/navigation'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
const APP_ROUTE = [
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
function Navbar() {
    const [active, setActive] = useState<number>(0)

    var pathname = usePathname().replace('/', '')

    const btn_ref = useRef<HTMLButtonElement | null>(null)
    useLayoutEffect(() => {
        if (pathname.length === 0) {
            pathname = 'index'
            setActive(0)
        }
        APP_ROUTE.forEach((item, key) => {
            if (item.path.includes(pathname)) {
                setActive(key)
                return
            }
        })
    }, [pathname])

    return (
        <div className="sticky hidden  h-80 w-32 flex-col gap-5 rounded-2xl bg-white p-5 text-sm font-[500] shadow-lg shadow-slate-400 xl:top-[140px] xl:flex">
            {APP_ROUTE.map((child, index) => (
                <Link
                    href={child.path}
                    key={index}
                    className={`group relative inline-flex h-20 w-16 items-center justify-center overflow-hidden rounded-md  ${active === index ? 'bg-slate-700 text-white ' : 'bg-slate-200'} p-3  font-medium tracking-tighter text-slate-600`}
                >
                    <span className="absolute h-0 w-0 rounded-full bg-sky-200 transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
                    <span className="relative">
                        <Icon className="mx-auto" width={20} height={20} icon={child.icon} />
                        <span className="mt-1 text-[13px]">{child.title}</span>
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Navbar
