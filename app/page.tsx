'use client'
import Sidebar from '@/components/Sidebar'
import Title from '@/components/ui/Title'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
const LIST_DO = [
    {
        icon: 'tabler:ux-circle',
        title: 'Ui/Ux Design',
        desc: 'lorem',
        bgColor: '#fff4f4',
    },
    {
        icon: 'icon-park-twotone:database-network',
        title: 'Database Design',
        desc: 'lorem',
        bgColor: '#eef5fa',
    },
    {
        icon: 'logos:nodejs-icon',
        title: 'Backend developer',
        desc: 'lorem',
        bgColor: '#eef5fa',
    },
    {
        icon: 'logos:google-developers',
        title: 'Frontend developer',
        desc: 'lorem',
        bgColor: '#fff4f4',
    },
]
export default function Home() {
    return (
        <section>
            <Title name="Welcome!" icon="noto-v1:waving-hand" className="mb-5 mt-2" line />
            <div className="text-lg text-slate-500">
                Im Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print
                media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
            </div>
            <div className="my-5 text-lg text-slate-500">
                My aim is to bring across your message and identity in the most creative way. I created web design for
                many famous brand companies.
            </div>
            <Title name="What I Do" className="mb-5 mt-2" />
            <div className="flex flex-wrap gap-[30px]">
                {LIST_DO.map((item: any, index: number) => (
                    <div
                        key={index}
                        className=" flex h-40  gap-3 rounded-md p-5 "
                        style={{ background: item.bgColor, width: 'calc(50% - 30px)' }}
                    >
                        <div>
                            <Icon icon={item.icon} width={40} />
                        </div>
                        <div>
                            <h2 className="mb-3 text-xl font-[600]">{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Title name="Contact me" className="mb-5 mt-10" />
            <div className=" p-7">
                <form className="flex flex-wrap gap-7">
                    <div className="flex w-[48%] flex-col gap-2">
                        <label className="text-xl font-[700] text-slate-700" htmlFor="input">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="rounded-2xl border-2 border-sky-500 p-4 text-xl text-sky-700 outline-none"
                            type="text"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="flex w-[48%] flex-col gap-2">
                        <label className="text-xl font-[700] text-slate-700" htmlFor="input">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="rounded-2xl border-2 border-sky-500 p-4 text-xl text-sky-700 outline-none"
                            type="text"
                            placeholder="Enter your Name"
                        />
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <label className="text-xl font-[700] text-slate-700" htmlFor="input">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            className="rounded-2xl border-2 border-sky-500 p-4 text-xl text-sky-700 outline-none"
                            name=""
                            id=""
                            cols={30}
                            rows={10}
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div className="flex gap-5">
                        <button
                            type="reset"
                            className="rounded-2xl border-2 border-orange-200 bg-orange-400 px-7 py-3 text-lg font-[600] text-white shadow-lg shadow-red-100"
                        >
                            Clear
                        </button>
                        <a
                            href="#_"
                            className="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-sky-500 px-12 py-3 text-lg font-medium text-sky-500 hover:bg-gray-50 hover:text-white"
                        >
                            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-sky-500 opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
                            <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    ></path>
                                </svg>
                            </span>
                            <span className="relative">Send message</span>
                        </a>
                        {/* <button
                            type="submit"
                            className="rounded-2xl border-2 border-sky-200 bg-sky-500 px-7 py-3 text-lg font-[600] text-white shadow-lg shadow-purple-200"
                        >
                            Send message
                            <Icon
                                className="ml-2 inline-block"
                                width={20}
                                icon="material-symbols:send-outline-rounded"
                            />
                        </button> */}
                    </div>
                </form>
            </div>
        </section>
    )
}
