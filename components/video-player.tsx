"use client"

import { useState } from "react"
import { Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface VideoPlayerProps {
  title: string
  description: string
  videoUrl: string
}

export default function VideoPlayer({ title, description, videoUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-video relative">
          {isPlaying ? (
            <iframe
              src={videoUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          ) : (
            <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white p-6">
              <div className="text-center max-w-2xl mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
                <p className="text-white/80">{description}</p>
              </div>
              <Button
                size="lg"
                onClick={() => setIsPlaying(true)}
                className="rounded-full h-16 w-16 p-0 flex items-center justify-center"
              >
                <Play className="h-8 w-8" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
          )}
          {!isPlaying && (
            <img src="/images/refugi01.webp" alt={title} className="w-full h-full object-cover" />
          )}
        </div>
      </CardContent>
    </Card>
  )
}
