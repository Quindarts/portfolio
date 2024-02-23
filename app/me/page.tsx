'use client'
import Title from '@/components/ui/Title'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import DetailPage from '../../components/details/page'
const screen_mobile = 1280

function MePage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < screen_mobile)
    useEffect(() => {
        if (typeof window != 'undefined') {
            const handleResize = () => {
                setIsMobile(window.innerWidth < screen_mobile)
            }
            window.addEventListener('resize', handleResize)

            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, [isMobile])
    return (
        <>
            {isMobile && <DetailPage />}
            <div className="mx-auto w-full px-5">
                <Title line name="About me" className=" my-3 sm:my-5" />
                <span className="text-md my-3 sm:my-5 sm:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maiores vero blanditiis adipisci
                    aut voluptatum iste laboriosam nulla velit explicabo omnis ut, voluptate illo autem eos laborum qui
                    amet voluptatibus?
                </span>
                <div className="my-3 flex flex-wrap gap-7 sm:my-5">
                    <div className="w-full md:mx-0 md:w-1/2-gap-7">
                        <h2 className="mb-5 mt-3 text-3xl font-[500]">
                            <Icon icon="zondicons:education" width={40} className="mr-3 inline-block text-sky-600" />
                            Education
                        </h2>
                        <div className="my-7 h-auto rounded-md bg-amber-100 p-3 sm:p-5 md:h-64 xl:h-44 xl:p-7 ">
                            <h1 className="mb-3 text-gray-600">2021 - Present </h1>{' '}
                            <h1 className="text-md font-[600]">
                                Student in The Industrial University of Ho Chi Minh City (IUH){' '}
                            </h1>
                            <h1 className="mt-4 text-gray-700">Go Vap, Nguyen Van Bao, HCM City</h1>
                        </div>
                        <div className="my-7 h-auto rounded-md bg-amber-100 p-3 sm:p-5 md:h-64 xl:h-44 xl:p-7">
                            <h1 className="mb-3 text-gray-600">8/2022 - 6/2023 </h1>{' '}
                            <h1 className="text-md font-[600]">
                                Achieved a 70% scholarship majoring in software engineering
                            </h1>
                            <h1 className="mt-4 text-gray-700">Semester 5, IUH School</h1>
                        </div>
                        <div className="my-7 h-auto rounded-md bg-amber-100 p-3 sm:p-5 md:h-64 xl:h-44 xl:p-7">
                            <h1 className="mb-3 text-gray-600">4/2023 - 6/2023 </h1>{' '}
                            <h1 className="text-md font-[600]">Champion of WEBDEV ADVENTURE 2023</h1>
                            <h1 className="mt-4 text-gray-700">WebDev Studios, VNUHCM - UIT</h1>
                        </div>
                    </div>
                    <div className=" w-full md:mx-0 md:w-1/2-gap-7 ">
                        <h2 className="mb-5 text-3xl font-[500] xl:mt-3">
                            <Icon icon="emojione-v1:handbag" width={40} className="mr-3 inline-block " />
                            Experience
                        </h2>
                        <div className="my-7 h-auto rounded-md bg-blue-100 p-5 md:h-64 xl:h-44">
                            <h1 className="mb-3 text-gray-600">5/2022 - 7/2022 </h1>{' '}
                            <h1 className="text-md font-[600]">Freelance Frontend Developer JS/Bootstrap </h1>
                            <h1 className="mt-4 text-gray-700">Vinaole - Phu My Huong, Q.7, HCM City</h1>
                        </div>
                        <div className="my-7 h-auto rounded-md bg-blue-100 p-5 md:h-64 xl:h-44">
                            <h1 className="mb-3 text-gray-600">9/2022 - 6/2023 </h1>{' '}
                            <h1 className="text-md font-[600]">Frontend Developer ReactJs/TypeScripts </h1>
                            <h1 className="mt-4 text-gray-700">Build a ecommerce app Accessories</h1>
                        </div>
                        <div className="my-7 h-auto rounded-md bg-blue-100 p-5 md:h-64 xl:h-44">
                            <h1 className="mb-3 text-gray-600">9/2023 - 12/2023 </h1>
                            <h1 className="text-md font-[600]">Technical Web collaborator in CodeMely</h1>
                            <h1 className="mt-4 text-gray-700">Gen 0.5</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MePage
