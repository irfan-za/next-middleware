import { NextResponse } from "next/server"


export default function middleware(req){
    const { token } =  req.cookies;
    const url= req.nextUrl.clone()
    const res=NextResponse.next()

    console.log(url.pathname)
    console.log(token)
    console.log('response 👉',res)

    // res.cookie("session_dari_server", "horeee",{
    //     httpOnly: true
    // jika httpOnly: true maka cookie-nya hanya bisa diakses diserver. tidak bisa di client, spt(console,dan codingan client)
    // })
    // return res

    if(token && url.pathname === "/"){
        console.log("PPPP")
        url.pathname = "/about"
        return NextResponse.redirect(url)
    }
    if(url.pathname === "/yow"){
        return NextResponse.rewrite(url+"/404")
    }

}
