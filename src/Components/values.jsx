import Image1 from '../assets/cta.png';
import Image2 from '../assets/emr.png';
import Image0 from '../assets/cta1.png';

export const choiceFeatures = [
    { title: 'Expertise Backed by Experience', description: 'With vast experience in healthcare technology, our team delivers deep industry insights and tailored solutions to meet your needs.', icon: <i className="bi bi-person-check-fill text-3xl"></i> },
    { title: 'Personalized Health Tech Solutions', description: 'Understanding that every provider is unique, we create custom solutions that boost efficiency, enhance care, and drive better results.', icon: <i className="bi bi-phone text-3xl"></i> },
    { title: 'Proven Results', description: 'Our trusted technology helps healthcare professionals worldwide, improving patient engagement, efficiency, and cost-effectiveness.', icon: <i className="bi bi-search text-3xl"></i> },
    { title: 'Commitment to Quality', description: 'We ensure quality at every stage, following industry standards, securing data, and providing seamless integrations for efficiency.', icon: <i className="bi bi-file-earmark-text text-3xl"></i> },
];

export const questions = [
    { id: 1, text: "How Often You Use AI for Billing?" },
    { id: 2, text: "Another question here?" },
    { id: 3, text: "Yet another question?" },
    { id: 4, text: "Final question?" },
];

export const answerPoints = {
    "Always": 10,
    "Never": 0,
    "Sometimes": 5,
    "Occasionally": 3
};

export const answers = ["Always", "Never", "Sometimes", "Occasionally"];

export const testimonials = [
    {
        quote: "Meddflow excels at clinic notes. I had an impressive result with a complex cancer mastectomy discussion in Spanish—the note was flawless. It also handles operative dictations effortlessly. Even with background noise and AirPods, my recording was perfect. Truly mind-blowing!",
        name: "Olivia Green",
        title: "MD, Plastic Surgeon",
        rating: 5,
    },
    {
        quote: "The transcription accuracy is remarkable. I've used it for patient consultations in multiple languages and the results are consistently excellent. The interface is intuitive and the turnaround time is impressive.",
        name: "James Wilson",
        title: "MD, Cardiologist",
        rating: 5,
    },
    {
        quote: "As a busy neurologist, Meddflow has transformed my documentation workflow. The AI understands medical terminology perfectly and the integration with our EHR system is seamless.",
        name: "Sarah Chen",
        title: "MD, Neurologist",
        rating: 5,
    },
    {
        quote: "I was skeptical at first, but Meddflow has exceeded all my expectations. It captures every detail during patient interactions, allowing me to focus on care rather than note-taking.",
        name: "Michael Rodriguez",
        title: "MD, Family Medicine",
        rating: 4,
    },
    {
        quote: "The multilingual support is a game-changer for our diverse patient population. Meddflow handles complex medical discussions in various languages with remarkable precision.",
        name: "Aisha Patel",
        title: "MD, Internal Medicine",
        rating: 5,
    }
];

export const faqs = [
    {
        question: "What Makes Meddflow Different?",
        answer: "Meddflow runs on proprietary AI models built to optimize specialty-specific information. The tool gets smarter the more it is used on a user, clinic, and global level. Meddflow also generates ICD-10-CM and CPT codes, including E/M codes based on the medical decision making complexity of the conversation, and time spent. Meddflow is multilingual and can process over 99 languages. Our advanced algorithms are designed to adapt to various accents and linguistic differences. Meddflow is compatible with most EHR systems. You can also bring in information from previous encounters with our integrated workflow, available in our plan. It allows you to seamlessly integrate historical notes with new recordings to create your current notes. For specific integration details, please reach out to our support team at sales@meddflow.ai."
    },
    {
        question: "Where Do I Use Meddflow?",
        answer: "Meddflow is designed to work on any device with a microphone. You can access our AI app on iPhones, Android phones, iPads, etc. and through any web browser. For the optimal workflow, we recommend recording on a mobile device for best quality recordings, and reviewing and uploading notes from a web browser."
    },
    {
        question: "Can I Try Meddflow?",
        answer: "We offer a 7-day free trial with unlimited notes. Pricing is customized based on a group's specific requirements. You can initiate your trial in the Try Meddflow area or more information about group rates, please email our team at sales@meddflow.ai."
    },
    {
        question: "What is Telehealth EMR?",
        answer: "Telehealth EMR is an electronic medical record system specifically designed for virtual healthcare visits. It integrates video conferencing capabilities with documentation tools, allowing providers to conduct remote consultations while maintaining comprehensive patient records."
    },
    {
        question: "Can Patients & Providers Conduct Video Visits From Mobile Devices?",
        answer: "Yes, patients and providers can conduct video visits from mobile devices. Our platform is optimized for iOS and Android smartphones and tablets, providing a secure and HIPAA-compliant connection for telehealth appointments from anywhere with internet access."
    },
    {
        question: "Do Patient Need to Download Any Apps or Software to Join a Telehealth Appointment?",
        answer: "Patients don't necessarily need to download dedicated apps for telehealth appointments. Our system offers a web-based option that works through standard browsers. However, for the best experience with enhanced features, we do offer optional mobile apps for both iOS and Android devices."
    }
];

