import { LIST_CARD_PROJECT } from '@/app/projects/ListCard'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Card(props: any) {
    const { project, url, title, variant = 'orange', className = '', index } = props
    const router = useRouter()
    const handleClick = (id: number) => {
        router.push(`/projects/${id}`)
    }
    return (
        <div
            onClick={() => handleClick(index)}
            className={`h-72 w-full rounded-md  sm:h-[300px] md:h-64  md:w-1/2-gap-5 lg:h-72 xl:w-1/3-gap-5 ${className} group p-5 hover:shadow-xl hover:shadow-slate-200`}
        >
            <div className="relative z-10 mb-3 h-40 w-full cursor-pointer overflow-hidden rounded-md sm:h-52 md:h-36  lg:h-48">
                <Image
                    className="h-full w-full transform rounded-md object-cover transition-transform duration-300 hover:scale-110"
                    src={url}
                    height={500}
                    width={1000}
                    alt="project-ecommerce"
                    priority
                />
            </div>

            <h2 className="text-md font-[600] group-hover:text-sky-600">{title}</h2>
            <span className="mb-3 text-sm text-slate-500">Travel Landing , UX/UI</span>
        </div>
    )
}

export default Card
