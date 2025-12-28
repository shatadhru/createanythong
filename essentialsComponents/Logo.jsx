import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG } from '@/config/site'

function Logo() {
  return (
    <Link href="/" aria-label="Go to homepage">
      <Image
        src={SITE_CONFIG.assets.logo}
        alt="Logo"
        width={100}
        height={100}
        style={{ cursor: 'pointer' }}
      />
    </Link>
  )
}

export default Logo
