import { useState } from 'react'

interface Props {
  imageUrl: string | null
  name: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses: Record<string, string> = {
  sm: 'w-10 h-10',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
}

export function CharacterAvatar({ imageUrl, name, size = 'md' }: Props) {
  const [expanded, setExpanded] = useState(false)
  const imgSize = sizeClasses[size]

  if (!imageUrl) return null

  return (
    <>
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className={`${imgSize} rounded-full overflow-hidden border-2 border-accent-gold/40 hover:border-accent-gold transition-all hover:shadow-lg hover:shadow-accent-gold/20 cursor-pointer flex-shrink-0`}
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </button>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setExpanded(false)}
        >
          <div className="relative max-w-2xl max-h-[80vh] animate-slide-up" onClick={e => e.stopPropagation()}>
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
