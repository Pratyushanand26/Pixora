"use client";

import JSZip from "jszip";
import axios from "axios";
import { useState, useCallback } from "react";
import {
  Card,
  CardContent,
} from "./card";
import { Button } from "./button";
import { Progress } from "./progress";
import { BACKEND_URL, CLOUDFARE_URL} from "../../config";
import { cn } from "@/lib/utils";
import { CloudUploadIcon } from "lucide-react";

export function UploadModal({onUploadDone}:{
    onUploadDone:(zipUrl:string)=>void
}) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-200 dark:border-zinc-800">
        <CloudUploadIcon className="w-16 h-16 text-zinc-500 dark:text-zinc-400" />
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            const input = document.createElement("input")
            input.type = "file"
            input.accept = "image/*"
            input.multiple = true

            input.onchange = async () => {
              const zip = new JSZip()
              const res = await axios.get(`${BACKEND_URL}/pre-signed-url`)
              const key=res.data.key;
              const url=res.data.url;

              if(input.files){
                 for (const file of input.files) {
                const content = await file.arrayBuffer()
                // add file to zip
                zip.file(file.name, content)
              }
              const content = await zip.generateAsync({ type: "blob" })
              const formData = new FormData()
              formData.append("file", content)
              formData.append("key", url)
              const res = await axios.put(url, formData)     
              onUploadDone(`${CLOUDFARE_URL}/${key}`)        
              } 


              // TODO: axios.put(presignedUrl, formData) or similar
            }

            input.click()
          }}
        >
          Select Files
        </Button>
      </CardContent>
    </Card>
  )
}