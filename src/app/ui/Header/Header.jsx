'use client'
import React, { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'


import logoWhite from '~/src/public/logo_white.svg'
import logoBlue from '~/src/public/logo_blue.svg'
import Navbar from '../Navbar/Navbar'
import classes from './Header.module.css'
import { usePathname } from 'next/navigation'

const whiteThemePaths = ['/convocatoria', '/inscritos']

const Header = () => {
  const pathname = usePathname()
  const whiteTheme = whiteThemePaths.includes(pathname)
  return (
    <div className={whiteTheme ? classes.whiteTheme : classes.blueTheme}>
      <div className={classes.headerContainer}>
        <div className={classes.desktopHeader}>
          <Link href='/' className={classes.logo}>
            <Image width={40} src={whiteTheme ? logoBlue : logoWhite} alt='logoWhite' />
          </Link>
          <div className={classes.headerLinks}>
            <Link
              className={whiteTheme ? classes.linkBlue : classes.link }
              href='/registro'
            >
              Registro
            </Link>
            <Link
              className={whiteTheme ? classes.linkBlue : classes.link }
              href='/convocatoria'
            >
              Convocatoria
            </Link>
            <Link
              className={whiteTheme ? classes.linkBlue : classes.link }
              href='/inscritos'
            >
              Inscritos
            </Link>
            <Link
              className={whiteTheme ? classes.linkBlue : classes.link }
              href='/omichh'
            >
              OMICHH
            </Link>
          </div>
        </div>
        <div className={classes.movileHeader}>
          <Navbar theme={whiteTheme ? 'light' : ''} />
        </div>
      </div>
    </div>
  )
}


export default Header