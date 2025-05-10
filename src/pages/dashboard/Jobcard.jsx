import { Tag } from 'antd';
import {
  EnvironmentOutlined,
  CalendarOutlined,
  UserOutlined,
} from '@ant-design/icons';

const JobCard = ({
  title = 'Boiler Fault',
  date = '31/09/2023',
  id = '#0CAC6D64',
  status = 'ongoing',
  distance = '35.56KM',
  duration = '60 Mins',
  locationTitle = 'Work Place',
  address = '45 Westfield Avenue, London, E15 4HQ',
  description = 'My home boiler has stopped heating water. It turns on but doesn’t produce hot water. I need someone to check and fix it ASAP.',
  arrivalTime = '15mins',
}) => {
  const isCompleted = status === 'completed';

  return (
    <div className=" pt-1 rounded-[16px] border-[1px] border-[solid] border-[#E1E6EF] bg-[#FFF] [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.05)] mb-4 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start p-3 border-b border-[#E1E6EF] [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.05)]">
        <div className="flex flex-col gap-2">
          <h3 className="text-[#132235] font-[Manrope] text-[17px] not-italic font-bold leading-[22px]">
            {title}
          </h3>
          <p className="text-[#364B63] font-[Manrope] text-[12px] not-italic font-normal leading-[normal] flex items-center gap-1">
            <CalendarOutlined style={{ fontSize: '18px', color: '#364B63' }} />
            {date}
          </p>
          <p className="text-[#364B63] font-[Manrope] text-[12px] not-italic font-normal leading-[normal]">
            ID: {id}
          </p>
        </div>
        <div className="text-right">
          <Tag color={isCompleted ? 'green' : 'blue'}>
            {isCompleted ? 'Completed' : 'Ongoing'}
          </Tag>
        </div>
      </div>

      {/* Location */}
      <div className=" p-3 border-b border-[#E1E6EF] flex justify-between items-start [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.05)]">
        <div className="flex flex-col gap-2">
          <p className="text-[#132235] font-[Manrope] text-[14px] not-italic leading-[22px] flex items-center gap-1.5 font-medium">
            <EnvironmentOutlined
              style={{ fontSize: '20px', color: '#E02D3C' }}
            />
            {locationTitle}
          </p>
          <p className="text-[#364B63] font-[Manrope] text-[13px] not-italic font-normal leading-[18px] ml-5">
            {address}
          </p>
        </div>
        <div className="text-right">
          <p className=" text-[#364B63] font-[Nunito] text-[13px] not-italic font-bold leading-[18px]">
            {distance} | {duration}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#0C0D19] font-[Manrope] text-[14px] not-italic font-normal leading-[140%] mb-3 p-3">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-center gap-2 text-[#132235] text-center font-[Manrope] text-[17px] not-italic font-medium leading-[22px] bg-[rgba(79,_129,_255,_0.10)] p-3">
        <UserOutlined />
        <span>
          Arrived in{' '}
          <strong className="text-blue-600 font-semibold">{arrivalTime}</strong>
        </span>
      </div>
    </div>
  );
};

export default JobCard;
