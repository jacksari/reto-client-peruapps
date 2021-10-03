import React from 'react';
import { useRouter } from 'next/router'
import Link
    from "next/link";

function SidebarLink({url, title, children}) {

    const router = useRouter()
    return (
        <Link href={url}>
            <a className={router.pathname === url ? 'link active': 'link'}>
                { children }
                <p>{ title }</p>
            </a>
        </Link>
    );
}

export default SidebarLink;
