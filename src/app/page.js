import Header from '~/src/app/ui/Header/Header'
import Image from 'next/image'
import Button from './ui/Button/Button'

import medals from '../public/medallas.png'
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.landing__container}>
        <div className={classes.landing__content}>
          <h1 className={classes.content__title}>
            Buscamos a los mejores programadores de Chihuahua.
          </h1>
          <p className={classes.content__text}>
            La OMICHH es un concurso en el que sobre todo se requiere tener{" "}
            <strong>
              facilidad, habilidad y voluntad de resolver problemas
            </strong>{" "}
            utilizando la lógica, el ingenio y las computadoras.
          </p>
          <Button refUrl={"/convocatoria"} label={"Convocatoria"} />
        </div>
        <Image width={500} className={classes.medals} src={medals} alt="Medals"/>
      </div>
    </div>
  )
}
export default Home
