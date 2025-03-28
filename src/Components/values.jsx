import Image1 from '../assets/cta.png';
import Image2 from '../assets/emr.png';
import Image0 from '../assets/cta1.png';
import Image3 from '../assets/about1.png';
import Image4 from '../assets/caseStudy1.jpg';
import Image5 from '../assets/caseStudy2.jpg';
import Image6 from '../assets/caseStudy3.jpg';
import Image7 from '../assets/caseStudy4.jpg';
import Image8 from '../assets/caseStudy5.jpg';
import Image9 from '../assets/caseStudy6.jpg';

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
    { heading: 'Call Us', value: '+61 431017898', icon: <i className="text-indigo-500 w-12 h-12 mb-3 inline-block text-3xl bi bi-telephone"></i> },
    { heading: 'Email Us', value: 'hemant@meddflow.com', icon: <i className="text-indigo-500 w-12 h-12 mb-3 inline-block text-3xl bi bi-envelope-open"></i>, link: 'mailto:hemant@meddflow.com' },
    { heading: 'Our Address', value: '81 Wellesley, Taylors Lakes Victoria', icon: <i className="text-indigo-500 w-12 h-12 mb-3 inline-block text-3xl bi bi-geo-alt"></i> },
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
    { title: 'Patient Intake', route: 'casestudies' }
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
    { title: 'About', route: 'about' },
    { title: 'Careers', route: 'careers' },
    { title: 'Contact', route: 'contact' },
];

export const service_ctas = [
    { title: 'Seamless EHR/EMR Integration & Migration', description: 'Seamlessly integrate and migrate electronic health records with minimal disruption. Ensure smooth data transfer while maintaining accuracy and compliance. Enhance interoperability by connecting with existing healthcare systems. Reduce manual data entry and improve efficiency across hospitals and clinics.', fullDescription: '', image: Image0 },
    { title: 'AI-Driven Data Analytics for Better Decision-Making', description: 'Harness the power of AI to transform raw medical data into actionable insights. Identify patterns and trends to improve diagnosis and treatment planning. Use predictive analytics for early disease detection and risk assessment. Enhance operational efficiency by analyzing workflow bottlenecks.', fullDescription: '', image: Image1 },
    { title: 'Automation of Administrative & Clinical Workflows', description: 'Streamline healthcare operations by automating repetitive administrative tasks. Reduce paperwork and human errors with digitized workflows. Automate appointment scheduling, patient reminders, and billing processes. Enhance clinical efficiency with automated prescription management and reporting.', fullDescription: '', image: Image2 },
];

export const workingSteps = [
    { title: 'Patient Details', description: 'Add patient, referral and scan details on the Dashboard.', icon: <i className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799] text-xl bi bi-person-vcard"></i> },
    { title: 'Scan Process', description: 'We will contact the patient and handle everything - scheduling, reports, customer service.', icon: <i className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799] text-xl bi bi-calendar-check"></i> },
    { title: 'Updates and Scan Results', description: 'You can check updates and scan results on the dashboard.', icon: <i className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799] text-xl bi bi-text-left"></i> },
];

