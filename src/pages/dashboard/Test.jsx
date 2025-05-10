import React, { useState } from 'react';
import { Table, DatePicker } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { MonthPicker } = DatePicker;

const MyProperties = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const dataSource = [
    {
      key: '1',
      name: 'Sunset Villa',
      location: 'New York',
      boiler: 'Boiler A',
      service: 'Annual',
      plan: 'Gold',
      status: 'Active',
      date: '2024-09',
    },
    {
      key: '2',
      name: 'Ocean Breeze',
      location: 'Los Angeles',
      boiler: 'Boiler B',
      service: 'Monthly',
      plan: 'Silver',
      status: 'Pending',
      date: '2024-08',
    },
    {
      key: '3',
      name: 'Green House',
      location: 'Chicago',
      boiler: 'Boiler C',
      service: 'Quarterly',
      plan: 'Basic',
      status: 'Inactive',
      date: '2024-09',
    },
  ];

  const handleMonthChange = (date, dateString) => {
    setSelectedMonth(dateString);
  };

  const handleChange = (pagination, filters, sorter) => {
    setSortField(sorter.field);
    setSortOrder(sorter.order);
  };

  const getTitleWithSortIcon = (title, field) => (
    <div className="flex items-center gap-1">
      {title}
      {sortField === field &&
        (sortOrder === 'ascend' ? <ArrowUpOutlined /> : <ArrowDownOutlined />)}
    </div>
  );

  const columns = [
    {
      title: getTitleWithSortIcon('Property Name', 'name'),
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: getTitleWithSortIcon('Location', 'location'),
      dataIndex: 'location',
      key: 'location',
      sorter: (a, b) => a.location.localeCompare(b.location),
    },
    {
      title: getTitleWithSortIcon('Boiler Info', 'boiler'),
      dataIndex: 'boiler',
      key: 'boiler',
      sorter: (a, b) => a.boiler.localeCompare(b.boiler),
    },
    {
      title: getTitleWithSortIcon('Service', 'service'),
      dataIndex: 'service',
      key: 'service',
      sorter: (a, b) => a.service.localeCompare(b.service),
    },
    {
      title: getTitleWithSortIcon('Plans', 'plan'),
      dataIndex: 'plan',
      key: 'plan',
      sorter: (a, b) => a.plan.localeCompare(b.plan),
    },
    {
      title: getTitleWithSortIcon('Status', 'status'),
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
  ];

  const filteredData = selectedMonth
    ? dataSource.filter((item) => item.date === selectedMonth)
    : dataSource;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Properties</h2>
        <MonthPicker
          onChange={handleMonthChange}
          placeholder="Filter by Month"
          format="YYYY-MM"
          allowClear
          className="w-[200px]"
        />
      </div>

      <div className="overflow-x-auto max-h-[70vh] overflow-y-auto">
        <Table
          columns={columns}
          dataSource={filteredData}
          onChange={handleChange}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 'max-content', y: 400 }}
        />
      </div>
    </div>
  );
};

export default MyProperties;
