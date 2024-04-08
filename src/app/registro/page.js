import Image from 'next/image'

import { firaCode } from '~/src/app/lib/fonts'
import { OK } from '~/src/app/lib/assets'
import classes from '~/src/app/registro/register.module.css'

const Registro = () => {
  return (
    <>
      <div className={classes.registerContainer}>
        <div className={classes.registerContent}>
          <h1 className={firaCode.className}>Registro Alumnos</h1>
          <p>
          Para poder registrarte y poder participar en la OMICHH, es necesario ponerte en contacto con tu maestro asesor
          (en caso de no tener asesor con tu padre o tutor) y pedirles que nos envíen un correo electrónico a contacto@omichh.org.
          </p>
          <p>
          Este correo nos ayudará a completar tu proceso de registro de manera rápida y fácil. Una vez que lo hagan,
          estarás listo para participar.
          </p>
          <Image width={300} height={300} src={OK} alt='OK' />
        </div>
      </div>
    </>
  )
}

export default Registro