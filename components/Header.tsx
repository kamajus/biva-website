import { createClient } from '@/utils/supabase/server'

import AuthButton from './AuthButton'

export default function Header() {
  const canInitSupabaseClient = () => {
    try {
      createClient()
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <nav className="fixed top-0 left-0 w-full border-b border-b-foreground/10 h-16 bg-white z-50">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm mx-auto">
        <h1 className="text-base font-medium">Beeva</h1>
        {isSupabaseConnected && <AuthButton />}
      </div>
    </nav>
  )
}
