import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/sessions";
import { cookies } from 'next/headers'

const publicRoutes = ['/login']

export default async function middleware(req:NextRequest) {
    const path = req.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    const cookieStore = await cookies()
    
    const cookie = cookieStore.get('session')?.value
    const session = await decrypt(cookie)

    if(isPublicRoute && session?.userId) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    return NextResponse.next()
}

