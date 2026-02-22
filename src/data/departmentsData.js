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
                "Stroke Management",
                "Epilepsy Treatment",
                "Movement Disorders",
                "Neuro-rehabilitation",
                "Headache & Migraine",
                "Sleep Disorders",
                "Memory Disorders"
            ]
        },
        care: {
            title: "Neurology Care",
            description: "Our Neurology department offers comprehensive diagnostics and treatment for disorders of the nervous system, including the brain, spinal cord, and nerves.",
            items: [
                {
                    id: 1,
                    title: "STROKE CARE",
                    description: "Rapid response and advanced treatment for acute stroke patients to ensure best possible outcomes.",
                    image: care4,
                },
                {
                    id: 2,
                    title: "EPILEPSY TREATMENT",
                    description: "Specialized care for patients with seizure disorders using the latest diagnostic and therapeutic approaches.",
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
