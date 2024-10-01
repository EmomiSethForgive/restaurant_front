"use client";
import Image from "next/image";
import styles from "./header.module.css";
import { Butréservation } from "./Butréservation";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="w-full">
      <header className={`${styles.header} `}>
        <nav
          className={`${styles.nav} flex justify-between w-full items-center text-center`}
        >
          <div
            className={`${styles.img_pc} flex items-center text-center ml-10 mt-3`}
          >
            <img
              src="./assets/logo.svg"
              alt=""
              width={112}
              height={112}
              className={`${styles.img_pc}`}
            />
            <p
              className={`${styles.img_pc} font-bold text-2xl leading-10 text-white`}
            >
              Saveurs Bantu{" "}
            </p>
          </div>
          <section
            className={` ${styles.section} flex items-center text-center ml-1 mt-3`}
          >
            <img
              src="./assets/logo.svg"
              alt=""
              width={45}
              height={45}
              className={``}
            />
            <p className={`font-bold text-base leading-9 text-white`}>
              Saveurs Bantu
            </p>
          </section>
          <img
            src="./assets/menu_berger.svg"
            alt=""
            width={23}
            height={23}
            className={`${styles.menu}  mr-3 mt-3`}
          />
          <div
            className={`${styles.img_pc} flex items-center text-center gap-[30px] mr-16 mt-3`}
          >
            <ul className="flex gap-[30px]">
              <Link
                href="../"
                className="font-bold leading-10 text-2xl  text-white"
              >
                {" "}
                Acceuil
              </Link>
              <Link
                href="../menu"
                className="font-bold leading-10 text-2xl  text-white"
              >
                Menu
              </Link>
              <Link
                href="../mobile_blocs"
                className="font-bold leading-10 text-2xl  text-white"
              >
                Blog
              </Link>
              <Link
                href="../propos"
                className="font-bold leading-10 text-2xl  text-white"
              >
                A propos
              </Link>
              <Link
                href="../contacts"
                className="font-bold leading-10 text-2xl  text-white"
              >
                {" "}
                Contact
              </Link>
            </ul>
            <Butréservation />
          </div>
        </nav>
      </header>
    </div>
  );
};