export const teamMembers = [
    { name: 'John Doe', title: 'Co-Founder, CEO', bio: 'Lorem ipsum dolor sit.', facebook: 'https://www.facebook.com', insta: 'https://www.instagram.com', linkedin: 'https://www.linkedin.com', image: Image3 },
    { name: 'John Doe', title: 'Co-Founder, CEO', bio: 'Lorem ipsum dolor sit.', facebook: 'https://www.facebook.com', insta: 'https://www.instagram.com', linkedin: 'https://www.linkedin.com', image: Image3 },
    { name: 'John Doe', title: 'Co-Founder, CEO', bio: 'Lorem ipsum dolor sit.', facebook: 'https://www.facebook.com', insta: 'https://www.instagram.com', linkedin: 'https://www.linkedin.com', image: Image3 },
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

export const valueTiles = [
    { heading: 'Innovation & Excellence', description: 'We continuously innovate to deliver cutting-edge solutions that enhance healthcare efficiency.', icon: <i className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799] bi bi-person-check-fill"></i> },
    { heading: 'Integrity & Trust', description: 'We uphold transparency, security, and compliance to protect sensitive healthcare data.', icon: <i className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799] bi bi-person-check-fill"></i> },
    { heading: 'Patient-Centered Approach', description: 'Our solutions are designed to improve patient care, accessibility, and overall experience.', icon: <i className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799] bi bi-person-check-fill"></i> },
    { heading: ' Collaboration & Growth', description: 'We work closely with healthcare providers to create scalable and sustainable digital solutions.', icon: <i className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799] bi bi-person-check-fill"></i> },
];

export const metrics = [
    { percentage: 50, heading: 'Faster Access to Patient Record' },
    { percentage: 70, heading: 'Increase in Clients Operational Efficiency' },
    { percentage: 99.9, heading: 'Generate & View Medical Certificates' },
    { percentage: 27, heading: 'Cost Savings in Operations' },
];

export const overviewImpact = [
    {
        title: 'Generate & View Medical Certificates',
        description: 'Quickly create, manage, and verify medical certificates in a structured and standardized format. Ensures authenticity and compliance.',
        route: '/',
        image: Image4,
        detailedContent: (
            <div className="space-y-4">
                <p>Our medical certificate generation system streamlines the entire process from creation to verification.</p>
                <h3 className="font-bold text-lg">Key Features:</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Standardized templates compliant with regulatory requirements</li>
                    <li>Digital signatures with timestamp verification</li>
                    <li>Secure storage with controlled access</li>
                    <li>Batch processing capabilities for healthcare institutions</li>
                </ul>
                <p>The system reduces certificate generation time by up to 75% while ensuring complete compliance with medical standards.</p>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="italic">"This system has transformed how we handle medical documentation, saving us countless hours each week." - Dr. Sarah Johnson, Medical Director</p>
                </div>
            </div>
        )
    },
    {
        title: 'Generate & View Medical Certificates',
        description: 'Quickly create, manage, and verify medical certificates in a structured and standardized format. Ensures authenticity and compliance.',
        route: '/',
        image: Image5,
        detailedContent: (
            <div className="space-y-4">
                <p>Our certificate management portal provides healthcare professionals with a comprehensive solution for all documentation needs.</p>
                <div className="grid grid-cols-2 gap-4 my-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-semibold">For Doctors</h4>
                        <p>Quick generation of certificates with pre-filled templates and digital signing capabilities.</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-semibold">For Patients</h4>
                        <p>Secure access to their medical certificates with options to download or share electronically.</p>
                    </div>
                </div>
                <h3 className="font-bold text-lg">Integration Capabilities:</h3>
                <ul className="list-disc pl-5">
                    <li>Seamless connection with existing EHR/EMR systems</li>
                    <li>API access for third-party applications</li>
                    <li>Automated verification processes for employers and institutions</li>
                </ul>
            </div>
        )
    },
    {
        title: 'Generate & View Medical Certificates',
        description: 'Quickly create, manage, and verify medical certificates in a structured and standardized format. Ensures authenticity and compliance.',
        route: '/',
        image: Image6,
        detailedContent: (
            <div className="space-y-4">
                <p>Our certificate verification system provides a robust solution for validating the authenticity of medical documentation.</p>
                <div className="border border-gray-200 rounded-lg p-4 my-4">
                    <h3 className="font-bold text-lg mb-2">Verification Process:</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>QR code or unique identifier scanning</li>
                        <li>Blockchain-based verification of certificate integrity</li>
                        <li>Timestamp validation to prevent tampering</li>
                        <li>Issuer authentication through secure channels</li>
                    </ol>
                </div>
                <p>The system has successfully reduced fraudulent medical certificates by 98% in organizations where implemented.</p>
                <div className="flex items-center gap-2 mt-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p>Real-time verification status</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <p>Immediate flagging of suspicious documents</p>
                </div>
            </div>
        )
    },
    {
        title: 'Generate & View Medical Certificates',
        description: 'Quickly create, manage, and verify medical certificates in a structured and standardized format. Ensures authenticity and compliance.',
        route: '/',
        image: Image7,
        detailedContent: (
            <div className="space-y-4">
                <p>Our comprehensive analytics dashboard provides insights into certificate usage patterns and compliance metrics.</p>
                <div className="my-4">
                    <img src="/path/to/analytics-screenshot.jpg" alt="Analytics Dashboard" className="rounded-lg shadow-md w-full" />
                    <p className="text-sm text-gray-500 mt-1">Sample analytics dashboard showing certificate generation trends</p>
                </div>
                <h3 className="font-bold text-lg">Data Insights Available:</h3>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Certificate generation volume by department</li>
                    <li>Average processing time metrics</li>
                    <li>Verification request patterns</li>
                    <li>Compliance audit trails</li>
                    <li>User activity logs with security monitoring</li>
                </ul>
                <p>These insights help organizations optimize their certificate management processes and ensure regulatory compliance.</p>
            </div>
        )
    },
    {
        title: 'Generate & View Medical Certificates',
        description: 'Quickly create, manage, and verify medical certificates in a structured and standardized format. Ensures authenticity and compliance.',
        route: '/',
        image: Image8,
        detailedContent: (
            <div className="space-y-4">
                <p>Our mobile-first approach ensures that healthcare professionals can generate and manage certificates from anywhere.</p>
                <div className="grid grid-cols-3 gap-3 my-4">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <i className="bi bi-phone text-2xl"></i>
                        <p className="text-sm mt-1">Mobile App</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <i className="bi bi-tablet text-2xl"></i>
                        <p className="text-sm mt-1">Tablet Optimized</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <i className="bi bi-laptop text-2xl"></i>
                        <p className="text-sm mt-1">Desktop Interface</p>
                    </div>
                </div>
                <h3 className="font-bold text-lg">Mobile Features:</h3>
                <ul className="list-disc pl-5">
                    <li>Offline certificate generation with sync when online</li>
                    <li>Camera integration for document scanning</li>
                    <li>Biometric authentication for enhanced security</li>
                    <li>Push notifications for certificate status updates</li>
                </ul>
                <p className="italic text-sm mt-4">Available on iOS and Android platforms with cross-device synchronization.</p>
            </div>
        )
    },
    {
        title: 'Generate & View Medical Certificates',
        description: 'Quickly create, manage, and verify medical certificates in a structured and standardized format. Ensures authenticity and compliance.',
        route: '/',
        image: Image9,
        detailedContent: (
            <div className="space-y-4">
                <p>Our enterprise solution offers comprehensive certificate management for large healthcare networks and hospital systems.</p>
                <div className="bg-gray-50 p-4 rounded-lg my-4">
                    <h3 className="font-bold text-lg mb-2">Enterprise Benefits:</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                            <i className="bi bi-shield-check text-green-500"></i>
                            <p>Enhanced security protocols</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <i className="bi bi-people text-blue-500"></i>
                            <p>Multi-tier access controls</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <i className="bi bi-graph-up text-purple-500"></i>
                            <p>Advanced analytics</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <i className="bi bi-gear text-orange-500"></i>
                            <p>Custom workflow configuration</p>
                        </div>
                    </div>
                </div>
                <p>Our system currently manages over 1.2 million certificates annually for healthcare networks across 12 countries.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">HIPAA Compliant</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">GDPR Ready</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">HL7 Integration</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">24/7 Support</span>
                </div>
            </div>
        )
    },
];
export const policyTopics = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'infoCollection', title: 'Information we collect' },
    { id: 'infoUsage', title: 'How We Use Your Information' },
    { id: 'dataSharing', title: 'Data Sharing and Disclosure' },
    { id: 'international', title: 'International Data Transfer' },
    { id: 'childPrivacy', title: "Children's Privacy" },
];

