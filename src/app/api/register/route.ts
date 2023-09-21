import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'
import { connectToDB } from '@/lib/database'
import User from '@/models/User'

export const POST = async (request: NextRequest) => {

    try {
        await connectToDB()
        const { name, email, password } = await request.json()
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, password: hashedPassword })
        return new NextResponse(JSON.stringify(user), {
            status: 201
        })
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: 'Some error happened' }), {
            status: 500
        })
    }
}