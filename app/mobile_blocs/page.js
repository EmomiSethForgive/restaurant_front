"use client";
import { Header } from "../components/Header";
import {Section4 } from"../components/mobile_blocs/Section4";
import {Section5} from "../components/mobile_blocs/Section5";
import {Section6} from "../components/mobile_blocs/Section6";

export default function blocs () {
    return(
        <div>
            <Header />
            <Section4 />
            <Section5 />
            <Section6 />
            
        </div>
    );
}