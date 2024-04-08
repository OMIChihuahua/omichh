import Image from 'next/image'

import { firaCode } from '~/src/app/lib/fonts'
import classes from '~/src/app/omichh/omichh.module.css'
import binary from '~/src/public/binary.png'

const About = () => (
  <>
    <div className={classes.aboutContainer}>
      <div className={classes.aboutContent}>
      <div>
        <h1 className={firaCode.className}>Olimpiada Mexicana de Informática</h1>
        <p>
          La Olimpiada Mexicana de Informática en Chihuahua (OMICHH) es un concurso a nivel estatal para jóvenes y niños con facilidad
          para resolver problemas prácticos mediante la lógica y el uso de computadoras, que busca promover el desarrollo tecnológico
          en México y encontrar a los mejores programadores, quienes formarán la selección del estado para participar en las próximas
          Olimpiadas Nacionales de Informática (OMI) y posteriormente en Olimpiadas Internacionales de Informática (IOI).
        </p>
        <p>
          La OMICHH es un concurso en el que sobre todo se requiere tener facilidad, habilidad y voluntad de resolver
          problemas utilizando la lógica, el ingenio y las computadoras.
        </p>

      </div>
        <Image width={300} className={classes.image} src={binary} alt="binary" />
      </div>
    </div>
  </>
)

export default About