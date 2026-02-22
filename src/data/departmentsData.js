import heroortho from "../images/heroortho.png";
import care2 from "../images/care2.png";
import care3 from "../images/care3.png";
import care4 from "../images/care4.png";
import care5 from "../images/care5.png";

export const departmentsData = {
    orthopedics: {
        id: "orthopedics",
        name: "Orthopedics",
        hero: {
            image: heroortho,
            title1: "Open doors",
            title2: "to health.",
            title3: "Open doors",
            title4: "to Atreum",
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Knee Replacement",
                "Joint Replacement",
                "Trauma and Fracture Care",
                "Sports Medicine Surgery",
                "Hand and Wrist Surgery",
                "Deformity Correction",
                "Pediatric Ortho",
                "Shoulder Surgery"
            ]
        },
        care: {
            title: "Orthopaedic Care",
            description: "Orthopaedics at Atreum Hospitals is a multi-disciplinary department dedicated to the diagnosis, treatment, and long-term management of conditions affecting bones, joints, muscles, and the spine.",
            items: [
                {
                    id: 1,
                    title: "JOINT REPLACEMENT",
                    description: "Our department is dedicated to the diagnosis, treatment, and management of conditions affecting bones, joints, and muscles.",
                    image: care4,
                },
                {
                    id: 2,
                    title: "SPORTS MEDICINE",
                    description: "Our sports medicine team provides comprehensive care for athletes of all levels, focusing on injury prevention and rehabilitation.",
                    image: care5,
                },
                {
                    id: 3,
                    title: "SPINE CARE",
                    description: "We offer advanced treatments for spinal conditions, ranging from minimally invasive to complex spinal surgeries.",
                    image: care3,
                },
                {
                    id: 4,
                    title: "TRAUMA CARE",
                    description: "Dedicated to the diagnosis, treatment, and long-term management of complex fractures and trauma cases.",
                    image: care2,
                },
                {
                    id: 5,
                    title: "PHYSIOTHERAPY",
                    description: "Our rehabilitation team provides personalized therapy plans to help you recover strength and mobility after surgery.",
                    image: care5,
                }
            ]
        },
        doctors: {
            title: "Orthopaedic",
            subtitle: "Specialists",
            description: "The Orthopaedic Specialists at Atreum Hospitals represent a multi-disciplinary team of experienced consultants, each focused on a specific area of musculoskeletal care."
        }
    },
    neurology: {
        id: "neurology",
        name: "Neurology",
        hero: {
            image: heroortho, // Placeholder
            title1: "Healing the",
            title2: "mind & nerves.",
            title3: "Advanced care",
            title4: "at Atreum",
            formTitle: "Expert neuro care",
            formSubtitle: "dedicated to your recovery",
            concerns: [
                "Stroke (Brain attack)",
                "Epilepsy / Seizure disorders",
                "Headache & Migraine",
                "Parkinson’s disease",
                "Neuropathy (Nerve weakness)"
            ]
        },
        care: {
            title: "Neurology Care",
            description: "Our Neurology department offers comprehensive diagnostics and treatment for disorders of the nervous system, including the brain, spinal cord, and nerves.",
            items: [
                {
                    id: 1,
                    title: "STROKE (BRAIN ATTACK)",
                    description: "Rapid diagnosis and emergency neuro care for stroke patients to reduce long-term complications and improve recovery outcomes.",
                    image: care4,
                },
                {
                    id: 2,
                    title: "EPILEPSY / SEIZURE DISORDERS",
                    description: "Specialized evaluation and treatment plans for seizure control with modern diagnostics, medication planning, and follow-up.",
                    image: care5,
                },
                {
                    id: 3,
                    title: "HEADACHE & MIGRAINE",
                    description: "Comprehensive migraine and chronic headache management using trigger analysis, preventive therapies, and personalized care.",
                    image: care3,
                },
                {
                    id: 4,
                    title: "PARKINSON'S DISEASE",
                    description: "Multi-disciplinary Parkinson’s care focused on symptom control, mobility support, and long-term quality of life.",
                    image: care2,
                },
                {
                    id: 5,
                    title: "NEUROPATHY (NERVE WEAKNESS)",
                    description: "Accurate diagnosis and treatment of nerve weakness, numbness, and pain through medical and rehabilitative neuro care.",
                    image: care5,
                }
            ]
        },
        doctors: {
            title: "Neurology",
            subtitle: "Specialists",
            description: "Our Neurology specialists are leaders in treating complex brain and nerve conditions with compassion and precision."
        }
    }
    // Add more departments here as needed...
};
