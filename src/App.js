import "./App.css";
import ClassComp from "./Component/ClassComp";
import { Counter } from "./Component/Counter";
import { CounterWithSnglfnction } from "./Component/CounterWithSnglfnction";
import { FirstComp } from "./Component/FirstComp";
import FunctionalComp from "./Component/FunctionalComp";
import { PropsComponent } from "./Component/PropsComponent";
import { PropsComponent1 } from "./Component/PropsComponent1";

function App() {
  //////////////////////////////////////////////////////(This is props)
  const kName = "Khuzaim";
  const surName = "Shaikh";
  const pName = "From Navapur (Mangaldas Park)";
  const yName = "Yusuf";
  const surName1 = "Mulla";
  const pName1 = "From Chinchpada";
  const iName = "Ibrahim";
  const surName2 = "Dungariwala";
  const pName2 = "Form Visarwadi";
  const sName = "Sufiyan";
  const surName3 = "Bardolia";
  const pName3 = "From Navapur (Memon Gali)";
  //////////////////////////////////////////////////////(This is props)
  const cName = "Buggati Veron";
  const cPrice = "$120 Million";
  const cColor = "Matt Black";
  const cType = "20L Petrol(Sports)";
  const cName1 = "Ferrari";
  const cPrice1 = "$100 Million";
  const cColor1 = "Black";
  const cType1 = "10L Petrol(Sports)";
  return (
    <div className="App">
      {/* <FunctionalComp/> */}
      {/* <ClassComp/> */}
      {/* <FirstComp/> */}
      {/* <Counter/> */}
      {/* <CounterWithSnglfnction/> */}
      {/* ////////////////////////////////(This is props)////////////////////////////////////////////////////////////////////// */}
      {/* <PropsComponent name1={kName} name2={surName} name3={pName} /> */}
      {/* <PropsComponent name1={yName} name2={surName1} name3={pName1} /> */}
      {/* <PropsComponent name1={iName} name2={surName2} name3={pName2} /> */}
      {/* <PropsComponent name1={sName} name2={surName3} name3={pName3} /> */}
      {/* <PropsComponent1 car1={cName} car2={cPrice} car3={cColor} car4={cType}/> */}
      {/* <PropsComponent1 car10={cName1} car20={cPrice1} car30={cColor1} car40={cType1}/> */}
      {/* <PropsComponent1 /> */}
      {/* <PropsComponent1 /> */}
      {/* <PropsComponent1 /> */}
      {/* ////////////////////////////////(This is props^)////////////////////////////////////////////////////////////////////// */}
    </div>
  );
}

export default App;
