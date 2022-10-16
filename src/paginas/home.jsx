import React from 'react'
import { Card } from './card'
import imagen1 from "./assets/imagen1.jpg";
import imagen2 from "./assets/imagen2.webp";
import imagen3 from "./assets/imagen3.jpg";
import imagen4 from "./assets/imagen4.jpg";
import imagen5 from "./assets/imagen5.jpg";
import imagen6 from "./assets/imagen6.jpg";
import imagen7 from "./assets/imagen7.jpg";
import imagen8 from "./assets/imagen8.webp";
import imagen9 from "./assets/imagen9.jpg";




export const Home = () => {
  return (
    <div>
        <main>
            <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">Album example</h1>
                <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <p>
                    <a href="#" class="btn btn-primary my-2">Main call to action</a> <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                </p>
                </div>
            </div>
            </section>

            <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <Card id = "/wallpaper/imagen1" imagen = {imagen1} 
                descripcion = "Cactaceae, las cactáceas, conocidas como cactus o cactos, es una familia de plantas originarias de América. Sin embargo, hay una excepción, Rhipsalis baccifera, que está extendida en África tropical, Madagascar y Ceilán.  "/>
                <Card id = "/wallpaper/imagen2" imagen = {imagen2} 
                descripcion = "Cactaceae, las cactáceas, conocidas como cactus o cactos, es una familia de plantas originarias de América. Sin embargo, hay una excepción, Rhipsalis baccifera, que está extendida en África tropical, Madagascar y Ceilán.  "/>
                <Card id = "/wallpaper/imagen3" imagen = {imagen3} 
                descripcion = "Cactaceae, las cactáceas, conocidas como cactus o cactos, es una familia de plantas originarias de América. Sin embargo, hay una excepción, Rhipsalis baccifera, que está extendida en África tropical, Madagascar y Ceilán.  "/>
                <Card id = "/wallpaper/imagen4" imagen = {imagen4} 
                descripcion = "Cactaceae, las cactáceas, conocidas como cactus o cactos, es una familia de plantas originarias de América. Sin embargo, hay una excepción, Rhipsalis baccifera, que está extendida en África tropical, Madagascar y Ceilán.  "/>
                <Card id = "/wallpaper/imagen5" imagen = {imagen5} 
                descripcion = "Cactaceae, las cactáceas, conocidas como cactus o cactos, es una familia de plantas originarias de América. Sin embargo, hay una excepción, Rhipsalis baccifera, que está extendida en África tropical, Madagascar y Ceilán.  "/>
                <Card id = "/wallpaper/imagen6" imagen = {imagen6} 
                descripcion = "Cactaceae, las cactáceas, conocidas como cactus o cactos, es una familia de plantas originarias de América. Sin embargo, hay una excepción, Rhipsalis baccifera, que está extendida en África tropical, Madagascar y Ceilán.  "/>
                <Card id = "/wallpaper/imagen7" imagen = {imagen7} 
                descripcion = "Cactaceae, las cactáceas, conocidas como cactus o cactos, es una familia de plantas originarias de América. Sin embargo, hay una excepción, Rhipsalis baccifera, que está extendida en África tropical, Madagascar y Ceilán. "/>
                <Card id = "/wallpaper/imagen8" imagen = {imagen8} 
                descripcion = "Cactaceae, las cactáceas, conocidas como cactus o cactos, es una familia de plantas originarias de América. Sin embargo, hay una excepción, Rhipsalis baccifera, que está extendida en África tropical, Madagascar y Ceilán.  "/>
                <Card id = "/wallpaper/imagen9" imagen = {imagen9} 
                descripcion = "Cactaceae, las cactáceas, conocidas como cactus o cactos, es una familia de plantas originarias de América. Sin embargo, hay una excepción, Rhipsalis baccifera, que está extendida en África tropical, Madagascar y Ceilán.  "/>
                </div>
            </div>
            </div>
        </main>
    </div>
  )
}