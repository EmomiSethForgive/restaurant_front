import { Color } from "antd/es/color-picker";
import styles from "./section6.module.css";
import Image from "next/image";
import Link from "next/link";
export function Section6() {
  return (
    <>
      <div className={`${styles.hero6} flex  items-center gap-6 pl-6`}>
        <Image
          className="rounded"
          src="/assets/image.svg"
          alt=" drinking"
          width={500}
          height={310}
        />
        <div className="flex flex-col font-bold text-xl"> 
           <div className>
                <h1 className="text-4xl" > Événements à Venir</h1>
                <h2 className="text-2xl">Soirée Dégustation de Vins </h2>
                <span  className="text-sm italic text-1xl text-[rgba(183,138,26,0.622)] w-full inline-block">Samedi,30 septembre 2024 </span >
                <br /> <br />
           </div>
           <div className="">
            <p className="text-2xl">
              {" "}
              Pour accompagner vos plats, nous proposons une carte des<br/>  boissons  
              soigneusement élaborée. Que vous soyez amateur <br/>de vins fins,  de cocktails 
               raffinés ou de boissons sans alcool<br/> créatives, notre sélection saura ravir vos 
                papilles et <br/>sublimer votre repas.
              </p>{" "}
              <br />
            <div className={`${styles.rating} `}>★★★★★</div>
          </div>  <br />
          <button className="font-bold text-base leading-10 rounded-xl bg-red-600 h-[60px] w-[165px] text-white ">
            <Link href="">Réservez votre table</Link>
          </button>
        </div>
      </div>
        {/* partie consernant la responssivité*/}

    <div className={`${styles.telephone} p-4 text-center bg-[wite] border border-black`}>
      <h1 className="text-2xl font-bold mb-2 text-red-500">Recette du jour</h1>
      <img 
        src="/assets/image.svg" 
        alt="recette" 
        className=" rounded w-[330px] h-[350px] rounded-lg mb-4 pl-4 justify-center " 
      />
      <p className="text-base  text-black font-bold flex justify-start pad-3 text-justify">
            Pour accompagner vos plats, nous proposons une carte des boissons 
            soigneusement élaborée. Que vous soyez amateur de vins fins, de cocktails   
            raffinés ou de boissons sans alcool créatives, notre sélection saura ravir vos 
            papilles et sublimer votre repas.
      <br />
       </p>
            <div className={`${styles.Iconify} flex justify-start`}>★★★★★</div>
             <button 
                className={`${styles.boutton} font-bold text-base leading-10 rounded-xl bg-red-600 h-[40px] w-[140px] text-white cursor-pointer flex justify-start`} 
                aria-label="En savoir plus"
            >
                <Link href="#"> Reserver la table</Link> 
            </button>
    </div>
    </>
  );
}
