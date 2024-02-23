'use client'
import Card from '@/components/ui/Card'
import Title from '@/components/ui/Title'
import React from 'react'
import ListCard from './ListCard'
import Panigation from '@/components/Panigation'

function ProjectsPage() {
    return (
        <div className="mx-auto w-full px-5">
            <Title className="my-5" line name="Projects" />
            <p className="mb-8 mt-5 text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus tempore doloremque voluptate
                reprehenderit ullam, commodi fugiat mollitia ad eaque aspernatur nam ea velit, incidunt magnam saepe
                unde architecto magni!
            </p>
            <div className="list__card flex w-full flex-wrap items-center gap-5 lg:gap-7 xl:gap-4">
                <ListCard />
                <div className="mx-auto w-full">
                    <Panigation />
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage
