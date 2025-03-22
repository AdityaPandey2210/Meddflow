import { HeroSection } from "./widgets";
import Image from '../assets/terms.jpg';
import { Link } from "react-router-dom/cjs/react-router-dom";

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
        <div className="mx-auto px-7 py-12 bg-white my-8">
            <div className="space-y-8">
                <Introduction />
                <NatureApplicability />
                <Conditions />
                <TermsofUse />
            </div>
        </div>
    );
}

function Introduction() {
    return (
        <section className="border-b border-gray-100">
            <p className="text-gray-600 leading-relaxed">
                Meddflow Technologies Private Limited, on behalf of itself and its affiliates/group companies under the brand "Meddflow" (“Meddflow”), is the author and publisher of the internet resource www.meddflow.com and the mobile application 'Meddflow' (together, “Website”).
                <br />Meddflow United Arab Emirates ('UAE').<br /> User's please refer to the Terms applicable in the UAE region here: <Link className="text-blue-600" to="/">Meddflow terms & conditions only applicable for UAE. </Link>
                <br />Meddflow United States of America ('USA').<br /> User's please refer to the Terms applicable in the USA region here: <Link className="text-blue-600" to="/">Meddflow terms & conditions only applicable for USA</Link>
            </p>
        </section>
    )
}

function NatureApplicability() {
    return (
        <section className="border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. NATURE AND APPLICABILITY OF TERM</h2>
            <p className="text-gray-600 leading-relaxed">
                Please carefully go through these terms and conditions (“Terms”) and the privacy policy available at <Link className="text-blue-600" to="/privacy">https://www.meddflow.com/privacy</Link> (Privacy Policy) before you decide to access the Website or avail the services made available on the Website by Meddflow. These Terms and the Privacy Policy together constitute a legal agreement (“Agreement”) between you and Meddflow in connection with your visit to the Website and your use of the Services (as defined below).
            </p>
            <p className="text-gray-600 leading-relaxed">The Agreement applies to you whether you are:</p>
            <ul className="mt-2 pl-8 list-disc text-gray-600 space-y-2">
                <li>A medical practitioner or health care provider (whether an individual professional or an organization) or similar institution wishing to be listed, or already listed, on the Website, including designated, authorized associates of such practitioners or institutions (“Practitioner(s)”, “you” or “User”); or</li>
                <li>A patient, his/her representatives or affiliates, searching for Practitioners through the Website (“End-User”, “you” or “User”); or</li>
                <li>Otherwise a user of the Website (“you” or “User”). This Agreement applies to those services made available by Meddflow on the Website (“Services”), including but not limited to the following:</li>
            </ul>
            <p className="mt-3 text-gray-600 leading-relaxed">For Practitioners: Listing of Practitioners and their profiles and contact details, to be made available to the other Users and visitors to the Website; For other Users: Facility to:</p>
            <ul className="mt-2 pl-8 list-disc text-gray-600 space-y-2">
                <li>Create and maintain 'Health Accounts'</li>
                <li>Search for Practitioners by name, specialty, and geographical area, or any other criteria that may be developed and made available by Meddflow</li>
                <li>To make appointments with Practitioners. The Services may change from time to time, at the sole discretion of Meddflow, and the Agreement will apply to your visit to and your use of the Website to avail the Service, as well as to all information provided by you on the Website at any given point in time.</li>
            </ul>
            <p className="mt-3.5 text-gray-600 leading-relaxed">This Agreement defines the terms and conditions under which you are allowed to use the Website and describes the manner in which we shall treat your account while you are registered as a member with us. If you have any questions about any part of the Agreement, feel free to contact us at <a href="mailto:support@meddflow.com" className="text-blue-600">support@meddflow.com</a></p>
            <p className="mt-3.5 text-gray-600 leading-relaxed">By downloading or accessing the Website to use the Services, you irrevocably accept all the conditions stipulated in this Agreement, the Subscription Terms of Service and Privacy Policy, as available on the Website, and agree to abide by them. This Agreement supersedes all previous oral and written terms and conditions (if any) communicated to you relating to your use of the Website to avail the Services. By availing any Service, you signify your acceptance of the terms of this Agreement.</p>
        </section>
    )
}

function Conditions() {
    return (
        <section className="border-b border-gray-100 pb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. CONDITIONS OF USE</h2>
            <p className="text-gray-600 leading-relaxed">You must be 18 years of age or older to register, use the Services, or visit or use the Website in any manner. By registering, visiting and using the Website or accepting this Agreement, you represent and warrant to Meddflow that you are 18 years of age or older, and that you have the right, authority and capacity to use the Website and the Services available through the Website, and agree to and abide by this Agreement.</p>
        </section>
    )
}

function TermsofUse() {
    return (
        <section className="border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. TERMS OF USE APPLICABLE TO ALL USERS OTHER THAN PRACTITIONERS.</h2>
            <p className="text-gray-600 leading-relaxed mb-4">The terms in this Clause 3 are applicable only to Users other than Practitioners.</p>
            <p className="pl-1 text-gray-600 leading-relaxed mb-4">3.1 END-USER ACCOUNT AND DATA PRIVACY</p>
            <ul className="pl-8 list-disc text-gray-600 space-y-2">
                <li>3.1.1. The terms “personal information” and “sensitive personal data or information” are defined under the SPI Rules, and are reproduced in the Privacy Policy.</li>
                <li> 3.1.2. Meddflow may by its Services, collect information relating to the devices through which you access the Website, and anonymous data of your usage. The collected information will be used only for improving the quality of Meddflow's services and to build new services.</li>
            </ul>
        </section>
    )
}