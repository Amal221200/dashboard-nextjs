import { IconType } from "react-icons"


export interface BasicFCProps {
    children: React.ReactNode
}

export interface user {
    basic: {
        name: string,
        email: string,
        phone: string,
    },
    socialLinks: {
        instagram: string,
        youtube: string,
    }
}

export interface socialLinkType {
    href: string,
    title: string,
    icon: IconType,
}

export interface ServerComponentsProps {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export interface TopContentType {
    name: string,
    iconBg: string,
    icon: IconType,
    title: string,
    data: number,
    profit: number,
    currency?: boolean
}
