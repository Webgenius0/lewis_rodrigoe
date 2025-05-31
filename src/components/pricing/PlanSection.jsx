import React, { useState } from 'react';
import { Tabs } from 'antd';
import PlanCard from './PlanCard';

const { TabPane } = Tabs;

const plans = {
  general: [
    {
      title: 'Basic Plan',
      price: 21,
      features: [
        { label: 'Annual boiler service', available: true },
        { label: 'Boiler and Heating Control', available: true },
        { label: 'Central Heating Repairs', available: false },
        { label: 'Plumbing and Drains', available: false },
        { label: 'Home Electrics', available: false },
      ],
      buttonText: 'Start with Basic Plan',
    },
    {
      title: 'Standard Plan',
      price: 24,
      features: [
        { label: 'Annual boiler service', available: true },
        { label: 'Boiler and Heating Control', available: true },
        { label: 'Central Heating Repairs', available: true },
        { label: 'Plumbing and Drains', available: false },
        { label: 'Home Electrics', available: false },
      ],
      buttonText: 'Start with Standard Plan',
    },
    {
      title: 'Standard Plus Plan',
      price: 28,
      features: [
        { label: 'Annual boiler service', available: true },
        { label: 'Boiler and Heating Control', available: true },
        { label: 'Central Heating Repairs', available: true },
        { label: 'Plumbing and Drains', available: true },
        { label: 'Home Electrics', available: false },
      ],
      buttonText: 'Start with Standard Plus Plan',
      isHighlighted: true,
    },
    {
      title: 'Premium',
      price: 30,
      features: [
        { label: 'Annual boiler service', available: true },
        { label: 'Boiler and Heating Control', available: true },
        { label: 'Central Heating Repairs', available: true },
        { label: 'Plumbing and Drains', available: true },
        { label: 'Home Electrics', available: true },
      ],
      buttonText: 'Start with Premium Plan',
    },
  ],
  landlord: [
    {
      title: 'Standard Plus Plan',
      price: 28,
      features: [
        { label: 'Annual boiler service', available: true },
        { label: 'Boiler and Heating Control', available: true },
        { label: 'Central Heating Repairs', available: true },
        { label: 'Plumbing and Drains', available: true },
        { label: 'Home Electrics', available: false },
      ],
      buttonText: 'Start with Standard Plus Plan',
      isHighlighted: true,
    },
    {
      title: 'Premium',
      price: 30,
      features: [
        { label: 'Annual boiler service', available: true },
        { label: 'Boiler and Heating Control', available: true },
        { label: 'Central Heating Repairs', available: true },
        { label: 'Plumbing and Drains', available: true },
        { label: 'Home Electrics', available: true },
      ],
      buttonText: 'Start with Premium Plan',
    },
  ],
};

const PlanSection = () => {
  const [activeTab, setActiveTab] = useState('general');

  const tabItems = [
    { key: 'general', label: 'General User' },
    { key: 'landlord', label: 'Landlords' },
  ];

  return (
    <section className="bg-white">
      <div className="container mt-14">
        <div className="rounded-[24px] bg-[#000] backdrop-blur-[86px]  w-fit mx-auto flex justify-center">
          <div className="flex gap-2">
            {tabItems.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 text-[16px] font-medium font-[Satoshi] rounded-[24px] transition-all duration-300 text-center
                ${
                  activeTab === tab.key
                    ? 'text-white bg-[linear-gradient(95deg,#09B5FF_0%,#4F81FF_53.67%,#0048FF_100%)]'
                    : 'text-[#9D9D9D]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          
        >
          {(activeTab === 'general' ? plans.general : plans.landlord).map(
            (plan, idx) => (
              <PlanCard key={idx} {...plan} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
