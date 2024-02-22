'use client'
import Title from '@/components/ui/Title'
import React from 'react'
import { Icon } from '@iconify/react'

function page() {
    return (
        <div>
            <Title line name="About me" />
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maiores vero blanditiis adipisci aut
                voluptatum iste laboriosam nulla velit explicabo omnis ut, voluptate illo autem eos laborum qui amet
                voluptatibus?
            </span>
            <div className="my-5 flex flex-wrap gap-7">
                <div className="lg:w-1/2-gap-7 mx-5 w-full lg:mx-0">
                    <h2 className="mb-5 mt-3 text-3xl font-[500]">
                        <Icon icon="zondicons:education" width={40} className="mr-3 inline-block text-sky-600" />
                        Education
                    </h2>
                    <div className="my-7 h-44 rounded-md bg-amber-100 p-7 ">
                        <h1 className="mb-3 text-gray-600">2021 - Present </h1>{' '}
                        <h1 className="text-xl font-[600]">
                            Student in The Industrial University of Ho Chi Minh City (IUH){' '}
                        </h1>
                        <h1 className="mt-4 text-gray-700">Go Vap, Nguyen Van Bao, HCM City</h1>
                    </div>
                    <div className="my-7 h-44 rounded-md bg-amber-100 p-7">
                        <h1 className="mb-3 text-gray-600">8/2022 - 6/2023 </h1>{' '}
                        <h1 className="text-xl font-[600]">
                            Achieved a 70% scholarship majoring in software engineering
                        </h1>
                        <h1 className="mt-4 text-gray-700">Semester 5, IUH School</h1>
                    </div>
                    <div className="my-7 h-44 rounded-md bg-amber-100 p-7">
                        <h1 className="mb-3 text-gray-600">4/2023 - 6/2023 </h1>{' '}
                        <h1 className="text-xl font-[600]">Champion of WEBDEV ADVENTURE 2023</h1>
                        <h1 className="mt-4 text-gray-700">WebDev Studios, VNUHCM - UIT</h1>
                    </div>
                </div>
                <div className=" w-1/2 ">
                    <h2 className="mb-5 mt-3 text-3xl font-[500]">
                        <Icon icon="emojione-v1:handbag" width={40} className="mr-3 inline-block " />
                        Experience
                    </h2>
                    <div className="my-7 h-44 rounded-md bg-blue-100 p-5">
                        <h1 className="mb-3 text-gray-600">5/2022 - 7/2022 </h1>{' '}
                        <h1 className="text-xl font-[600]">Freelance Frontend Developer JS/Bootstrap </h1>
                        <h1 className="mt-4 text-gray-700">Vinaole - Phu My Huong, Q.7, HCM City</h1>
                    </div>
                    <div className="my-7 h-44 rounded-md bg-blue-100 p-5">
                        <h1 className="mb-3 text-gray-600">9/2022 - 6/2023 </h1>{' '}
                        <h1 className="text-xl font-[600]">Frontend Developer ReactJs/TypeScripts </h1>
                        <h1 className="mt-4 text-gray-700">Build a ecommerce app Accessories</h1>
                    </div>
                    <div className="my-7 h-44 rounded-md bg-blue-100 p-5">
                        <h1 className="mb-3 text-gray-600">9/2023 - 12/2023 </h1>
                        <h1 className="text-xl font-[600]">Technical Web collaborator in CodeMely</h1>
                        <h1 className="mt-4 text-gray-700">Gen 0.5</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
