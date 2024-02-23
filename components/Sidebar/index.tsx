'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import React from 'react'
function Sidebar({ className = '' }) {
    return (
        <div
            className={`${className} sticky mt-[120px] hidden h-[650px] w-full flex-col gap-5 rounded-2xl bg-white px-6 py-10 xl:top-[140px] xl:block xl:w-96`}
        >
            <div className=" top-[-150px] w-full text-center">
                <div className=" z-20 mx-auto mb-5 mt-[-180px]  h-52 w-52  rounded-2xl bg-slate-200 shadow-md ">
                    <Image
                        className=" rounded-2xl "
                        width={208}
                        height={208}
                        alt="leminhquang-main-avatar"
                        src="/avt.PNG"
                        priority
                    />
                </div>
                <div className=" flex w-full flex-col items-center ">
                    <h2 className=" text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">Le Minh Quang</h2>
                    <h2 className="mt-5 w-52 rounded-xl bg-slate-200 px-5 py-2 font-[600]">FullStack developer</h2>
                    <div className="my-5 flex gap-5">
                        <button className="rounded-md bg-slate-200 px-3 py-3">
                            <Icon width={20} icon="icon-park:facebook" />
                        </button>
                        <button className="rounded-md bg-slate-200 px-3 py-2">
                            <Icon width={20} icon="skill-icons:instagram" />
                        </button>
                        <button className="rounded-md bg-slate-200 px-3 py-2">
                            <Icon width={20} icon="devicon:linkedin" />
                        </button>
                        <button className="rounded-md bg-slate-200 px-3 py-2">
                            <Icon width={20} icon="logos:youtube-icon" />
                        </button>
                    </div>
                    <div className="w-full">
                        <div className=" flex w-full flex-col gap-3 rounded-2xl  bg-slate-200 px-6  py-9">
                            <div className="flex gap-4">
                                <div className="h-11 w-11 rounded-md border-x-slate-600 bg-white object-cover p-2 text-center shadow-md shadow-slate-400 ">
                                    <Icon width="full" icon="bi:phone" className="text-red-400" />
                                </div>
                                <div className="detail text-start">
                                    <h3 className="text-gray-500">Phone</h3>
                                    <h4>0364835692</h4>
                                </div>
                            </div>{' '}
                            <div className="flex gap-4">
                                <div className="h-11 w-11 rounded-md border-x-slate-600 bg-white object-cover p-2 text-center shadow-md shadow-slate-400 ">
                                    <Icon width="full" icon="fxemoji:email" />
                                </div>
                                <div className="detail text-start">
                                    <h3 className="text-gray-500">Email</h3>
                                    <h4>quang82thcspb@gmail.com</h4>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-11 w-11 rounded-md border-x-slate-600 bg-white object-cover p-2 text-center shadow-md shadow-slate-400 ">
                                    <Icon width="full" icon="openmoji:location-indicator-red" />
                                </div>
                                <div className="detail text-start">
                                    <h3 className="text-gray-500">Location</h3>
                                    <h4>Le Loi,Phuong 4,GoVap</h4>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-11 w-11 rounded-md border-x-slate-600 bg-white object-cover p-2 text-center shadow-md shadow-slate-400 ">
                                    <Icon width="full" icon="noto-v1:birthday-cake" />
                                </div>
                                <div className="detail text-start">
                                    <h3 className="text-gray-500">Birthday</h3>
                                    <h4>February 19, 2003</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        href="#_"
                        className="group relative  mt-5 inline-flex items-center justify-start overflow-hidden rounded border-2 border-sky-500 bg-white px-3 py-2 font-medium transition-all hover:bg-white"
                    >
                        <span className="absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded bg-sky-500 transition-all duration-500 ease-out group-hover:mb-32 group-hover:ml-0 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                            Download CV
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
