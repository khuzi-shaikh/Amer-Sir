import React from 'react'
import { PropsComponent1 } from './PropsComponent1'

export const PropsComponents1 = () => {
    const cName="Buggati Veron"
    const cPrice="$120 Million"
    const cColor="Matt Black"
    const cType="20L Petrol(Sports)"
    const cName1="Farrari"
    const cPrice1="$100 Million"
    const cColor1="Black"
    const cType1="10L Petrol(Sports)"
  return (
    <div>
        <PropsComponent1 car1={cName} car2={cPrice} car3={cColor} car4={cType}/>
      <PropsComponent1 car10={cName1} car20={cPrice1} car30={cColor1} car40={cType1}/>
    </div>
  )
}
