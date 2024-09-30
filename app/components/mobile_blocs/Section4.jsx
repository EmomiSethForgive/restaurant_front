
import Image from "next/image";
import Link from "next/link";
import styles from "./section4.module.css";
export function Section4() {
  return (
    <>
    <div className={`${styles.hero4} bg-gray-200 mb-10 w-full h-[899px] flex items-center justify-center gap-12 `}>
        <Image
          className={`${styles.image} rounded flex flex-col md:flex-row`}
          src="/assets/lauran.svg"
          alt="Lecouple"
          width={600}
          height={300}
        />
        <div>
            <div className={`${styles.textes} flex flex-col font-bold text-xl`}>
                <div>
                    <div className={`${styles.accroche}`}>
                        <h1 className={`${styles.h1} text-4xl`}>Dernières Actualités</h1>
                        <h2 className={`${styles.subtitle} text-2xl`}>Célébration d’un mariage dans <br /> nos locaux</h2>
                        <br /><br />
                    </div>
                    <p className={`${styles.p} text-2xl font-bold`}>
                        Laurene et Marc ont choisi <br />
                        notre structure pour célébrer <br />
                        leur mariage à cause du cadre et <br />
                        de la qualité de service que propose <br />
                        notre resto
                    </p>
                    <br />
                </div>
                <div className={`${styles.Iconify}`}>★★★★★</div>
            </div>
            <br />
            <button 
                className={`${styles.boutton} font-bold text-base leading-10 rounded-xl bg-red-600 h-[50px] w-[90px] text-white cursor-pointer`} 
                aria-label="En savoir plus"
            >
                <Link href="#">Lier Plus</Link> 
            </button>
        </div>
    </div>
       {/* partie consernant la responssivité*/}

    <div className={`${styles.mobile} p-2 text-center bg-[#FCCCCC] `}>
      <h1 className="text-2xl font-bold mb-2 text-red-500">Dernières Actualités</h1>
      <h2 className="text-xl  mb-4 text-black font-bold ">Célébration d’un mariage dans nos locaux</h2>
      <img 
        src="/assets/lauran.svg" 
        alt="couple" 
        className="w-[330px] h-[350px] rounded-lg mb-4 pl-4 justify-center pr-3" 
      />
      <p className="text-base  text-black font-bold flex justify-start pad-3 text-justify">
        Laurene et Marc on choisit notre structure<br /> pour célébrer  leur mariage à cause du cadre <br /> et la qualité de service que propose notre resto
      </p>
  
            <div className={`${styles.Iconify} flex justify-start`}>★★★★★</div>
             <button 
                className={`${styles.boutton} font-bold text-base leading-10 rounded-xl bg-red-600 h-[50px] w-[90px] text-white cursor-pointer flex justify-start`} 
                aria-label="En savoir plus"
            >
                <Link href="#">Lier Plus</Link> 
            </button>
    
      
    </div>
  </>
  );
}

   

