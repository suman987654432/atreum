import React from 'react';
import heroortho from "../images/heroortho.png";
import herogyna from "../images/herogyna.png";
import herouro from "../images/Urology 1.png";
import ortho1 from "../images/ortho1.png";
import gynaIcon from "../images/gyna.png";
import uroIcon from "../images/uro.png";
import neuro from "../images/critical.png";

export const departmentsData = {
    orthopedics: {
        id: "orthopedics",
        name: "Orthopedics",
        hero: {
            image: heroortho,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Movement</span> that takes life <span className="font-bold italic">forward</span>
                </>
            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Knee Replacement",
                "Joint Replacement",
                "Trauma and Fracture Care",
                "Sports Medicine & Arthroscopy",
                "Hand and Wrist Surgery",
                "Deformity Correction",
                "Pediatric Ortho",
                "Shoulder Surgery"
            ]
        },
        care: {
            icon: ortho1,
            title: "Orthopaedic Care",
            description: "Atreum’s Orthopaedics Department is dedicated to helping you move better, live pain-free, and regain your independence. From chronic joint pain and sports injuries to complex joint replacements, our specialists combine advanced technology with personalised care to deliver precise, effective, and compassionate treatment.",
            items: [
                "JOINT PAIN",
                "FRACTURES & TRAUMA",
                "ARTHRITIS",
                "BACK PAIN",
                "SPORTS INJURIES",
                "LIGAMENT TEARS",
                "OSTEOPOROSIS",
                "PEDIATRIC ORTHOPAEDIC ISSUES"
            ]
        },
        doctors: {
            title: "Orthopaedic",
            subtitle: "Specialists",
            description: "The Orthopaedic Specialists at Atreum Hospitals represent a multi-disciplinary team of experienced consultants, each focused on a specific area of musculoskeletal care."
        }
    },
    'obstetrics-gynecology': {
        id: "obstetrics-gynecology",
        name: "Obstetrics & Gynecology",
        hero: {
            image: herogyna,
            centerContent: true,
            title: (
                <>
                    We understand <span className="font-bold italic">womanhood</span> like no one else
                </>
            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Normal Delivery",
                "Caesarean Section (C-Section)",
                "PCOD/PCOS Management",
                "Infertility Treatment",
                "Menopause Care",
                "High-Risk Pregnancy",
                "Laparoscopic Gynaecology Surgery",
                "Hysterectomy"
            ]
        },
        care: {
            icon: gynaIcon,
            title: "Obstetrics and Gynecology Care",
            description: "Atreum’s Obstetrics & Gynaecology Department provides comprehensive care for women at every stage of life. From puberty and pregnancy to menopause and beyond, our expert team offers compassionate, evidence-based care tailored to your unique needs.",
            items: [
                "ANTENATAL CARE",
                "PREGNANCY CONFIRMATION & EARLY SCANS",
                "ROUTINE ANC CHECK-UPS",
                "HIGH-RISK PREGNANCY MANAGEMENT",
                "GESTATIONAL DIABETES & HYPERTENSION CARE",
                "GENERAL GYNECOLOGY",
                "PCOS/PCOD MANAGEMENT",
                "MENSTRUAL DISORDERS",
                "FIBROID UTERUS",
                "OVARIAN CYST",
                "MENOPAUSE CLINIC"
            ]
        },
        doctors: {
            title: "Obstetrics &",
            subtitle: " Specialists",
            description: "The Orthopaedic Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area of musculoskeletal care. Working within a unified clinical framework, they combine specialised expertise with collaborative decision-making to deliver precise, patient-centred treatment."
        }
    },
    urology: {
        id: "urology",
        name: "Urology",
        hero: {
            image: herouro,
            centerContent: true,
            title: (
                <>
                    Restoring <span className="font-bold italic">Comfort, One Step</span> at a Time
                </>
            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Kidney Stones",
                "Urinary Tract Infection (UTI)",
                "Prostate Issues",
                "Bladder Problems",
                "Urological Cancers",
                "Infertility and Sexual Health",
                "Pediatric Urology",
                "Reconstructive Urology"
            ]
        },
        care: {
            icon: uroIcon,
            title: "Urology Care ",
            description: "The Urology Department at Atreum Hospitals provides complete diagnostic and treatment services for diseases of the urinary tract and reproductive organs. Our team of specialists uses advanced laser and robotic technologies to deliver minimally invasive treatments for complex urological conditions.",
            items: [
                "KIDNEY STONES",
                "PROSTATE ENLARGEMENT (BPH)",
                "URINARY TRACT INFECTION (UTI)",
                "URINARY INCONTINENCE",
                "MALE INFERTILITY",
                "ERECTILE DYSFUNCTION",
                "HEMATURIA (BLOOD IN URINE)",
                "BLADDER DISORDERS"
            ]
        },
        doctors: {
            title: "Urology",
            subtitle: "Specialists",
            description: "Our Urology specialists combine clinical excellence with advanced surgical techniques to provide comprehensive care for all urological conditions with precision and empathy."
        }
    },
    neurology: {
        id: "neurology",
        name: "Neurology",
        hero: {
            image: heroortho, // Placeholder
            centerContent: true,
            title: (
                <>
                    Healing the <span className="font-bold italic">Mind & Nerves, At Atreum</span>
                </>
            ),
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
            icon: neuro,
            title: "Neurology Care",
            description: "Our Neurology department offers comprehensive diagnostics and treatment for disorders of the nervous system, including the brain, spinal cord, and nerves. We specialize in evidence-based neurosciences to ensure the best possible outcomes for complex brain and nerve conditions.",
            items: [
                "STROKE (BRAIN ATTACK)",
                "EPILEPSY / SEIZURE DISORDERS",
                "HEADACHE & MIGRAINE",
                "PARKINSON'S DISEASE",
                "NEUROPATHY (NERVE WEAKNESS)",
                "BRAIN TUMORS",
                "VERTIGO & DIZZINESS"
            ]
        },
        doctors: {
            title: "Neurology",
            subtitle: "Specialists",
            description: "Our Neurology specialists are leaders in treating complex brain and nerve conditions with compassion and precision."
        }
    }
};
