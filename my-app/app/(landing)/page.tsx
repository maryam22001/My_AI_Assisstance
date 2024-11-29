import { Link } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'

const Landing = () => {
  return (
    <div>Landing
      <Link href="/sign-in">
      <Button>
        Login
      </Button>
      </Link>
      <Link href="/sign-up">
        <Button>
          Register
        </Button>
      </Link>
    </div>
  )
}

export default Landing