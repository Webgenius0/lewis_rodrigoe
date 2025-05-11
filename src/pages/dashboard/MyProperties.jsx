import { useState } from 'react';
import { DatePicker, Table } from 'antd';
import dayjs from 'dayjs';
import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import AddPropertyModal from './AddPropertyModal';
const { Search } = Input;

const columns = [
  {
    title: 'Property Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Location',
    dataIndex: 'location',
    sorter: (a, b) => a.location.localeCompare(b.location),
  },
  {
    title: 'Boiler Info',
    dataIndex: 'phone',
  },
  {
    title: 'Service',
    dataIndex: 'service',
    render: (service) => (
      <span className="inline-block w-3 h-5 rounded bg-[#FDD9B5]"></span>
    ),
  },
  {
    title: 'Plans',
    dataIndex: 'plan',
    sorter: (a, b) => a.plan.localeCompare(b.plan),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    filters: [
      { text: 'Active', value: 'Active' },
      { text: 'Pending', value: 'Pending' },
    ],
    onFilter: (value, record) => record.status === value,
    render: (status) => {
      const isActive = status === 'Active';
      const bgColor = isActive ? 'bg-[#2F6FED]' : 'bg-[#FEE4E2]';
      const textColor = isActive ? 'text-white' : 'text-[#D92D20]';
      return (
        <span
          className={`${bgColor} ${textColor} text-xs px-3 py-1 rounded-full`}
        >
          {status}
        </span>
      );
    },
  },
];


const onSearch = (value, _e, info) =>
  console.log(info === null || info === void 0 ? void 0 : info.source, value);

const MyProperties = () => {
  const [sortBy, setSortBy] = useState('latest');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState(
    dayjs('2030-10', 'YYYY-MM')
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mockData = Array.from({ length: 20 }, (_, i) => ({
    key: i,
    name: `User ${i + 1}`,
    location: `location${i + 1}@example.com`,
    phone: `(404) 555-01${String(i).padStart(2, '0')}`,
    service: true,
    plan: ['Basic', 'Standard', 'Premium'][i % 3],
    status: i % 2 === 0 ? 'Active' : 'Pending',
  }));
  

  return (
    <div className="p-6 bg-white rounded-xl shadow w-full">
      {/* Top Bar */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <h2 className="text-2xl font-semibold">My Properties</h2>

        <div className="flex flex-wrap gap-2 items-center">
          {/* Search */}
          <Input
            placeholder="Search properties"
            onPressEnter={(e) =>
              onSearch(e.target.value, null, { source: 'input' })
            }
            style={{ width: 200 }}
            prefix={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.34375 2.1875C4.04832 2.1875 2.1875 4.04832 2.1875 6.34375C2.1875 8.63918 4.04832 10.5 6.34375 10.5C8.63918 10.5 10.5 8.63918 10.5 6.34375C10.5 4.04832 8.63918 2.1875 6.34375 2.1875ZM1.3125 6.34375C1.3125 3.56507 3.56507 1.3125 6.34375 1.3125C9.12243 1.3125 11.375 3.56507 11.375 6.34375C11.375 9.12243 9.12243 11.375 6.34375 11.375C3.56507 11.375 1.3125 9.12243 1.3125 6.34375Z"
                  fill="#6D6E75"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.28283 9.28283C9.45368 9.11197 9.73069 9.11197 9.90155 9.28283L12.5594 11.9406C12.7302 12.1115 12.7302 12.3885 12.5594 12.5594C12.3885 12.7302 12.1115 12.7302 11.9406 12.5594L9.28283 9.90155C9.11197 9.73069 9.11197 9.45368 9.28283 9.28283Z"
                  fill="#6D6E75"
                />
              </svg>
            }
          />

          {/* Filter Dropdown */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border px-3 py-1.5 rounded-md text-sm"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
          </select>

          {/* Month Picker */}
          <DatePicker
            picker="month"
            value={selectedMonth}
            onChange={(date) => setSelectedMonth(date)}
            format="MMMM YYYY"
            className="w-[180px]"
            allowClear={false}
          />

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border px-3 py-1.5 rounded-md text-sm"
          >
            <option value="latest">Sort by: Latest</option>
            <option value="oldest">Sort by: Oldest</option>
          </select>

          {/* Add Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#2F6FED] text-white px-4 py-1.5 rounded-md text-sm"
          >
            Add Properties
          </button>
        </div>
      </div>
      <AddPropertyModal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Table Wrapper with Responsive Scroll */}
      <div className="overflow-x-auto max-h-[500px] overflow-y-auto border rounded-lg">
        <Table
          columns={columns}
          dataSource={mockData}
          pagination={{ pageSize: 10 }}
          onChange={(pagination, filters, sorter, extra) => {
            console.log('params', pagination, filters, sorter, extra);
          }}
          rowKey={(record, index) => index}
        />
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm mt-4">
        <span>Showing 1–10 of 124</span>
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`w-8 h-8 rounded border ${
                currentPage === num
                  ? 'bg-[#2F6FED] text-white'
                  : 'text-[#2F6FED]'
              }`}
            >
              {num}
            </button>
          ))}
          <span className="ml-2">…</span>
          <button className="w-8 h-8 rounded border text-[#2F6FED]">16</button>
        </div>
      </div>
    </div>
  );
};

export default MyProperties;
