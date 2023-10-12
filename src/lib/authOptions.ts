import { AuthOptions } from 'next-auth';
import bcrypt from 'bcrypt';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import { connectToDB } from './database';
import { Session } from 'next-auth'

interface newSession extends Session {
    id: string
}
const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
                await connectToDB()
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials');
                }

                const user = await User.findOne({ email: credentials.email });


                if (!user || !user?.password) {
                    throw new Error('Invalid credentials');
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isCorrectPassword) {
                    throw new Error('Invalid credentials');
                }

                return user;
            }
        })
    ],
    callbacks: {
        async session({ session }) {
            await connectToDB()
            const sessionUser = await User.findOne({
                email: session.user?.email
            })

            if (session.user) {
                session.user = { ...sessionUser, id: sessionUser._id.toString(), image: sessionUser.image, name: sessionUser.name, email: sessionUser.email, role: sessionUser.role };
            }

            return session;
        },
        async signIn({ user, account, profile, email, credentials }) {
            try {
                if (!profile) return true
                await connectToDB()
                const userExists = await User.findOne({ email: profile?.email })
                // if not create a new user
                if (!userExists) {
                    await User.create({
                        email: user?.email,
                        name: user?.name,
                        image: user?.image
                    })
                }
                return true;
            } catch (error) {
                console.log(error)
                return false;
            }
        }
    },
    session: {
        strategy: 'jwt'
    },
};

export default authOptions;