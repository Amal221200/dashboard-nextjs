import { AuthOptions } from 'next-auth';
import bcrypt from 'bcrypt';
import GoogleProvider from 'next-auth/providers/google';
import { GoogleProfile } from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import { connectToDB } from './database';

const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            // profile(profile: GoogleProfile) {
            //     return {
            //         ...profile,
            //         name: profile.name,
            //         email: profile.email,
            //         image: profile.picture,
            //         // id: profile?.id.toString()
            //         id: profile.aud
            //     }
            // },
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

                // console.log(credentials)

                const user = await User.findOne({ email: credentials.email });

                if (!user || !user?.password) {
                    throw new Error('Invalid credentials');
                }
                // console.log(user)

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
            const sessionUser = await User.findOne({
                email: session.user?.email
            })


            if (session.user) {
                session.user = { ...sessionUser, id: sessionUser._id.toString() };
            }

            return session;
        },
        async signIn({ user, account, profile, email, credentials }) {
            try {
                if (!profile) return true
                await connectToDB()
                // check if a user already exists
                const userExists = await User.findOne({ email: profile?.email })
                // if not create a new user
                if (!userExists) {
                    await User.create({
                        email: profile?.email,
                        name: profile?.name,
                        image: profile?.picture
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