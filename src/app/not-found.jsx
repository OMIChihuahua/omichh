import Image from 'next/image'
import { NOT_FOUND } from '~/src/app/lib/assets'

import classes from '~/src/app/noteFound.module.css'

const Custom404 = () => {
  return (
    <div className={classes.notFoundContainer}>
      <Image width={500} height={500} src={NOT_FOUND} alt="Not found"/>
    </div>
  )
}

export default Custom404