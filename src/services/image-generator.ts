const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions'
const MODEL_ID = 'google/gemini-2.5-flash-image'

export interface ImageGenerationParams {
  raceName: string
  subraceName?: string
  className: string
}

function buildPrompt(params: ImageGenerationParams): string {
  const { raceName, subraceName, className } = params

  const race = subraceName ? `${subraceName} ${raceName}` : raceName

  return `Ultra realistic DnD character portrait of a ${race} ${className}. Full body heroic pose, dramatic cinematic lighting, dark fantasy art style, highly detailed, professional digital painting, epic composition.`
}

export async function generateCharacterImage(params: ImageGenerationParams): Promise<string | null> {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY
  if (!apiKey) return null

  const prompt = buildPrompt(params)

  try {
    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': window.location.origin,
        'X-Title': 'DnD 5e Character Sheet',
      },
      body: JSON.stringify({
        model: MODEL_ID,
        messages: [{ role: 'user', content: prompt }],
        response_modalities: ['image', 'text'],
      }),
    })

    if (!response.ok) {
      console.error(`[Image Generator] API error: ${response.status}`)
      return null
    }

    const data = await response.json()

    const message = data.choices?.[0]?.message

    // OpenRouter wraps generated images under message.images
    if (message?.images?.[0]?.image_url?.url) {
      return message.images[0].image_url.url
    }

    // Gemini native format: content array with inlineData
    if (message?.content) {
      const contentParts: unknown[] = Array.isArray(message.content) ? message.content : JSON.parse(message.content)
      for (const part of contentParts) {
        if (part && typeof part === 'object' && 'inlineData' in part) {
          const inlineData = part.inlineData as { data?: string; mimeType?: string }
          if (inlineData.data) {
            const mime = inlineData.mimeType || 'image/png'
            return `data:${mime};base64,${inlineData.data}`
          }
        }
      }
    }

    // Legacy fallbacks
    if (data.image_url) return data.image_url
    if (data.data?.[0]?.url) return data.data[0].url
    if (data.data?.[0]?.b64_json) return `data:image/png;base64,${data.data[0].b64_json}`

    console.warn('[Image Generator] Unexpected response format', JSON.stringify(data).slice(0, 500))
    return null
  } catch (error) {
    console.error('[Image Generator] Failed to generate image:', error)
    return null
  }
}
