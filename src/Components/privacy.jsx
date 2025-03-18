import { HeroSection } from "./widgets";
import Image from '../assets/privacy.jpg';

export function Privacy() {
    return (
        <>
            <HeroSection image={Image} title={'Privacy Policy'} description={'Last Edited: March 17, 2025.'} />
        </>
    );
}