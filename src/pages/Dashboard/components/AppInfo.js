import React from 'react';
import { FaEllipsisV } from '@react-icons/all-files/fa/FaEllipsisV';

const AppInfo = ({ title, data, icon, iconBgColor }) => {
    return (
        <div className="p-4 rounded-lg border bg-white border-gray-300 mb-4 w-full max-w-sm">
            <div className="flex items-center justify-between">
                <div className={`flex items-center justify-center rounded-md p-3 ${iconBgColor}`}>
                    <img src={icon} alt={title} className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold flex-1 ml-3">{title}</h3>
                <div className="ml-auto">
                    <FaEllipsisV className="text-gray-500" />
                </div>
            </div>
            <div className="mt-2 p-2 bg-gray-100 rounded">
                <h2 className="text-2xl font-bold text-center">{data}</h2>
            </div>
        </div>
    );
};

export default AppInfo;

