'use client'
import pet_1 from '@/public/project_img/admin_pet_1.png'
import pet_2 from '@/public/project_img/admin_pet_2.png'
import pet_3 from '@/public/project_img/admin_pet_3.png'

import cisesco_1 from '@/public/project_img/cisesco_1.png'
import cisesco_2 from '@/public/project_img/cisesco_2.png'
import cisesco_3 from '@/public/project_img/cisesco_3.png'
import cisesco_4 from '@/public/project_img/cisesco_4.png'
import cisesco_5 from '@/public/project_img/cisesco_5.png'
import cisesco_6 from '@/public/project_img/cisesco_6.png'
import cisesco_7 from '@/public/project_img/cisesco_7.png'

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
import { redirect, useRouter } from 'next/navigation'
const ICON_TECH = {
    i_react: 'skill-icons:react-dark',
    i_node: 'logos:nodejs',
    i_mongo: 'devicon:mongodb-wordmark',
    i_typescript: 'logos:typescript-icon',
    i_tailwindcss: 'logos:tailwindcss',
    i_sass: 'vscode-icons:file-type-scss2',
    i_mui: 'simple-icons:mui',
    i_ant_design: 'logos:ant-design',
    i_redux: 'logos:redux',
    i_java: 'skill-icons:java-light',
    i_sql: 'carbon:sql',
    i_html: 'logos:html-5',
    i_css: 'devicon:css3-wordmark',
    i_js: 'devicon:javascript',
}
export const LIST_CARD_PROJECT = [
    {
        default_img: pet_1,
        img_src: [
            { url: pet_1, alt: 'This alt image project' },
            { url: pet_2, alt: 'This alt image project', isMobile: true },
            { url: pet_3, alt: 'This alt image project' },
        ],
        title: 'Ecommerce Admin Page',
        desc: '',
        link: '',
        icon_tech: [
            ICON_TECH.i_react,
            ICON_TECH.i_redux,
            ICON_TECH.i_node,
            ICON_TECH.i_mui,
            ICON_TECH.i_tailwindcss,
            ICON_TECH.i_sass,
            ICON_TECH.i_mongo,
            ICON_TECH.i_node,
        ],
    },
    {
        default_img: habicom,
        img_src: [{ url: habicom, alt: 'This alt image project' }],
        title: 'Habicom Digital Marketing',
        desc: '',
        link: '',
        icon_tech: [ICON_TECH.i_css, ICON_TECH.i_html, ICON_TECH.i_js],
    },
    {
        default_img: pet_client_1,
        img_src: [
            { url: pet_client_1, alt: 'This alt image project' },
            { url: pet_client_2, alt: 'This alt image project', isMobile: true },
        ],
        title: 'Ecommerce Pet Client Page',
        desc: '',
        link: '',
        icon_tech: [
            ICON_TECH.i_react,
            ICON_TECH.i_redux,
            ICON_TECH.i_node,
            ICON_TECH.i_sass,
            ICON_TECH.i_mongo,
            ICON_TECH.i_node,
        ],
    },
    {
        default_img: lalamove_2,
        img_src: [
            { url: lalamove_1, alt: 'This alt image project' },
            { url: lalamove_2, alt: 'This alt image project' },
            { url: lalamove_3, alt: 'This alt image project' },
            { url: lalamove_4, alt: 'This alt image project', isMobile: true },
            { url: lalamove_5, alt: 'This alt image project' },
        ],
        title: 'Lalamove music app',
        desc: '',
        link: '',
        icon_tech: [
            ICON_TECH.i_react,
            ICON_TECH.i_ant_design,
            ICON_TECH.i_typescript,
            ICON_TECH.i_tailwindcss,
            ICON_TECH.i_sass,
            ICON_TECH.i_redux,
        ],
    },
    {
        default_img: cisesco_1,
        img_src: [
            { url: cisesco_1, alt: 'This alt image project' },
            { url: cisesco_2, alt: 'This alt image project' },
            { url: cisesco_3, alt: 'This alt image project' },
            { url: cisesco_4, alt: 'This alt image project' },
            { url: cisesco_5, alt: 'This alt image project' },
            { url: cisesco_6, alt: 'This alt image project', isMobile: true },
            { url: cisesco_7, alt: 'This alt image project' },
        ],
        title: 'Ecommerce Clothes Cisesco',
        desc: '',
        link: '',
        icon_tech: [
            ICON_TECH.i_react,
            ICON_TECH.i_redux,
            ICON_TECH.i_tailwindcss,
            ICON_TECH.i_sass,
            ICON_TECH.i_typescript,
        ],
    },
    {
        default_img: sus_1,
        img_src: [
            { url: sus_1, alt: 'This alt image project' },
            { url: sus_2, alt: 'This alt image project' },
            { url: sus_3, alt: 'This alt image project' },
            { url: sus_4, alt: 'This alt image project' },
            { url: sus_5, alt: 'This alt image project' },
        ],
        title: 'Karaoke SUS Management',
        desc: '',
        link: '',
        icon_tech: [ICON_TECH.i_java, ICON_TECH.i_sql],
    },
]
function ListCard() {
    const router = useRouter()

    return (
        <>
            {LIST_CARD_PROJECT.map((cart_item, index) => (
                <Card
                    className="bg-slate-50"
                    key={index}
                    title={cart_item.title}
                    url={cart_item.default_img}
                    index={index}
                />
            ))}
        </>
    )
}

export default ListCard