export const whyJoinUs = [
    { number: 700, title: 'Engineers & Designers', isPercentage: false },
    { number: 50, title: 'Digital Healthcare products built', isPercentage: false },
    { number: 10, title: 'Years of building software Products', isPercentage: false },
    { number: 50, title: 'Year-on-Year Growth', isPercentage: true },
];

export const positions = [
    { title: 'Data Engineer' },
    { title: 'Lead Data Engineer' },
    { title: 'Sales Executives' },
    { title: 'UI/UX Designers' },
];

export const positionDetails = {
    'Data Engineer': {
        description: 'We are seeking a skilled Data Engineer to join our team. The ideal candidate will have experience in designing, building, and maintaining data pipelines and infrastructure.',
        requirements: [
            "Bachelor's degree in Computer Science, Engineering, or related field",
            '3+ years of experience in data engineering',
            'Proficiency in SQL and Python',
            'Experience with cloud platforms (AWS, Azure, or GCP)',
            'Knowledge of big data technologies (Hadoop, Spark, etc.)'
        ]
    },
    'Lead Data Engineer': {
        description: 'We are looking for an experienced Lead Data Engineer to oversee our data engineering team and drive our data infrastructure strategy.',
        requirements: [
            "Master's degree in Computer Science, Engineering, or related field",
            '7+ years of experience in data engineering',
            'Strong leadership and communication skills',
            'Expert-level knowledge of data modeling and ETL processes',
            'Experience with machine learning and AI technologies'
        ]
    },
    'Sales Executives': {
        description: 'Join our dynamic sales team as a Sales Executive. You will be responsible for driving revenue growth by identifying and closing new business opportunities.',
        requirements: [
            "Bachelor's degree in Business, Marketing, or related field",
            '3+ years of B2B sales experience',
            'Strong communication and negotiation skills',
            'Experience with CRM software',
            'Proven track record of meeting or exceeding sales targets'
        ]
    },
    'UI/UX Designers': {
        description: 'We are seeking creative UI/UX Designers to help create intuitive and visually appealing user interfaces for our products.',
        requirements: [
            "Bachelor's degree in Design, HCI, or related field",
            '3+ years of experience in UI/UX design',
            'Proficiency in design tools such as Figma, Sketch, or Adobe XD',
            'Strong portfolio demonstrating user-centered design approach',
            'Experience with user research and usability testing'
        ]
    }
};