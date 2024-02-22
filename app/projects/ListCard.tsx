import React from 'react'
import pet_1 from '@/public/project_img/admin_pet_1.png'
import pet_2 from '@/public/project_img/admin_pet_2.png'
import pet_3 from '@/public/project_img/admin_pet_3.png'

import cisesco_1 from '@/public/project_img/cisesco_1.png'
import cisesco_2 from '@/public/project_img/cisesco_2.png'
import cisesco_3 from '@/public/project_img/cisesco_3.png'
import cisesco_4 from '@/public/project_img/cisesco_4.png'
import cisesco_5 from '@/public/project_img/cisesco_5.png'

import lalamove_1 from '@/public/project_img/lalamove_1.png'
import lalamove_2 from '@/public/project_img/lalamove_2.png'
import lalamove_3 from '@/public/project_img/lalamove_3.png'
import lalamove_4 from '@/public/project_img/lalamove_4.png'
import lalamove_5 from '@/public/project_img/lalamove_5.png'

import pet_client_1 from '@/public/project_img/pet_client_1.png'
import pet_client_2 from '@/public/project_img/pet_client_2.png'

import sus_1 from '@/public/project_img/sus_1.png'
import sus_2 from '@/public/project_img/sus_2.png'
import sus_3 from '@/public/project_img/sus_3.png'
import sus_4 from '@/public/project_img/sus_4.png'
import sus_5 from '@/public/project_img/sus_5.png'

import habicom from '@/public/project_img/habi.png'

import Card from '@/components/ui/Card'

const LIST_CARD_PROJECT = [
    {
        default_img: pet_1,
        img_src: [
            { url: pet_1, alt: '' },
            { url: pet_2, alt: '' },
            { url: pet_3, alt: '' },
        ],
        title: 'Ecommerce Admin Page',
        desc: '',
        link: '',
    },
    {
        default_img: habicom,
        img_src: [{ url: habicom, alt: '' }],
        title: 'Habicom Digital Marketing',
        desc: '',
        link: '',
    },
    {
        default_img: pet_client_1,
        img_src: [
            { url: pet_client_1, alt: '' },
            { url: pet_client_2, alt: '' },
        ],
        title: 'Ecommerce Pet Client Page',
        desc: '',
        link: '',
    },
    {
        default_img: lalamove_2,
        img_src: [
            { url: lalamove_1, alt: '' },
            { url: lalamove_2, alt: '' },
            { url: lalamove_3, alt: '' },
            { url: lalamove_4, alt: '' },
            { url: lalamove_5, alt: '' },
        ],
        title: 'Ecommerce Clothes Cisesco',
        desc: '',
        link: '',
    },
    {
        default_img: cisesco_1,
        img_src: [
            { url: cisesco_1, alt: '' },
            { url: cisesco_2, alt: '' },
            { url: cisesco_3, alt: '' },
            { url: cisesco_4, alt: '' },
            { url: cisesco_5, alt: '' },
        ],
        title: 'Ecommerce Clothes Cisesco',
        desc: '',
        link: '',
    },
    {
        default_img: sus_1,
        img_src: [
            { url: sus_1, alt: '' },
            { url: sus_2, alt: '' },
            { url: sus_3, alt: '' },
            { url: sus_4, alt: '' },
            { url: sus_5, alt: '' },
        ],
        title: 'Karaoke SUS Management',
        desc: '',
        link: '',
    },
]
function ListCard() {
    return (
        <>
            {LIST_CARD_PROJECT.map((cart_item, index) => (
                <Card className="bg-slate-50" key={index} title={cart_item.title} url={cart_item.default_img} />
            ))}
        </>
    )
}

export default ListCard
