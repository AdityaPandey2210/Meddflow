import { HeroSection } from "./widgets";
import Image from '../assets/terms.jpg';

export function Terms() {
    return (
        <>
            <HeroSection image={Image} title={'Terms & Conditions'} description={'Last Edited: March 17, 2025.'} />
            <TermsConditions />
        </>
    );
}

function TermsConditions() {
    return (
        <></>
    )
}