import Image from "next/image"
import Sponsor from "../Sponsor"
export default function SponsorsSection(){
    return(<div>
        <p className = "text-center text-7xl">Auksiniai rėmėjai</p>
        <div className = "grid grid-cols-6 gap-8 justify-items-center align-middle">
            <a target="_blank" href="https://www.google.lt"><Image width={1500} height={1500} src="/sponsors/favicon.ico" alt="midi ikona"></Image></a>
            <a target="_blank" href="https://www.google.lt"><Image width={1500} height={1500} src="/sponsors/favicon.ico" alt="midi ikona"></Image></a>
            <a target="_blank" href="https://www.google.lt"><Image width={1500} height={1500} src="/sponsors/favicon.ico" alt="midi ikona"></Image></a>
            <a target="_blank" href="https://www.google.lt"><Image width={1500} height={1500} src="/sponsors/favicon.ico" alt="midi ikona"></Image></a>
            <a target="_blank" href="https://www.google.lt"><Image width={1500} height={1500} src="/sponsors/favicon.ico" alt="midi ikona"></Image></a>
            <a target="_blank" href="https://www.google.lt"><Image width={1500} height={1500} src="/sponsors/favicon.ico" alt="midi ikona"></Image></a>
            <a target="_blank" href="https://www.google.lt"><Image width={1500} height={1500} src="/sponsors/download.png" alt="midi ikona"></Image></a>
            <a target="_blank" href="https://www.google.lt"><Image width={1500} height={1500} src="/sponsors/ustukiu_malunas_logo-01.png" alt="midi ikona"></Image></a>
            <Sponsor href="https://www.lrt.lt" width={1500} height={1500} src="/sponsors/download.png" alt="necentruotas"></Sponsor>
            <div></div>
        </div>
        <p className = "text-center text-7xl">Sidabriniai rėmėjai</p>
        <p className = "text-center text-7xl">Bronziniai rėmėjai</p>
        <p className = "text-center text-7xl">Partneriai</p>
        <h1>Sveiki</h1>
    </div>
    )
}