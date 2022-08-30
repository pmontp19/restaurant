import { h, Component, createRef } from 'preact'
import { useState, useEffect } from 'preact/hooks'

const LazyTube = ({ url, title }) => {
  const [showVideo, setShowVideo] = useState(false)

  let container = createRef()

  function onVideoIntersection(entries) {
    if (!entries || entries.length <= 0) {
      return
    }

    if (entries[0].isIntersecting) {
      setShowVideo(true)
      videoObserver.disconnect()
    }
  }

  const videoObserver = new IntersectionObserver(onVideoIntersection, {
    rootMargin: '100px 0px',
    threshold: 0.25
  })

  useEffect(() => {
    if (window && 'IntersectionObserver' in window) {
      if (container && container.current) {
        videoObserver.observe(container.current)
      }
    } else {
      setShowVideo(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container])

  return (
    <div class="mx-auto aspect-w-16 aspect-h-9 w-11/12" ref={container}>
      {showVideo ? (
        <iframe
          src={url}
          frameBorder="0"
          allowFullScreen
          title={title}
        ></iframe>
      ) : (
        <div class="flex justify-center items-center bg-gray-300 rounded-lg dark:bg-gray-700 animate-pulse">
          <svg
            class="w-12 h-12 text-gray-200 dark:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 384 512"
          >
            <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </div>
  )
}

export default LazyTube
