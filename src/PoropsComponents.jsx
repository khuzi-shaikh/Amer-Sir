import React from 'react'
import { PropsComponent } from './PropsComponent';

export const PoropsComponents = () => {
    const kName="Khuzaim";
    const surName="Shaikh";
    const pName="From Navapur (Mangaldas Park)";
    const yName="Yusuf";
    const surName1="Mulla";
    const pName1="From Chinchpada";
    const iName="Ibrahim";
    const surName2="Dungariwala";
    const pName2="Form Visarwadi";
    const sName="Sufiyan"
    const surName3="Bardolia";
    const pName3="From Navapur (Memon Gali)";

  return (
    <div>
        <PropsComponent name1={kName} name2={surName} name3={pName}/>
      <PropsComponent name1={yName} name2={surName1} name3={pName1}/>
      <PropsComponent name1={iName} name2={surName2} name3={pName2}/>
      <PropsComponent name1={sName} name2={surName3} name3={pName3}/>
    </div>
  )
}
