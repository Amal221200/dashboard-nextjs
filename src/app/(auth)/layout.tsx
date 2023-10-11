import { BasicFCProps } from '@/lib/types';
import Link from 'next/link'
import { socialLinks } from '@/lib/constants';

const AuthLayout: React.FC<BasicFCProps> = ({ children }) => {
    return (
        <>
            {/* Deskop Form */}
            <div className="md:flex flex-row gap-2 h-full hidden">
                <div className='bg-sidebar_gradient flex-1 relative flex flex-col justify-between text-white overflow-hidden'>
                    <h6 className="flex-1 logo w-full text-xl text-left p-4 font-bold">LOGO</h6>
                    <h1
                        className='flex-1 w-full 2xl:text-7xl text-4xl lg:text-center text-left font-bold lg:pr-4 pl-2'>Board. </h1>
                    <div className='flex-1 flex lg:gap-6 gap-4 lg:justify-center justify-start items-center px-5'>
                        {
                            socialLinks.map((socialLink, ind) => (
                                <Link key={ind} href={socialLink.href} className='flex items-center lg:w-[44px] w-[38px] lg:h-[44px] h-[38px] text-white'>
                                    <socialLink.icon className='w-full h-full' />
                                </Link>
                            ))
                        }
                    </div>
                    <div className='absolute h-full w-[200px] lg:skew-x-[-9deg] skew-x-[-6deg] top-0 right-[-115px] bg-primary' />
                </div>
                <div className="flex-1 flex justify-center items-center">
                    {children}
                </div>
            </div>
            {/* Mobile Form */}

            <div className='md:hidden w-full bg-secondary_gradient flex items-center justify-center'>
                <main>
                    <header className='flex flex-col gap-1 mb-2 text-white'>
                        <h6 className="flex-1 logo w-full text-xl text-left font-bold">LOGO</h6>
                        <h1
                            className='flex-1 w-full 2xl:text-7xl text-4xl lg:text-center text-left font-bold lg:pr-4'>Board.
                        </h1>
                    </header>
                    {children}
                    <footer className='flex gap-3 w-full justify-center p-4'>
                        {
                            socialLinks.map((socialLink, ind) => (
                                <Link key={ind} href={socialLink.href} className='flex items-center lg:w-[44px] w-[38px] lg:h-[44px] h-[38px] text-white'>
                                    <socialLink.icon className='w-full h-full' />
                                </Link>
                            ))
                        }
                    </footer>
                </main>
            </div>
        </>
    )
}

export default AuthLayout