'use client'
import React, { useState } from 'react'
import { RenderMdToHtml } from '../lib/renderMdToHtml'

import convocatoriaOMI from './libs/omi'
import convocatoriaOMIPS from './libs/omips'

import classes from './convocatoria.module.css'

const Convocatoria = () => {
  const [selectedDoc, setSelectedDoc] = useState(convocatoriaOMI)
  return (
    <div className={classes.documents}>
        <div className={classes.documents__content}>
          <h2 className={classes.documents__title}>Convocatoria</h2>
          <div>
            <section>
              <button className={classes.document__selector} onClick={() => setSelectedDoc(convocatoriaOMI)}>OMI</button>
              <button className={classes.document__selector} onClick={() => setSelectedDoc(convocatoriaOMIPS)}>OMIPS</button>
            </section>
          </div>
          <div className={classes.content__markdown}>
            <RenderMdToHtml markdown={selectedDoc}/>
          </div>
        </div>
    </div>
  );
}

export default Convocatoria