'use client'
import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { SidebarData } from '../SideBar'
import Navbar from '../Navbar/Navbar'
import classes from './Header.module.css'
import { usePathname } from 'next/navigation'
import { WHITE_LOGO, BLUE_LOGO } from '~/src/app/lib/assets'

const blueThemePaths = ['/', '/omichh']

const Header = () => {
  const pathname = usePathname()
  const blueTheme = blueThemePaths.includes(pathname)
  return (
    <div className={blueTheme ? classes.blueTheme : classes.whiteTheme}>
      <div className={classes.headerContainer}>
        <div className={classes.desktopHeader}>
          <Link href='/' className={classes.logo}>
            <Image width={40} height={40} src={blueTheme ? WHITE_LOGO : BLUE_LOGO} alt='logo' />
          </Link>
          <div className={classes.headerLinks}>
            {SidebarData.map(tab => {
              if (tab.status) {
                return (
                  <Link
                    key={tab.label}
                    className={blueTheme ? classes.link : classes.linkBlue}
                    href={tab.path}
                  >
                    {tab.label}
                  </Link>
                )
              }
              return null
            })}
          </div>
        </div>
        <div className={classes.movileHeader}>
          <Navbar theme={blueTheme ? '' : 'light'} />
        </div>
      </div>
    </div>
  )
}


export default Header