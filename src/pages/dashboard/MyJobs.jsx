import React, { useState } from 'react';
import { Tabs, Button, Pagination, Select } from 'antd';
import JobCard from './JobCard';
import CreateJobModal from './CreateJobModal';

const MyJobs = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Sample job data
  const jobs = [
    { id: 1, status: 'ongoing' },
    { id: 2, status: 'completed' },
    { id: 3, status: 'ongoing' },
    { id: 4, status: 'completed' },
    { id: 5, status: 'ongoing' },
  ];

  const renderJobs = (filterStatus) => {
    const filteredJobs = filterStatus
      ? jobs.filter((job) => job.status === filterStatus)
      : jobs;

    return (
      <>
        {filteredJobs.map((job) => (
          <JobCard key={job.id} status={job.status} />
        ))}
        <div className="pagination-area" style={{ marginTop: '16px' }}>
          <Select
            defaultValue="10"
            style={{ width: 80, marginRight: 16 }}
            options={[{ value: '10', label: '10' }]}
          />
          <Pagination defaultCurrent={1} total={filteredJobs.length} pageSize={10} />
        </div>
      </>
    );
  };

  const items = [
    {
      key: '1',
      label: 'All Jobs',
      children: renderJobs(),
    },
    {
      key: '2',
      label: 'On Going',
      children: renderJobs('ongoing'),
    },
    {
      key: '3',
      label: 'Completed',
      children: renderJobs('completed'),
    },
  ];

  return (
    <>
      <div className="my-jobs-container">
        <div
          className="header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2>My Job</h2>
          <Button type="primary" onClick={() => setModalOpen(true)}>
            Create new Job
          </Button>
        </div>
        <Tabs
          defaultActiveKey="1"
          items={items.map((item) => ({
            ...item,
            children: (
              <div
                style={{
                  maxHeight: 'calc(100vh - 200px)',
                  overflowY: 'auto',
                  paddingRight: '8px',
                }}
              >
                {item.children}
              </div>
            ),
          }))}
        />
      </div>
      <CreateJobModal visible={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default MyJobs;
