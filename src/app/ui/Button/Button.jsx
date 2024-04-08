import React from 'react'
import Link from 'next/link'

import classes from './Button.module.css'

const Button = ({
  refUrl,
  label
}) => (
  <Link className={classes.button} href={refUrl}>{label}</Link>
)

export default Button;