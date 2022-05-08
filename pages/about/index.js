import Link from "next/link"

export default function About(){
    return(
        <div>
            <h1>This is About me</h1>
            <br />
            <Link href="/about/portfolio"><a>portfolio</a></Link>
        </div>
    )
}