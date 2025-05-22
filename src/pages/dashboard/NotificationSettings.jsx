import  { useState } from 'react';
import { Switch } from 'antd';

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    mentionedInMessage: true,
    replyToMessage: true,
    taskOverdue: false,
    assignedTask: true,
    taskUpdated: true,
    dailySummary: true,
    weeklySummary: true,
    monthlySummary: false,
    summaryTaskUpdated: false,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderRow = (label, key) => (
    <div className="flex justify-between items-center py-2 sm:py-3 md:py-4 lg:py-6 border-b last:border-none">
      <span className="text-[#535862] font-[Inter] text-[13px] md:text-[14px] not-italic font-normal leading-[164%]">
        {label}
      </span>
      <Switch
        checked={settings[key]}
        onChange={() => handleToggle(key)}
        className="bg-[#CBCBCC]"
      />
    </div>
  );

  return (
    <>
      <div className=" bg-white h-full">
        <div className=" flex flex-col justify-between h-full">
          <div className="py-5 flex gap-8 border-b border-[#E9EAEB] items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-[#181D27] font-[Manrope] text-[17px] md:text-[18px] not-italic font-semibold leading-[28px]">
                Notifications
              </p>
              <p className="text-[#535862] font-[Manrope] text-[14px] not-italic font-normal leading-[20px]">
                Select when and how you'll be notified.
              </p>
            </div>
          </div>

          <div className="mb-6 py-5 flex gap-8 border-b border-[#E9EAEB]">
            <div className="block text-[#414651] font-[Manrope] text-[15px] md:text-[16px] not-italic font-semibold leading-[20px] max-w-[280px]">
              <h2 className="text-base font-semibold mb-2">
                General notifications
              </h2>
              <p className="text-gray-500 text-xs mb-4">
                Select when you'll be notified when the following changes occur.
              </p>
            </div>

            <div className="flex flex-col w-full px-20">
              {renderRow("I'm mentioned in a message", 'mentionedInMessage')}
              {renderRow('Someone replies to any message', 'replyToMessage')}
              {renderRow('A task is overdue', 'taskOverdue')}
              {renderRow("I'm Assigned a task", 'assignedTask')}
              {renderRow('A task status is updated', 'taskUpdated')}
            </div>
          </div>


            <div className="flex py-5 gap-8 ">
              <div className="block text-[#414651] font-[Manrope] text-[15px] md:text-[16px] not-italic font-semibold leading-[20px] max-w-[280px]">
                <h2 className="text-base font-semibold mb-2">
                  Summary Notification
                </h2>
                <p className="text-gray-500 text-xs mb-4">
                  Select when you'll be notified when the following summaries or
                  reports are ready.
                </p>
              </div>
              <div className="flex flex-col w-full px-20">
                {renderRow('Daily summary', 'dailySummary')}
                {renderRow('Weekly summary', 'weeklySummary')}
                {renderRow('Monthly summary', 'monthlySummary')}
                {renderRow('A task status is updated', 'summaryTaskUpdated')}
              </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default NotificationSettings;
