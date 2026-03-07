import React from 'react';
import heroortho from "../images/heroortho.png";
import herogyna from "../images/herogyna.png";
import herouro from "../images/Urology 1.png";
import ortho1 from "../images/ortho1.png";
import gynaIcon from "../images/gyna.png";
import uroIcon from "../images/uro.png";
import gastroIcon from "../images/gastro.png";
import gastrohero from "../images/gastrohero.png";
import dermahero from "../images/dermahero.png";
import dermaIcon from "../images/derma.png";
import endohero from "../images/endohero.png";
import endoIcon from "../images/endrio.png";
import pediahero from "../images/pediahero.png";
import pediaIcon from "../images/pedia.png";
import neurohero from "../images/neurohero.png";
import neuroIcon from "../images/neuro.png";
import nephrohero from "../images/nephrohero.png";
import nephroIcon from "../images/nephro.png";
import plasticshero from "../images/plasticshero.png";
import plastic from "../images/plastics.png";
import generalhero from "../images/generalhero.png";
import general from "../images/general.png";
import oncohero from "../images/oncohero.png";
import onco from "../images/onco.png";
import vascularhero from "../images/vascularhero.png";
import vas from "../images/vas.png";
import enthero from "../images/enthero.png";
import ent from "../images/ent.png";




export const departmentsData = {
    orthopedics: {
        id: "orthopedics",
        name: "Orthopaedics",
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
                "Paediatric Ortho",
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
                "PAEDIATRIC ORTHOPAEDIC ISSUES"
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
                    We understand <span className="font-bold italic">womanhood</span><br />like no one else
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
            description: "The Obstetrics & Gynaecology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on comprehensive women's healthcare. Working within a unified clinical framework, they combine specialised expertise with collaborative decision-making to deliver precise, patient-centred treatment."
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
                    Restoring <span className="font-bold italic">Comfort, <br /> One Step</span> at a Time
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
                "Paediatric Urology",
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
            image: neurohero,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Healing </span> the mind, <br /> <span className="font-bold italic">Empowering </span> life
                </>

            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Stroke (Brain attack)",
                "Epilepsy / Seizure disorders",
                "Headache & Migraine",
                "Parkinson’s disease",
                "Neuropathy (Nerve weakness)",
                "Multiple Sclerosis",
                "Dementia / Memory Disorders",
                "Vertigo"
            ]
        },
        care: {
            icon: neuroIcon,
            title: "Neurology Care",
            description: "Atreum’s Neurology Department is committed to supporting your brain and nervous system health, so you can live with clarity and confidence. From migraines and nerve disorders to complex neurological conditions, our specialists use advanced evaluation methods and an individualised approach to deliver accurate, thoughtful, and compassionate care.",
            items: [
                "STROKE (BRAIN ATTACK)",
                "EPILEPSY / SEIZURE DISORDERS",
                "HEADACHE & MIGRAINE",
                "PARKINSON’S DISEASE",
                "NEUROPATHY (NERVE WEAKNESS)",
                "MULTIPLE SCLEROSIS",
                "DEMENTIA / MEMORY DISORDERS",
                "VERTIGO",
                "MYASTHENIA GRAVI"
            ]
        },
        doctors: {
            title: "Neurology",
            subtitle: "Specialists",
            description: "Our Neurology specialists are leaders in treating complex brain and nerve conditions with compassion and precision."
        }
    },
    gastroenterology: {
        id: "gastroenterology",
        name: "Gastroenterology",
        hero: {
            image: gastrohero, // Placeholder
            centerContent: true,
            title: (
                <>

                    Helping You Feel <span className="font-bold italic">Good,</span> <br /> From the <span className="font-bold italic">Inside Out</span>
                </>
            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Acid Reflux / GERD",
                "Gastritis & Peptic Ulcer",
                "IBS (Irritable Bowel Syndrome)",
                "Inflammatory Bowel Disease (IBD)",
                "Liver Diseases (Fatty Liver, Hepatitis)",
                "Pancreatitis",
                "GI Bleeding",
                "Jaundice"
            ]
        },
        care: {
            icon: gastroIcon,
            title: "Gastroenterology Care",
            description: "Atreum’s Gastroenterology Department is dedicated to keeping your digestive system healthy and functioning at its best. From common concerns like acidity and indigestion to complex gastrointestinal disorders, our specialists use advanced diagnostics and a personalised approach to provide accurate, effective, and compassionate care.",
            items: [
                "ACID REFLUX / GERD",
                "GASTRITIS & PEPTIC ULCER",
                "IBS (IRRITABLE BOWEL SYNDROME)",
                "INFLAMMATORY BOWEL DISEASE (IBD)",
                "LIVER DISEASES (FATTY LIVER, HEPATITIS)",
                "PANCREATITIS",
                "GI BLEEDING",
                "JAUNDICE"
            ],
            sections: [
                {
                    title: "DIAGNOSTIC & THERAPEUTIC PROCEDURES",
                    items: [
                        "Upper GI Endoscopy",
                        "Colonoscopy",
                        "ERCP",
                        "Sigmoidoscopy",
                        "Endoscopic Polypectomy",
                        "Variceal banding",
                        "PEG tube insertion"
                    ]
                },
                {
                    title: "SURGERIES PERFORMED",
                    items: [
                        "Upper GI Endoscopy",
                        "Colonoscopy",
                        "ERCP",
                        "Sigmoidoscopy",
                        "Endoscopic Polypectomy",
                        "Variceal banding",
                        "PEG tube insertion"
                    ]
                },
                {
                    title: "EMERGENCY GI SURGERIES",
                    items: [
                        "Upper GI Endoscopy",
                        "Colonoscopy",
                        "ERCP",
                        "Sigmoidoscopy",
                        "Endoscopic Polypectomy",
                        "Variceal banding",
                        "PEG tube insertion"
                    ]
                }
            ]
        },

        doctors: {
            title: "Gastroenterology",
            subtitle: "Specialists",
            description: "Our Gastroenterology specialists provide expert care for a wide range of digestive and liver conditions, combining advanced diagnostics with a patient-centered approach."
        }
    },
    dermatology: {
        id: "dermatology",
        name: "Dermatology",
        hero: {
            image: dermahero,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Care </span>that makes you glow <br /> from <span className="font-bold italic">within</span>
                </>

            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Acne & Scarring",
                "Skin Allergies",
                "Psoriasis & Eczema",
                "Mole Mapping",
                "Skin Biopsies",
                "Hair & Nail Disorders",
                "Pigmentation Treatment",
                "Skin Infections"
            ]
        },
        care: {
            icon: dermaIcon,
            title: "Dermatology Care",
            description: "Atreum’s Dermatology Department is dedicated to keeping your skin healthy, confident, and well cared for. From everyday concerns like acne and allergies to chronic skin conditions, our specialists combine advanced treatments with a personalised approach to deliver safe, effective, and compassionate care.",
            items: [
                "SKIN BIOPSIES",
                "ALLERGY TESTING",
                "MOLE MAPPING",
                "PHOTOTHERAPY FOR PSORIASIS",
                "ACNE TREATMENT"
            ]
        },
        doctors: {
            title: "Dermatology",
            subtitle: "Specialists",
            description: "Our Dermatology specialists combine clinical expertise with a focus on skin health to provide comprehensive care for all dermatological conditions."
        }
    },
    endocrinology: {
        id: "endocrinology",
        name: "Endocrinology",
        hero: {
            image: endohero,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Balance</span> that nurtures your <span className="font-bold italic">well-being</span>
                </>
            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Diabetes (Type 1 & 2)",
                "Thyroid Disorders",
                "PCOS / Hormonal Imbalance",
                "Metabolic Bone Disease",
                "Obesity & Weight Management",
                "Pituitary Disorders",
                "Adrenal Gland Issues",
                "Growth Disorders"
            ]
        },
        care: {
            icon: endoIcon,
            title: "Endocrinology Care",
            description: "Atreum’s Endocrinology Department is dedicated to maintaining hormonal balance and supporting your overall health. From diabetes and thyroid disorders to complex metabolic conditions, our specialists combine advanced testing with a personalised approach to deliver accurate, effective, and compassionate care.",
            items: [
                "DIABETES MANAGEMENT",
                "THYROID DISORDERS",
                "METABOLIC BONE DISEASE CARE",
                "HORMONE REPLACEMENT THERAPY"
            ]
        },
        doctors: {
            title: "Endocrinology",
            subtitle: "Specialists",
            description: "Our Endocrinology specialists represent a multi-disciplinary team focused on hormonal health and metabolic wellness, providing precise and empathetic care."
        }
    },
    pediatrics: {
        id: "pediatrics",
        name: "Pediatrics",
        hero: {
            image: pediahero,
            centerContent: true,
            title: (
                <>
                    Trust the  <span className="font-bold italic">experts </span> for, <br />your <span className="font-bold italic">little ones </span>
                </>

            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Newborn Check-ups",
                "Growth & Development Monitoring",
                "Vaccination Programs",
                "Fever & Infection Management",
                "Asthma & Allergy Clinic",
                "Nutritional Counseling",
                "School Health Programs",
                "Pediatric Emergency Care"
            ]
        },
        care: {
            icon: pediaIcon,
            title: "Pediatrics Care",
            description: "Atreum’s Pediatrics Department is dedicated to nurturing your child’s health at every stage of growth. From routine check-ups and vaccinations to managing childhood illnesses, our specialists provide gentle, attentive care with a focus on comfort, development, and overall well-being.",
            items: [
                "NEWBORN CHECK-UPS",
                "GROWTH & DEVELOPMENT MONITORING",
                "VACCINATION PROGRAMS",
                "FEVER & INFECTION MANAGEMENT",
                "ASTHMA & ALLERGY CLINIC",
                "NUTRITIONAL COUNSELING",
                "SCHOOL HEALTH PROGRAMS"
            ]
        },
        doctors: {
            title: "Pediatric",
            subtitle: "Specialists",
            description: "Our Pediatric specialists combine clinical excellence with a gentle, child-friendly approach to ensure the best health outcomes for your little ones."
        }
    },
    nephrology: {
        id: "nephrology",
        name: "Nephrology",
        hero: {
            image: nephrohero,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Guiding </span> Your Body <br /> Back in <span className="font-bold italic">Sync </span>
                </>
            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Chronic Kidney Disease (CKD)",
                "Kidney Stones",
                "Dialysis Requirement",
                "High Blood Pressure (Renal)",
                "Proteinuria / Hematuria",
                "Electrolyte Imbalance",
                "Urinary Tract Infections",
                "Kidney Transplant Follow-up"
            ]
        },
        care: {
            icon: nephroIcon,
            title: "Nephrology Care",
            description: "Atreum’s Nephrology Department focuses on preserving kidney function and supporting your overall well-being. Whether it’s managing early kidney concerns, chronic conditions, or advanced renal care including dialysis, our specialists use modern diagnostics and a patient-centric approach to provide accurate, reliable, and compassionate care.",
            items: [
                "CHRONIC KIDNEY DISEASE (CKD)",
                "ACUTE KIDNEY INJURY (AKI)",
                "DIABETIC NEPHROPATHY",
                "HYPERTENSIVE KIDNEY DISEASE",
                "NEPHROTIC SYNDROME",
                "URINARY TRACT DISORDERS",
                "ELECTROLYTE IMBALANCE",
                "KIDNEY STONES (MEDICAL MANAGEMENT)",
                "24/7 DIALYSIS SUPPORT",
                "EMERGENCY DIALYSIS"
            ]
        },
        doctors: {
            title: "Nephrology",
            subtitle: "Specialists",
            description: "Our Nephrology specialists combine clinical excellence with advanced renal care to provide comprehensive support for patients with kidney-related conditions."
        }
    },
    plastics: {
        id: "plastics",
        name: "Plastics Surgery",
        hero: {
            image: plasticshero,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Unique care, </span> <br />just the way you like it
                </>

            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Reconstructive Surgery",
                "Burn care & Management",
                "Scar Revision",
                "Aesthetic Procedures",
                "Hand & Wrist Surgery",
                "Facial Reconstruction",
                "Body Contouring",
                "Congenital Deformities"
            ]
        },
        care: {
            icon: plastic,
            title: "Plastics Care",
            description: "Atreum’s Plastic Surgery Department is dedicated to restoring form, function, and confidence. From reconstructive procedures to address injuries and medical conditions to aesthetic enhancements, our specialists combine surgical expertise with a personalised approach to deliver safe, precise, and compassionate care.",
            items: [
                "RECONSTRUCTIVE SURGERY AFTER TRAUMA/CANCER",
                "BURN CARE",
                "SCAR REVISION",
                "AESTHETIC PROCEDURES"
            ]
        },
        doctors: {
            title: "Plastics",
            subtitle: "Specialists",
            description: "Our Plastic Surgeons represent a team of highly skilled consultants focused on reconstructive and aesthetic excellence."
        }
    },
    'general-surgery': {
        id: "general-surgery",
        name: "General Surgery",
        hero: {
            image: generalhero,
            centerContent: true,
            title: (
                <>
                    Where<span className="font-bold italic">care, comfort, </span> and <br /> <span className="font-bold italic">excellence </span> come together
                </>
            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Appendicitis",
                "Hernia (Inguinal, Umbilical)",
                "Gallbladder Stones",
                "Piles / Fissure / Fistula",
                "Thyroid Surgery",
                "Breast Lump Removal",
                "Laparoscopic Surgery",
                "Trauma Surgery"
            ]
        },
        care: {
            icon: general,
            title: "General Surgery Care",
            description: "Atreum’s General Surgery Department is dedicated to providing safe, effective surgical care for a wide range of conditions. From routine procedures to more complex surgeries, our specialists combine clinical expertise with modern techniques and a patient-focused approach to ensure smooth recovery and compassionate care.",
            items: [
                "APPENDICITIS",
                "HERNIA (INGUINAL, UMBILICAL, INCISIONAL)",
                "GALLBLADDER STONES",
                "PILES / FISSURE / FISTULA",
                "THYROID DISORDERS",
                "BREAST LUMPS",
                "ABSCESS DRAINAGE",
                "SOFT TISSUE TUMORS"
            ]
        },
        doctors: {
            title: "General",
            subtitle: "Specialists",
            description: "Our General Surgery specialists represent a team of experienced surgeons providing comprehensive surgical management for a broad spectrum of diseases."
        }
    },
    oncology: {
        id: "oncology",
        name: "Oncology",
        hero: {
            image: oncohero,
            centerContent: true,
            title: (
                <>
                    Delivering <span className="font-bold italic">hope </span> and <span className="font-bold italic">expertise </span>
                </>

            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Cancer Screening",
                "Chemotherapy",
                "Targeted Therapy",
                "Immunotherapy",
                "Hormonal Therapy",
                "Palliative Care",
                "Early Detection",
                "Tumor Board Consultation"
            ]
        },
        care: {
            icon: onco,
            title: "Oncology Care",
            description: "Atreum’s Oncology Department is dedicated to providing comprehensive cancer care with empathy and precision. From early detection and diagnosis to advanced treatment and ongoing support, our specialists combine modern therapies with a personalised approach to guide you through every step of your care journey.",
            items: [
                "CHEMOTHERAPY (DAY-CARE MODEL)",
                "TARGETED THERAPY",
                "IMMUNOTHERAPY",
                "HORMONAL THERAPY",
                "PALLIATIVE CARE",
                "CANCER SCREENING PROGRAMS"
            ]
        },
        doctors: {
            title: "Oncology",
            subtitle: "Specialists",
            description: "Our Oncology specialists combine clinical expertise with a compassionate approach to provide advanced cancer care and support throughout the treatment process."
        }
    },
    'vascular-surgery': {
        id: "vascular-surgery",
        name: "Vascular Surgery",
        hero: {
            image: vascularhero,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Timely care, </span>when it <br /> matters the  <span className="font-bold italic">most </span>
                </>

            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Peripheral Artery Disease (PAD)",
                "Diabetic Foot Ulcers",
                "Deep Vein Thrombosis (DVT)",
                "Aneurysms (Non-Cardiac)",
                "Varicose Veins",
                "Carotid Artery Disease",
                "Chronic Non-healing Wounds",
                "Lymphedema Management"
            ]
        },
        care: {
            icon: vas,
            title: "Vascular Care",
            description: "Atreum’s Vascular Surgery Department is dedicated to maintaining healthy blood flow and preventing complications of vascular disease. From circulation issues and varicose veins to complex arterial conditions, our specialists combine advanced techniques with a personalised approach to deliver precise, effective, and compassionate care.",
            items: [
                "PERIPHERAL ARTERY DISEASE (PAD)",
                "DIABETIC FOOT ULCERS",
                "DEEP VEIN THROMBOSIS (DVT)",
                "ANEURYSMS (NON-CARDIAC)",
                "VARICOSE VEINS",
                "CAROTID ARTERY DISEASE",
                "CHRONIC NON-HEALING WOUNDS"
            ]
        },
        doctors: {
            title: "Vascular",
            subtitle: "Specialists",
            description: "Our Vascular Surgery specialists represent a team of experienced consultants focused on comprehensive circulatory health and advanced surgical interventions."
        }
    },
    ent: {
        id: "ent",
        name: "ENT",
        hero: {
            image: enthero,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Caring </span> For the Senses <br /> That  <span className="font-bold italic">Connect You </span>  to Life
                </>

            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Sinusitis",
                "Deviated Nasal Septum (DNS)",
                "Tonsillitis",
                "Hearing Loss",
                "Vertigo",
                "Ear Infections",
                "Nasal Polyps",
                "Voice Disorders"
            ]
        },
        care: {
            icon: ent,
            title: "ENT Care",
            description: "Atreum’s ENT Department is dedicated to caring for your ear, nose, and throat health with precision and compassion. From everyday concerns like infections and allergies to complex conditions affecting hearing, breathing, and voice, our specialists use advanced diagnostics and a personalised approach to deliver effective and reliable care.",
            items: [
                "SINUSITIS",
                "DEVIATED NASAL SEPTUM (DNS)",
                "TONSILLITIS",
                "HEARING LOSS",
                "VERTIGO",
                "EAR INFECTIONS",
                "NASAL POLYPS",
                "VOICE DISORDERS"
            ]
        },
        doctors: {
            title: "ENT",
            subtitle: "Specialists",
            description: "Our ENT specialists provide comprehensive care for ear, nose, and throat conditions, utilizing advanced diagnostic tools and surgical techniques."
        }
    }
};









