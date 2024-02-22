import Image from 'next/image'
import React from 'react'

function Card(props: any) {
    const { project, url, title, variant = 'orange', className = '' } = props
    return (
        <div
            className={`xl:w-1/3-gap-5 md:w-1/2-gap-5 h-64 w-full rounded-md ${className} group p-5 hover:shadow-xl hover:shadow-slate-200`}
        >
            <div className="relative z-10 mb-3 w-full cursor-pointer overflow-hidden rounded-md">
                <Image
                    className="h-36 w-full transform rounded-md object-cover transition-transform duration-300 hover:scale-110"
                    src={url}
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
