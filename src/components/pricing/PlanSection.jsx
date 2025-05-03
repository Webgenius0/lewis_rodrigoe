// PlanSection.jsx
import React, { useState } from 'react';
import { Tabs, Row, Col } from 'antd';
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

  return (
    <div className="py-28 px-4 max-w-7xl mx-auto">
      <Tabs
        defaultActiveKey="general"
        onChange={(key) => setActiveTab(key)}
        centered
        className="mb-8"
      >
        <TabPane tab="General User" key="general">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.general.map((plan, idx) => (
              <PlanCard key={idx} {...plan} />
            ))}
          </div>
        </TabPane>
        <TabPane tab="Landlords" key="landlord">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.landlord.map((plan, idx) => (
              <PlanCard key={idx} {...plan} />
            ))}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PlanSection;
