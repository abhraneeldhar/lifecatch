"use client"
import { useRouter } from "next/navigation"
import Image, { StaticImageData } from "next/image";
export function ProfileCard({name,role,src,link}:{name: string, src: StaticImageData, link: string, role: string}) {
    const router = useRouter();
    return (
        <div className='profileCard' onClick={(e) => { router.push(link) }}>
            <div className='profileImage'>
                <Image className='profilePicImg' src={src} alt="" />
            </div>
            <h1>{name}</h1>
            <p>{role}</p>
        </div>
    )
}