export const contactDetails = [
    { heading: 'Call Us', value: '+91 999999999999', icon: <i className="text-indigo-500 w-12 h-12 mb-3 inline-block text-3xl bi bi-telephone"></i> },
    { heading: 'Email Us', value: 'example@email.com', icon: <i className="text-indigo-500 w-12 h-12 mb-3 inline-block text-3xl bi bi-envelope-open"></i> },
    { heading: 'Our Address', value: 'Address', icon: <i className="text-indigo-500 w-12 h-12 mb-3 inline-block text-3xl bi bi-geo-alt"></i> },
];

export const products = [
    { title: 'Electronic Medical Records (EMR) & Patient Data', route: '' },
    { title: 'Practice & Appointment Management', route: '' },
    { title: 'Telehealth & Virtual Consultation', route: '' },
    { title: 'E- Prescription & Medicine Management', route: '' },
    { title: 'Lab & Diagnostic Integration', route: '' },
    { title: 'Payments & Subscription Management', route: '' },
    { title: 'Patient Engagement & Post-Care Monitoring', route: '' },
    { title: 'Location & Accessibility Features', route: '' },
];

export const useCases = [
    { title: 'Patient Intake', route: '' }
];

export const consulting = [
    { title: 'Digital Transformation', route: '' },
    { title: 'Inventory & Resource Management', route: '' },
    { title: 'Revenue & Billing Optimization', route: '' },
    { title: 'Workflow Optimization & Process Improvements', route: '' },
    { title: 'Telehealth Implementation & Optimization', route: '' },
    { title: 'Custom Healthcare Product Development', route: '' },
];

export const company = [
    { title: 'About', route: '' },
    { title: 'Careers', route: '' },
    { title: 'Contact', route: 'contact' },
];

export const service_ctas = [
    { title: 'Seamless EHR/EMR Integration & Migration', description: 'Seamlessly integrate and migrate electronic health records with minimal disruption. Ensure smooth data transfer while maintaining accuracy and compliance. Enhance interoperability by connecting with existing healthcare systems. Reduce manual data entry and improve efficiency across hospitals and clinics.', image: Image0 },
    { title: 'AI-Driven Data Analytics for Better Decision-Making', description: 'Harness the power of AI to transform raw medical data into actionable insights. Identify patterns and trends to improve diagnosis and treatment planning. Use predictive analytics for early disease detection and risk assessment. Enhance operational efficiency by analyzing workflow bottlenecks.', image: Image1 },
    { title: 'Automation of Administrative & Clinical Workflows', description: 'Streamline healthcare operations by automating repetitive administrative tasks. Reduce paperwork and human errors with digitized workflows. Automate appointment scheduling, patient reminders, and billing processes. Enhance clinical efficiency with automated prescription management and reporting.', image: Image2 },
];

export const workingSteps = [
    { title: 'Patient Details', description: 'Add patient, referral and scan details on the Dashboard.', icon: <i className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799] text-xl bi bi-person-vcard"></i> },
    { title: 'Scan Process', description: 'We will contact the patient and handle everything - scheduling, reports, customer service.', icon: <i className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799] text-xl bi bi-calendar-check"></i> },
    { title: 'Updates and Scan Results', description: 'You can check updates and scan results on the dashboard.', icon: <i className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799] text-xl bi bi-text-left"></i> },
];

export const medicalProfiles = [
    'Create profiles for each family member.', 'Store essential health details like allergies, conditions & medications.', 'Access medical history for better-informed healthcare decisions.'
];

export const medDocs = [
    'Upload prescriptions, reports, and test results securely.', 'Organize documents by category and date for quick retrieval.', 'Share files instantly with doctors, hospitals, and caregivers.'
];

export const globalAccessibility = [
    'Translate prescriptions into preferred languages instantly.', 'Improve accessibility for non-native speakers and international patients.', 'Reduce misinterpretation of medical instructions.'
];

export const vitalTracking = [
    'Record vitals like blood pressure, sugar levels, and heart rate.', 'Get alerts for abnormal readings and trends.', 'Visualize health data with charts and reports.'
];

export const historyReports = [
    'Consolidate past medical records into a single view.', 'Generate summary reports for consultations and treatments.', 'Provide doctors with actionable insights for informed decisions.'
];

export const medCertificates = [
    'Auto-generate medical certificates for work, insurance, or travel.', 'Download and print certificates anytime as needed.', 'Secure verification to prevent fraud & errors.'
];

export const dataHandling = [
    'Define roles for patients, doctors, and caregivers.', 'Grant or restrict access to specific data and features.', 'Protect patient privacy while enabling seamless collaboration.'
];
