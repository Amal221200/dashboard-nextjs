import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next'
import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        // request.nextauth.token
        if (request.nextUrl.pathname.startsWith("/dashboard")
            && !request.nextauth.token) {
            console.log(request.nextauth.token);
            return NextResponse.redirect(
                new URL("/login", request.url)
            )
        }
    }, {
    callbacks: {
        authorized({ token }) {
            return !!token
        },
    }
}
)

// export const middleware = async (request: NextRequest) => {
//     const session = await getServerSession()
//     console.log(session);

//     if (session?.user) {
//         return NextResponse.redirect(new URL('/login', request.url), {
//             status: 302
//         })
//     }
// }

export const config = {
    matcher: ["/dashboard/:path*"]
}