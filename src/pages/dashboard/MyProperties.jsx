import { useState } from 'react';
import { DatePicker, Pagination, Select, Table } from 'antd';
import { Input } from 'antd';
import AddPropertyModal from './AddPropertyModal';

const { Option } = Select;
const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};

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
    <div className=" bg-white w-full h-full">
      <h2 className="text-[#181D27] font-[Manrope] text-[30px] not-italic font-semibold leading-[38px]">
        My Properties
      </h2>
      {/* Top Bar */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4 py-4">
        <div className="flex items-center gap-2.5">
          {/* Search */}
          <Input
            placeholder="Search properties"
            onPressEnter={(e) =>
              onSearch(e.target.value, null, { source: 'input' })
            }
            className="w-full px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)]"
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.34375 2.1875C4.04832 2.1875 2.1875 4.04832 2.1875 6.34375C2.1875 8.63918 4.04832 10.5 6.34375 10.5C8.63918 10.5 10.5 8.63918 10.5 6.34375C10.5 4.04832 8.63918 2.1875 6.34375 2.1875ZM1.3125 6.34375C1.3125 3.56507 3.56507 1.3125 6.34375 1.3125C9.12243 1.3125 11.375 3.56507 11.375 6.34375C11.375 9.12243 9.12243 11.375 6.34375 11.375C3.56507 11.375 1.3125 9.12243 1.3125 6.34375Z"
                  fill="#6D6E75"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.28283 9.28283C9.45368 9.11197 9.73069 9.11197 9.90155 9.28283L12.5594 11.9406C12.7302 12.1115 12.7302 12.3885 12.5594 12.5594C12.3885 12.7302 12.1115 12.7302 11.9406 12.5594L9.28283 9.90155C9.11197 9.73069 9.11197 9.45368 9.28283 9.28283Z"
                  fill="#6D6E75"
                />
              </svg>
            }
          />

          {/* Filter Dropdown */}
          <Select
            placeholder="All"
            prefix={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.75 9.40625C1.75 9.16463 1.94588 8.96875 2.1875 8.96875H7.4375C7.67912 8.96875 7.875 9.16463 7.875 9.40625C7.875 9.64787 7.67912 9.84375 7.4375 9.84375H2.1875C1.94588 9.84375 1.75 9.64787 1.75 9.40625Z"
                  fill="#6D6E75"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.75 9.40625C8.75 9.16463 8.94588 8.96875 9.1875 8.96875H11.8125C12.0541 8.96875 12.25 9.16463 12.25 9.40625C12.25 9.64787 12.0541 9.84375 11.8125 9.84375H9.1875C8.94588 9.84375 8.75 9.64787 8.75 9.40625Z"
                  fill="#6D6E75"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.75 4.59375C1.75 4.35213 1.94588 4.15625 2.1875 4.15625H3.9375C4.17912 4.15625 4.375 4.35213 4.375 4.59375C4.375 4.83537 4.17912 5.03125 3.9375 5.03125H2.1875C1.94588 5.03125 1.75 4.83537 1.75 4.59375Z"
                  fill="#6D6E75"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.25 4.59375C5.25 4.35213 5.44588 4.15625 5.6875 4.15625H11.8125C12.0541 4.15625 12.25 4.35213 12.25 4.59375C12.25 4.83537 12.0541 5.03125 11.8125 5.03125H5.6875C5.44588 5.03125 5.25 4.83537 5.25 4.59375Z"
                  fill="#6D6E75"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.6875 2.84375C5.92912 2.84375 6.125 3.03963 6.125 3.28125V5.90625C6.125 6.14787 5.92912 6.34375 5.6875 6.34375C5.44588 6.34375 5.25 6.14787 5.25 5.90625V3.28125C5.25 3.03963 5.44588 2.84375 5.6875 2.84375Z"
                  fill="#6D6E75"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.1875 7.65625C9.42912 7.65625 9.625 7.85213 9.625 8.09375V10.7188C9.625 10.9604 9.42912 11.1562 9.1875 11.1562C8.94588 11.1562 8.75 10.9604 8.75 10.7188V8.09375C8.75 7.85213 8.94588 7.65625 9.1875 7.65625Z"
                  fill="#6D6E75"
                />
              </svg>
            }
          >
            <Option value="all">All</Option>
            <Option value="active">Active</Option>
            <Option value="pending">Pending</Option>
          </Select>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {/* Month Picker */}
          <DatePicker
            picker="month"
            format="MMMM YYYY"
            className="w-[180px] px-4 py-2.5 border border-[#E1E6EF] rounded-[12px]  focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-[#FFF] [box-shadow:0px_2px_2px_0px_rgba(0,_0,_0,_0.03)]"
            allowClear={false}
          />

          {/* Sort By */}
          <div className="flex gap-2.5 items-center">
            <label className="text-[#B1B2B5] text-center font-[Satoshi] text-[12px] not-italic font-normal leading-[15.6px]">
              Sort by:
            </label>
            <Select placeholder="Latest" prefix={<></>}>
              <Option value="latest">Latest</Option>
              <Option value="oldest">Oldest</Option>
            </Select>
          </div>

          {/* Add Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#425DE6] rounded-[6px] text-[#FFF] font-[Inter] text-[14px] not-italic font-semibold leading-[20px] px-[14px] py-2"
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
      <div
        className="overflow-x-auto  overflow-y-auto "
        style={{
          maxHeight: 'calc(100vh - 300px)',
          overflowY: 'auto',
          paddingRight: '8px',
        }}
      >
        <Table
          columns={columns}
          dataSource={mockData}
          pagination={false}
          onChange={(filters, sorter, extra) => {
            console.log('params', filters, sorter, extra);
          }}
          rowKey={(record, index) => index}
        />
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm mt-4">
        <div className=""></div>
        <div className="flex items-center gap-2">
          <Pagination
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={160}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
};

export default MyProperties;
