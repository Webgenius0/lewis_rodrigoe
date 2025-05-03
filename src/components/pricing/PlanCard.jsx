// PlanCard.jsx
import React from 'react';
import { Card, Button } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const PlanCard = ({ title, price, features, buttonText }) => {
  return (
    <Card
      bordered
      className="text-center rounded-xl bg-white transition-all duration-300 hover:scale-105 group overflow-hidden"
      style={{
        transition: 'all 0.3s ease-in-out',
      }}
    >
      {/* Background overlay for hover effect */}
      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'linear-gradient(95deg, #09B5FF 0%, #4F81FF 53.67%, #0048FF 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-4">
        <h3 className="text-lg font-semibold text-[#0C1523] group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <h2 className="text-3xl font-bold my-2 text-[#0C1523] group-hover:text-white transition-colors duration-300">
          £{price}{' '}
          <span className="text-base font-normal text-[#0C1523] group-hover:text-white transition-colors duration-300">
            / Per Month
          </span>
        </h2>

        <ul className="my-4 space-y-2 text-left">
          {features.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-center gap-2 transition-colors duration-300 ${
                item.available
                  ? 'text-[#0C1523] group-hover:text-white'
                  : 'text-[#98A5B3]'
              }`}
            >
              {item.available ? (
                <CheckOutlined className="transition-colors duration-300 text-[#14B082] group-hover:text-[#06FF34]" />
              ) : (
                <CloseOutlined className="text-[#98A5B3]" />
              )}
              {item.label}
            </li>
          ))}
        </ul>

        <Button className="w-full mt-4" type="default">
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default PlanCard;
