"use client"
import { Button } from "@/components/ui/button"
import styles from "./subscribe.module.css"

import kid1 from "../../public/storeImage/kid1.webp"
import kid2 from "../../public/storeImage/kid2.webp"
import kid3 from "../../public/storeImage/kid3.webp"
import kid4 from "../../public/storeImage/kid4.webp"
import old1 from "../../public/storeImage/old1.jpeg"
import old2 from "../../public/storeImage/old2.jpeg"
import adult1 from "../../public/storeImage/adult1.webp"
import adult2 from "../../public/storeImage/adult2.webp"

import kidIcon from "../../public/storeImage/kidIcon.jpg"
import adultIcon from "../../public/storeImage/adultIcon.jpg"
import oldIcon from "../../public/storeImage/oldIcon.jpg"

import Image, { StaticImageData } from "next/image"
import { useEffect, useRef, useState } from "react"


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { supabase } from "../utils/supabase/client"


import { ToastContainer, toast } from 'react-toastify';

export default function SubscribePage() {

    const kidImages = [kid1, kid2, kid3, kid4];
    const adultImages = [adult1, adult2];
    const oldImages = [old1, old2];
    const [currentModel, setDisplayModel] = useState<StaticImageData[]>(adultImages);
    const [displayBigImage, setDisplayBigImage] = useState<StaticImageData>(currentModel[0]);

    useEffect(() => {
        setDisplayBigImage(currentModel[0])
    }, [currentModel])

    const [dialogOpen, setDialogOpen] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const submitEmail = async () => {
        const email = inputRef.current?.value || "no email";
        const { error } = await supabase
            .from('Emails table for lifecatch')
            .insert({ email: email })
        setDialogOpen(false);
        toast.success('Subscribed to Lifecatch!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            // progress: undefined,
            theme: "dark",
            });

    }
    return (<>
        <div className={styles.main}>
            <ToastContainer />
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTitle />
                <DialogDescription />
                <DialogContent className={styles.subscribeDialogMain}>
                    <div className={styles.dialogContent}>

                        <h1>Enter your email to be notified of our next update</h1>
                        <Input ref={inputRef} placeholder="......propertiesinegypt@gmail.com" />
                    </div>
                    <Button onClick={() => {

                        submitEmail()
                    }}>Subscribe</Button>
                </DialogContent>
            </Dialog>

            <div className={styles.nav}>Lifecatch store</div>
            <div className={styles.storeArea}>
                <div className={styles.imageArea}>
                    <div className={styles.imagesTab}>
                        {currentModel.map((imageData) => (
                            <Image key={currentModel.indexOf(imageData)} src={imageData} alt={String(currentModel.indexOf(imageData))} onClick={() => setDisplayBigImage(imageData)} />
                        ))}
                    </div>
                    <div className={styles.bigImage}>
                        <Image unoptimized src={displayBigImage} alt="internet error" />
                    </div>
                    <div className={styles.modelSwitcher}>
                        <Image src={kidIcon} alt="kid" onClick={() => { setDisplayModel(kidImages) }} />
                        <Image src={adultIcon} alt="adult" onClick={() => { setDisplayModel(adultImages) }} />
                        <Image src={oldIcon} alt="old" onClick={() => { setDisplayModel(oldImages) }} />
                    </div>
                    <Button className={styles.subscribeBtn} onClick={() => { setDialogOpen(true) }}>Subscribe</Button>
                </div>
                <div className={styles.detailsArea}>
                    <h1>Wearable full body jacket</h1>
                    <p>Introducing the Smart Airbag Jacket, a cutting-edge safety innovation designed to provide instant protection in case of falls or accidents. Engineered with advanced motion sensors, this high-tech jacket detects sudden impacts and inflates within milliseconds, creating a protective air cushion around your torso, neck, and spine to minimize injury.
                    </p>
                    <ul>
                        <li>✅ Intelligent Fall Detection - Uses precision motion sensors to instantly detect falls and activate the airbag.
                        </li>
                        <li>✅ Ultra-Fast Inflation - Deploys in milliseconds to shield vital areas from impact.
                        </li>
                        <li>✅ Lightweight & Stylish - Designed for everyday wear with breathable, durable materials.
                        </li>
                        <li>✅ Rechargeable & Reusable - Simply replace the CO₂ cartridge to reset after deployment.
                        </li>
                        <li>✅ Weather-Resistant - Built to withstand different climates, keeping you safe in all conditions.</li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}