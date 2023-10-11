import { BsTags } from "react-icons/bs";
import { LiaWalletSolid } from "react-icons/lia";
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiOutlineLike } from 'react-icons/ai'
import { LuUsers2 } from 'react-icons/lu'
import { IoLogoDiscord } from 'react-icons/io5'
import { FiPieChart } from 'react-icons/fi';
import { BsGear, BsTagsFill } from 'react-icons/bs';
import { AiOutlineSchedule } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { TopContentType, socialLinkType } from "./types";

export const sideBarLinks = [
    {
        href: "/",
        Icon: FiPieChart,
        title: 'DashBoard',
    },
    {
        href: "/",
        Icon: BsTagsFill,
        title: 'Transactions',
    },
    {
        href: "/",
        Icon: AiOutlineSchedule,
        title: 'Schedules',
    },
    {
        href: "/",
        Icon: CgProfile,
        title: 'Users',
    },
    {
        href: "/",
        Icon: BsGear,
        title: 'Settings',
    },
]


export const regexPattern = {
    email: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
}


export const socialLinks: socialLinkType[] = [
    {
        href: 'https://github.com/',
        title: 'Github',
        icon: AiFillGithub,
        // width: 44,
        // height: 44
    },
    {
        href: 'https://www.twitter.com/',
        title: 'Twitter',
        icon: AiFillTwitterCircle,
        // width: 42,
        // height: 41
    },
    {
        href: 'https://www.linkedin.com/',
        title: 'Linkedin',
        icon: AiFillLinkedin,
        // width: 48,
        // height: 48
    },
    {
        href: 'https://www.discord.com/',
        title: 'Discord',
        icon: IoLogoDiscord,
        // width: 50,
        // height: 48
    },
]

export const toSnakeCase = (name: string) => name.toLowerCase().replace(/[\s]/g, "_")

export const TopContents: TopContentType[] = [
    {
        iconBg: 'bg-[#7FCD93]',
        icon: LiaWalletSolid,
        title: 'Total Revenue',
        name: 'revenue',
        data: 2_129_430,
        profit: 2.5,
        currency: true
    },
    {
        iconBg: 'bg-[#DEBF85]',
        icon: BsTags,
        title: 'Total Transactions',
        name: 'transactions',
        data: 1_520,
        profit: 1.7
    },
    {
        iconBg: 'bg-[#ECA4A4]',
        icon: AiOutlineLike,
        title: 'Total Likes',
        name: 'likes',
        data: 9_721,
        profit: 1.4,
    },
    {
        iconBg: 'bg-[#A9B0E5]',
        icon: LuUsers2,
        title: 'Total Constants',
        name: 'users',
        data: 9_721,
        profit: 4.2
    },
]

export const GraphDataLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4']

export const GraphDataSets = [
    { label: 'Guest', data: [231, 225, 283, 91, 445], backgroundColor: '#98D89E', barThickness: 38, borderRadius: 5 },
    { label: 'User', data: [213, 71, 352, 180, 271], backgroundColor: '#EE8484', barThickness: 38, borderRadius: 5 }
]