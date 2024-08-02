import Link from 'next/link'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function AuthButton() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'

    const supabase = createClient()
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return user ? (
    <div className="flex items-center gap-4">
      Hey, what&apos;s up?
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-alert text-white hover:brightness-90 active:brightness-75">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-primary text-white hover:brightness-90 active:brightness-75"
    >
      Login
    </Link>
  )
}
