import Link from 'next/link'
import React, { useState } from 'react'
const LIST_TAB = [
    {
        link: '#main',
        title: 'Main',
    },
    {
        link: '#tech_content',
        title: 'Technology',
    },
    {
        link: '#feature_content',
        title: 'Special Features',
    },
    {
        link: '#app_demo_content',
        title: 'App demo',
    },
]
function Tab() {
    const [currentIndex, setCurrentIndex] = useState(0)
    return (
        <div className="mx-auto mb-10 mt-5 w-full overflow-x-auto ">
            <div className="flex w-[90%] justify-center gap-7">
                {LIST_TAB.map((mini, index) => (
                    <Link
                        href={mini.link}
                        onClick={() => {
                            setCurrentIndex(index)
                        }}
                        className={`cursor-pointer px-2 ${index === currentIndex ? 'line-clamp-1 border-b-4 border-sky-300  text-sky-500   transition-colors duration-300' : 'text-slate-700'}`}
                        key={index}
                    >
                        <h1 className="text-md font-[600] xl:text-xl ">{mini?.title}</h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Tab
