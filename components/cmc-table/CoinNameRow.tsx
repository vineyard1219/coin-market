import React from 'react';
import Image from "next/image";

interface CoinNameRowProps {
  name: string;
  icon: string;
}

const CoinNameRow: React.FC<CoinNameRowProps> = ({ name, icon }) => {
  return (
    <div className="flex">
      <Image src={icon} alt={name} width={20} height={20} />
      <p>{name ||   undefined}</p>
    </div>
  );
}

export default CoinNameRow;
