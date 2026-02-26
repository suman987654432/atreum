import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DepartmentHero from '../components/departments/DepartmentHero';
import DepartmentCare from '../components/departments/DepartmentCare';
import DepartmentDoctors from '../components/departments/DepartmentDoctors';
import Form from '../components/departments/Form';
import { departmentsData } from '../data/departmentsData';
import doctorsData from '../data/doctors.json';

const SpecialtyPage = () => {
    const { slug } = useParams();
    const department = departmentsData[slug];

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!department) {
        // If it's a legacy route like /orthopedics directly, we should handle it or redirect
        // For now, if slug is not found in departmentsData, we show 404 or redirect to home
        return <Navigate to="/" />;
    }

    // Filter doctors for this department
    const filteredDoctors = doctorsData.filter(doc =>
        doc.specialties.some(s =>
            s.toLowerCase().includes(department.name.toLowerCase()) ||
            department.name.toLowerCase().includes(s.toLowerCase())
        )
    );

    return (
        <div className="specialty-page">
            <DepartmentHero data={department.hero} />
            <DepartmentCare data={department.care} />
            <DepartmentDoctors
                doctors={filteredDoctors}
                title={department.doctors.title}
                subtitle={department.doctors.subtitle}
                description={department.doctors.description}
            />
            <div id="form-section">
                <Form />
            </div>
        </div>
    );
};

export default SpecialtyPage;
