import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4">
          <div className="bg-bg-card border border-accent-red/50 rounded-2xl p-8 max-w-md text-center shadow-xl">
            <div className="text-4xl mb-4">⚔️</div>
            <h2 className="text-xl font-bold text-accent-red mb-2">Qualcosa e andato storto</h2>
            <p className="text-text-secondary text-sm mb-4">
              Si e verificato un errore imprevisto nell&apos;applicazione.
            </p>
            {this.state.error && (
              <pre className="text-xs text-text-secondary/70 bg-bg-secondary rounded-lg p-3 text-left mb-6 overflow-auto max-h-32">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null })
                window.location.reload()
              }}
              className="px-6 py-2 bg-accent-gold text-bg-primary font-semibold rounded-lg hover:bg-accent-gold/90 transition-colors"
            >
              Ricarica
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
