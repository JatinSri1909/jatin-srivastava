import React from 'react';
import { Education as EducationType } from '../types/resume';

interface EducationProps {
  education: EducationType[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{edu.institution}</h3>
                <p className="text-gray-600">{edu.degree}</p>
              </div>
              <span className="text-gray-500 text-sm">{edu.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};