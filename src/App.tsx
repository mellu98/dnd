import { CharacterProvider, useCharacterContext } from './context/CharacterContext'
import { ErrorBoundary } from './components/ui/ErrorBoundary'
import { CharacterSheet } from './components/sheet/CharacterSheet'
import { HomePage } from './components/layout/HomePage'
import CreationWizard from './components/creation/CreationWizard'
import { CombatHub } from './combat/CombatHub'

function AppContent() {
  const { state } = useCharacterContext()

  if (state.combatSession) {
    return <CombatHub />
  }

  if (state.creationStep > 0) {
    return <CreationWizard />
  }

  if (state.character && state.creationStep === 0) {
    return <CharacterSheet />
  }

  return <HomePage />
}

export default function App() {
  return (
    <ErrorBoundary>
      <CharacterProvider>
        <AppContent />
      </CharacterProvider>
    </ErrorBoundary>
  )
}
