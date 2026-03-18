import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DepartmentHero from '../components/departments/DepartmentHero';
import DepartmentCare from '../components/departments/DepartmentCare';
import DepartmentDoctors from '../components/departments/DepartmentDoctors';
import Form from '../components/departments/Form';
import { departmentsData } from '../data/departmentsData';
import doctorsData from '../data/doctors.json';

const normalizeDepartmentName = (value = '') => (
    value
        .toLowerCase()
        .replace(/&/g, ' and ')
        .replace(/gynaec/g, 'gynec')
        .replace(/paedi/g, 'pedi')
        .replace(/orthopaed/g, 'orthoped')
        .replace(/[^a-z]/g, '')
);

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

    // Match using normalized department names so spelling variants still map correctly.
    const normalizedDepartmentName = normalizeDepartmentName(department.name);
    const normalizedSlug = normalizeDepartmentName(slug);

    const filteredDoctors = doctorsData.filter((doc) => {
        const normalizedDocDepartment = normalizeDepartmentName(doc.department || '');
        const normalizedSpecialties = Array.isArray(doc.specialties)
            ? doc.specialties.map((specialty) => normalizeDepartmentName(specialty))
            : [];

        return [normalizedDocDepartment, ...normalizedSpecialties].some((normalizedValue) => (
            normalizedValue.includes(normalizedDepartmentName) ||
            normalizedDepartmentName.includes(normalizedValue) ||
            normalizedValue.includes(normalizedSlug) ||
            normalizedSlug.includes(normalizedValue)
        ));
    });

    return (
        <div className="specialty-page">
            <DepartmentHero data={department.hero} doctors={filteredDoctors} />
            <DepartmentCare data={department.care} />
            <DepartmentDoctors
                doctors={filteredDoctors}
                departmentName={department.name}
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