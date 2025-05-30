import Image from 'next/image'

// import { createClient } from '@/utils/supabase/server'
import icon from '../assets/icon.png'

// import AuthButton from './AuthButton'

export default function Header() {
  // const canInitSupabaseClient = () => {
  //   try {
  //     createClient()
  //     return true
  //   } catch (e) {
  //     return false
  //   }
  // }

  // const isSupabaseConnected = canInitSupabaseClient()

  return (
    <nav className="w-full flex justify-center items-center border-b h-[10vh] bg-white">
      <div className="w-[95%] flex justify-between items-center text-sm px-4">
        <div className="flex items-center gap-2">
          <Image
            src={icon}
            alt="Kasa ao"
            width={55}
            height={55}
            className="rounded py-4"
          />
          <h1 className="text-base font-medium">Kasa ao</h1>
        </div>
        {/* {isSupabaseConnected && <AuthButton />} */}
      </div>
    </nav>
  )
}
