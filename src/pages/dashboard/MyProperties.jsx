import { useState } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value, _e, info) =>
  console.log(info === null || info === void 0 ? void 0 : info.source, value);

const MyProperties = () => {
  const [sortBy, setSortBy] = useState('latest');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState(
    dayjs('2030-10', 'YYYY-MM')
  );

  const mockData = Array.from({ length: 20 }, (_, i) => ({
    name: 'Sophia Turner',
    location: 'santa.cruz@example.com',
    phone: '(404) 555-0120',
    service: true,
    plan: 'Standard',
    status: 'Active',
  }));

  return (
    <div className="p-6 bg-white rounded-xl shadow w-full">
      {/* Top Bar */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <h2 className="text-2xl font-semibold">My Properties</h2>

        <div className="flex flex-wrap gap-2 items-center">
          {/* Search */}
          <Search
            placeholder="Search properties"
            onSearch={onSearch}
            style={{ width: 200 }}
            prefix='{}'
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

          {/* 🔽 Ant Design Month Picker */}
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
          <button className="bg-[#2F6FED] text-white px-4 py-1.5 rounded-md text-sm">
            Add Properties
          </button>
        </div>
      </div>

      {/* Table Wrapper with Responsive Scroll */}
      <div className="overflow-x-auto max-h-[500px] overflow-y-auto border rounded-lg">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-[#F9FAFB] text-[#5E6D77] sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 font-medium">Property Name</th>
              <th className="px-4 py-2 font-medium">Location</th>
              <th className="px-4 py-2 font-medium">Boiler Info</th>
              <th className="px-4 py-2 font-medium">Service</th>
              <th className="px-4 py-2 font-medium">Plans</th>
              <th className="px-4 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.location}</td>
                <td className="px-4 py-3">{item.phone}</td>
                <td className="px-4 py-3">
                  <span className="inline-block w-3 h-5 rounded bg-[#FDD9B5]"></span>
                </td>
                <td className="px-4 py-3">{item.plan}</td>
                <td className="px-4 py-3">
                  <span className="bg-[#2F6FED] text-white text-xs px-3 py-1 rounded-full">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
