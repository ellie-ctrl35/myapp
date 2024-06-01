import React from 'react';

const ComponentType1 = ({ title, data, icon, iconBgColor, timePeriod }) => {
    return (
        <div className="p-4 rounded-lg border border-gray-300 mb-4 w-full max-w-sm">
            
            <div className="flex flex-col w-full">
                <div className="flex justify-between items-center">
                <div className={`flex items-center justify-center rounded-full p-3 mr-3 ${iconBgColor}`}>
                <img src={icon} alt={title} className="w-4 h-4" />
            </div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <span className="text-sm text-gray-500 ml-auto">{timePeriod}</span>
                </div>
                <div className="mt-2 p-2 bg-gray-100 rounded">
                <h2 className="text-2xl font-bold text-center">{data}</h2>
            </div>
            </div>
        </div>
    );
};

export default ComponentType1;
