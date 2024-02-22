import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function Title(props: any) {
    const { name, url, line, className = '', icon } = props
    return (
        <div className={`text-4xl font-[700] ${className}`}>
            <div className="flex gap-3">
                {name}
                {icon && <Icon className="animate-bounce" icon={icon} />}
            </div>
            {line && <div className="h-1 w-10 bg-sky-500"></div>}
        </div>
    )
}

export default Title
