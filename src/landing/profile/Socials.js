import Link from 'next/link'
import React from 'react'
import { GithubIcon, InstagramIcon, TelegramIcon, WhatsAppIcon } from '../../svg'

const Socials = () => {
  return (
    <div className="flex socials items-center justify-center my-7 ">
    <Link href={"https://instagram.com/_._fateemeh?igshid=YmMyMTA2M2Y="} target="_blank">
      <InstagramIcon />
    </Link>
    <Link href={"https://t.me/fateemeh_bd"}  target="_blank">
      <TelegramIcon />
    </Link>
    <Link href={"https://github.com/fatemeh-bd"} target="_blank">
      <GithubIcon />
    </Link>
    <Link href={"https://wa.me/9901433445"} target="_blank">
      <WhatsAppIcon />
    </Link>
  </div>
  )
}

export default Socials