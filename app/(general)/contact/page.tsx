
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contacto',
 description: 'Contacto 503sv',
 keywords: ['Contact Page']            
};

export default function contactPage(){
   return( 
    <>
    <span className="text-7xl">Hola Contacto</span>
    </>)
}