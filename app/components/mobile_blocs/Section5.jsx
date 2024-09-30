// import { Color } from "antd/es/color-picker";
import Image from "next/image";
import Link from "next/link";
import styles from "./section5.module.css"

export function Section5() {
  return (
    <>
      <div className={`${styles.hero4} bg-gray-200 mb-10 w-full h-[899px] flex items-center justify-center gap-6 pl-6`} >
        <div className=" ">
          <div className="flex flex-col font-bold ">
            <h1 className="font-bold bg-yellow text-4xl pt-{2 rem}  ">              Recette du Mois <br /> Pistache (concombre)
            </h1> 
               <br /> <br />
          </div>
          <p className="text-2xl font-bold ">
            Venez découvrir cette recette unique dans notre restaurant ! Que <br /> 
            ce soit pour un déjeuner décontracté ou un dîner raffiné, notre <br/> 
            salade de concombre à la pistache saura ravir vos sens et vous <br />
             laissera des souvenirs gustatifs inoubliables. Nous avons hâte <br />
              de vous accueillir et de partager avec vous notre passion pour <br/> 
              la gastronomie !
            Notre strucrtue offre un cadre magnifiquement. <br />
          
          </p>{" "}
          <br />
          <div className="text-yellow-500 w-[500px] h-[50px] ">★★★★★</div>
          <br />
          <button className="font-bold text-base leading-10 rounded-xl bg-red-600 h-[60px] w-[200px] text-white ">
            <Link href="">Voire la recette complete</Link>
          </button>
        </div>
        <div>
          <Image 
            className="rounded-md "
            src="/assets/pistache.svg"
            alt=" pistache"
            width={730}
            height={300}
          />
        </div>
      </div>

       {/* partie consernant la responssivité*/}

    <div className={`${styles.phone} p-4 text-center bg-[#FCCCCC] border border-black`}>
      <h1 className="text-2xl font-bold mb-2 text-red-500">Recette du jour</h1>
      <img 
        src="/assets/pistache.svg" 
        alt="recette" 
        className="w-[330px] h-[350px] rounded-lg mb-4 pl-4 justify-center" 
      />
      <p className="text-base  text-black font-bold flex justify-start pad-3 text-justify">
           Venez découvrir cette recette unique dans notre restaurant ! Que 
           ce soit pour un déjeuner décontracté ou un dîner raffiné, notre 
           salade de concombre à la pistache saura ravir vos sens et vous 
           laissera des souvenirs gustatifs inoubliables. Nous avons hâte 
           de vous accueillir et de partager avec vous notre passion pour 
           la gastronomie !
            Notre strucrtue offre un cadre magnifiquement. <br />
       </p>
            <div className={`${styles.Iconify} flex justify-start`}>★★★★★</div>
             <button 
                className={`${styles.boutton} font-bold text-base leading-10 rounded-xl bg-red-600 h-[40px] w-[120px] text-white cursor-pointer flex justify-start`} 
                aria-label="En savoir plus"
            >
                <Link href="#"> Voire la recette</Link> 
            </button>
    </div>
    </>
  );
}
