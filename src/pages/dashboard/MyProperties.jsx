import { useState } from "react";
import { DatePicker, Pagination, Select, Table } from "antd";
import { Input } from "antd";
import AddPropertyModal from "./AddPropertyModal";
import { useGetPropertyAddress } from "@/hooks/dashboard.hook";

const { Option } = Select;
const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id.localeCompare(b.id),
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    sorter: (a, b) => a.address.localeCompare(b.address),
  },
];

const onSearch = (value, _e, info) =>
  console.log(info === null || info === void 0 ? void 0 : info.source, value);

const MyProperties = () => {
  const { propertiesAddress } = useGetPropertyAddress();
  console.log({ propertiesAddress });
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              onSearch(e.target.value, null, { source: "input" })
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
        className="w-full lg:overflow-x-auto  overflow-y-auto"
        style={{
          maxHeight: "calc(100vh - 300px)",
          overflowY: "auto",
          paddingRight: "8px",
        }}
      >
        <Table
          columns={columns}
          dataSource={propertiesAddress}
          // pagination={{
          //   showSizeChanger: true,
          //   defaultPageSize: 10,
          //   total: propertiesAddress?.length,
          // }}
          scroll={{ x: 800 }}
          sticky
          onChange={(filters, sorter, extra) => {
            console.log("params", filters, sorter, extra);
          }}
          rowKey={(record, index) => index}
        />
      </div>

      {/* Pagination */}
      {/* <div className="flex justify-between items-center text-sm mt-4">
        <div className=""></div>
        <div className="flex items-center gap-2">
          <Pagination
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={propertiesAddress.total}
            showSizeChanger={false}
          />
        </div>
      </div> */}
    </div>
  );
};

export default MyProperties;
