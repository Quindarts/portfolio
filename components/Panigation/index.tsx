import React from 'react'

function Panigation() {
    return (
        <nav>
            <ul className="list-style-none mx-auto my-5 flex w-56">
                <li>
                    <a className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-sky-500 transition-all duration-300 dark:text-neutral-400">
                        Previous
                    </a>
                </li>
                <li>
                    <a
                        className="relative block rounded bg-sky-100 px-3 py-1.5 text-sm text-sky-600 transition-all duration-300   hover:bg-sky-500 hover:text-white dark:hover:text-white"
                        href="#!"
                    >
                        1
                    </a>
                </li>
                <li aria-current="page">
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm font-medium text-sky-600 transition-all duration-300"
                        href="2"
                    >
                        2
                    </a>
                </li>
                <li>
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-sky-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#!"
                    >
                        3
                    </a>
                </li>
                <li>
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-sky-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#!"
                    >
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Panigation
