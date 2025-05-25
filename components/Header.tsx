import Image from 'next/image'

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
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icon.png"
            alt="Kasa ao"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <h1 className="text-base font-medium">Kasa ao</h1>
        </div>
        {isSupabaseConnected && <AuthButton />}
      </div>
    </nav>
  )
}