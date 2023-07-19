import React from 'react';

interface ChevronDownProps {
    fill?: string;
}

const ChevronDown: React.FC<ChevronDownProps> = ({ fill = "#fff" }) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill={fill} 
            width="10" 
            height="10" 
            viewBox="0 0 24 24"
        >
            <path d="M12 21l-12-18h24z" />
        </svg>
    );
}

export default ChevronDown;
