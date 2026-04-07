import { useState } from 'react'

interface Props {
  imageUrl: string | null
  name: string
}

export function CharacterPortrait({ imageUrl, name }: Props) {
  const [fullscreen, setFullscreen] = useState(false)

  if (!imageUrl) return null

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${name}-portrait.png`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error('[Portrait] Download failed:', err)
    }
  }

  return (
    <>
      <div className="bg-bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden group">
        <div className="relative">
          <img
            src={imageUrl}
            alt={name}
            className="w-full max-h-[600px] object-contain bg-bg-secondary cursor-zoom-in"
            onClick={() => setFullscreen(true)}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
          <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-sm rounded-lg hover:bg-black/80 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Scarica immagine"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Scarica
            </button>
            <button
              onClick={() => setFullscreen(true)}
              className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-sm rounded-lg hover:bg-black/80 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Schermo intero"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              Espandi
            </button>
          </div>
        </div>
      </div>

      {fullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in cursor-zoom-out"
          onClick={() => setFullscreen(false)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] animate-slide-up" onClick={e => e.stopPropagation()}>
            <img
              src={imageUrl}
              alt={name}
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setFullscreen(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
