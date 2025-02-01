"use client"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { supabase } from "../utils/supabase/client";

export default function DownloadComp() {

    const download = async () => {
        const { data } = await supabase
            .storage
            .from('lifecatch')
            .download('Lifecatch.pdf')

        const blob = data;
        if (blob) {

            const blobUrl = URL.createObjectURL(data);

            // ye i copied this section from gpt mind your business

            
            // Create a temporary download link
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = 'Lifecatch.pdf'; // File name for the download
            document.body.appendChild(a);
            a.click(); // Trigger download
            document.body.removeChild(a); // Clean up

            // Revoke the Blob URL to free memory
            URL.revokeObjectURL(blobUrl);
        }
    };

    return (<>
        <Button className='downloadBtn' onClick={() => {
            download();
        }}>Download <Download /></Button>
    </>)
}