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
    <nav className="w-full flex justify-center items-center border-b h-[10vh] bg-white">
      <div className="w-[95%] flex justify-between items-center text-sm">
        <h1 className="text-base font-medium">Kasa ao</h1>
        {isSupabaseConnected && <AuthButton />}
      </div>
    </nav>
  )
}
