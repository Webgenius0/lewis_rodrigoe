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
      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'linear-gradient(95deg, #09B5FF 0%, #4F81FF 53.67%, #0048FF 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-0">
        <h3 className="text-left font-[Manrope] text-[18px] not-italic font-bold leading-[28px] text-[#0C1523] group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <h2 className="text-[#12141D] my-2 font-[Manrope] text-[32px] md:text-[42px] lg:text-[52px] not-italic font-medium leading-[52px] group-hover:text-white transition-colors duration-300">
          £{price}{' '}
          <span className="text-[#495460] font-[Manrope] text-[16px] not-italic font-medium leading-[24px] group-hover:text-white transition-colors duration-300">
            / Per Month
          </span>
        </h2>

        <ul className="my-4 space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 text-left">
          {features.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-center gap-1.5 md:gap-2.5 transition-colors duration-300 font-[Manrope] text-[16px] not-italic font-medium leading-[24px] ${
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

        <Button
          className="w-full mt-4 text-[#0C1523] text-right font-[Manrope] text-[14px] md:text-[15px] lg:text-[16px] not-italic font-medium leading-[24px] rounded-[12px] border-[1.5px] border-[solid] border-[#CBD2D9] px-3 md:px-4 lg:px-[24px] py-[18px]"
          type="default"
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default PlanCard;
