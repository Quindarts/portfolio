'use client'
import Title from '@/components/ui/Title'
import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import { LIST_CARD_PROJECT } from '../ListCard'
import Image from 'next/image'
import Tab from '@/components/Tab'
import Link from 'next/link'

const screen_mobile = 1280

function ProductDetails(props: any) {
    const { params } = props
    const [currentProject, setCurrenProject] = useState<any>({})
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsMobile(window.innerWidth < screen_mobile)
            }
            window.addEventListener('resize', handleResize)

            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, [isMobile])
    useEffect(() => {
        LIST_CARD_PROJECT.map((item, index) => {
            if (index === parseInt(params.projectId)) {
                setCurrenProject(item)
                return
            }
        })
    }, [])

    return (
        <div className="mx-auto w-full ">
            {currentProject === null ? (
                <h1>Loading....</h1>
            ) : (
                <div>
                    <Link
                        href="/projects"
                        className="sticky top-0 z-50 flex w-full  cursor-pointer items-center bg-white p-3 font-[600] text-slate-600 hover:text-sky-500 xl:hidden"
                    >
                        <Icon width={20} icon="material-symbols:arrow-back-ios" />
                        Go Back
                    </Link>
                    <Tab className="hidden xl:block" />
                    <div className="px-5">
                        <section>
                            <Title
                                name={currentProject.title}
                                // icon="fluent-emoji:light-bulb"
                                className="mb-5 mt-7 w-full text-[18px] sm:text-2xl"
                            />
                            <p className="text-md sm:text-xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi saepe commodi molestias
                                obcaecati perspiciatis, suscipit perferendis, dicta in nam natus quam dignissimos!
                                Perspiciatis tempore excepturi id dolores assumenda, molestias quaerat!
                            </p>
                        </section>

                        <section>
                            <h1 id="tech_content" className="text-md my-4 font-bold  text-slate-700 sm:text-xl">
                                Technology use:{' '}
                            </h1>
                            <div className="my-10 flex items-center justify-center gap-5 sm:gap-7">
                                {currentProject?.icon_tech?.map((icon: string, index: number) => (
                                    <Icon width={60} icon={icon} key={index} />
                                ))}
                            </div>
                        </section>
                        <section>
                            <h1 id="feature_content" className="text-md my-4 font-bold  text-slate-700 sm:text-xl">
                                Special Features:{' '}
                            </h1>
                            <div>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui rerum quo minima vitae
                                tempore obcaecati mollitia vel a dolore magni officiis, sint error nesciunt ratione
                                dolores temporibus. Optio, consequuntur impedit. <br />
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui rerum quo minima vitae
                                tempore obcaecati mollitia vel a dolore magni officiis, sint error nesciunt ratione
                                dolores temporibus. Optio, consequuntur impedit.
                                <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui rerum quo minima
                                vitae tempore obcaecati mollitia vel a dolore magni officiis, sint error nesciunt
                                ratione dolores temporibus. Optio, consequuntur impedit.
                                <br />
                            </div>
                        </section>
                        <section>
                            <h1
                                id="app_demo_content"
                                className="my-4 flex text-lg font-bold  text-slate-700 sm:text-xl"
                            >
                                <Icon width={20} icon="logos:web-dev-icon" className="my-1 mr-2" />
                                App demo:
                            </h1>
                            <div className="my-4 flex flex-col items-center justify-center gap-5 xl:my-10">
                                <div className="relative">
                                    <div>
                                        {currentProject?.img_src?.map((img: any, index: number) =>
                                            img?.isMobile === true ? (
                                                <Image
                                                    objectFit="cover"
                                                    key={index}
                                                    className="left-[-50px] top-[-20px] rounded-md shadow-lg shadow-neutral-500 sm:hidden lg:absolute lg:h-[400px] lg:w-[200px] lg:border-2 lg:border-cyan-700 lg:shadow-xl xl:block"
                                                    width={1000}
                                                    height={1000}
                                                    src={img.url}
                                                    alt={img?.alt}
                                                />
                                            ) : (
                                                <>
                                                    <Image
                                                        className="my-4 rounded-md shadow-lg shadow-gray-500"
                                                        objectFit="cover"
                                                        key={index}
                                                        width={900}
                                                        src={img.url}
                                                        alt={img?.alt}
                                                    />
                                                    <p className="text-center italic  text-slate-600">{img.alt}</p>,
                                                </>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetails
