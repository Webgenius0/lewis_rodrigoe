// import { useState } from 'react';
// import AddPropertyModal from './AddPropertyModal';

// const MyProperties = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [sortBy, setSortBy] = useState('latest');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10);

//   const mockData = Array.from({ length: 20 }, (_, i) => ({
//     key: i,
//     name: `User ${i + 1}`,
//     location: `location${i + 1}@example.com`,
//     phone: `(404) 555-01${String(i).padStart(2, '0')}`,
//     service: true,
//     plan: ['Basic', 'Standard', 'Premium'][i % 3],
//     status: i % 2 === 0 ? 'Active' : 'Pending',
//   }));

//   // Filter and sort data
//   const filteredData = mockData.filter((item) => {
//     const matchesSearch =
//       item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.location.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesFilter =
//       filter === 'all' || item.status.toLowerCase() === filter.toLowerCase();
//     return matchesSearch && matchesFilter;
//   });

//   const sortedData = [...filteredData].sort((a, b) => {
//     if (sortBy === 'latest') return b.key - a.key;
//     return a.key - b.key;
//   });

//   // Pagination
//   const totalItems = sortedData.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const currentData = sortedData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="bg-white w-full h-full p-4 md:p-6">
//       <h2 className="text-[#181D27] font-semibold text-2xl md:text-3xl mb-6">
//         My Properties
//       </h2>

//       {/* Top Bar */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//         {/* Search and Filter */}
//         <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
//           {/* Search */}
//           <div className="relative flex-grow">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="14"
//                 height="14"
//                 viewBox="0 0 14 14"
//                 fill="none"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M6.34375 2.1875C4.04832 2.1875 2.1875 4.04832 2.1875 6.34375C2.1875 8.63918 4.04832 10.5 6.34375 10.5C8.63918 10.5 10.5 8.63918 10.5 6.34375C10.5 4.04832 8.63918 2.1875 6.34375 2.1875ZM1.3125 6.34375C1.3125 3.56507 3.56507 1.3125 6.34375 1.3125C9.12243 1.3125 11.375 3.56507 11.375 6.34375C11.375 9.12243 9.12243 11.375 6.34375 11.375C3.56507 11.375 1.3125 9.12243 1.3125 6.34375Z"
//                   fill="#6D6E75"
//                 />
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M9.28283 9.28283C9.45368 9.11197 9.73069 9.11197 9.90155 9.28283L12.5594 11.9406C12.7302 12.1115 12.7302 12.3885 12.5594 12.5594C12.3885 12.7302 12.1115 12.7302 11.9406 12.5594L9.28283 9.90155C9.11197 9.73069 9.11197 9.45368 9.28283 9.28283Z"
//                   fill="#6D6E75"
//                 />
//               </svg>
//             </div>
//             <input
//               type="text"
//               placeholder="Search properties"
//               className="w-full pl-10 pr-4 py-2 border border-[#E1E6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-white shadow-sm"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//           {/* Filter Dropdown */}
//           <div className="relative flex-grow sm:flex-grow-0 sm:w-32">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="14"
//                 height="14"
//                 viewBox="0 0 14 14"
//                 fill="none"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M1.75 9.40625C1.75 9.16463 1.94588 8.96875 2.1875 8.96875H7.4375C7.67912 8.96875 7.875 9.16463 7.875 9.40625C7.875 9.64787 7.67912 9.84375 7.4375 9.84375H2.1875C1.94588 9.84375 1.75 9.64787 1.75 9.40625Z"
//                   fill="#6D6E75"
//                 />
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M8.75 9.40625C8.75 9.16463 8.94588 8.96875 9.1875 8.96875H11.8125C12.0541 8.96875 12.25 9.16463 12.25 9.40625C12.25 9.64787 12.0541 9.84375 11.8125 9.84375H9.1875C8.94588 9.84375 8.75 9.64787 8.75 9.40625Z"
//                   fill="#6D6E75"
//                 />
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M1.75 4.59375C1.75 4.35213 1.94588 4.15625 2.1875 4.15625H3.9375C4.17912 4.15625 4.375 4.35213 4.375 4.59375C4.375 4.83537 4.17912 5.03125 3.9375 5.03125H2.1875C1.94588 5.03125 1.75 4.83537 1.75 4.59375Z"
//                   fill="#6D6E75"
//                 />
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M5.25 4.59375C5.25 4.35213 5.44588 4.15625 5.6875 4.15625H11.8125C12.0541 4.15625 12.25 4.35213 12.25 4.59375C12.25 4.83537 12.0541 5.03125 11.8125 5.03125H5.6875C5.44588 5.03125 5.25 4.83537 5.25 4.59375Z"
//                   fill="#6D6E75"
//                 />
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M5.6875 2.84375C5.92912 2.84375 6.125 3.03963 6.125 3.28125V5.90625C6.125 6.14787 5.92912 6.34375 5.6875 6.34375C5.44588 6.34375 5.25 6.14787 5.25 5.90625V3.28125C5.25 3.03963 5.44588 2.84375 5.6875 2.84375Z"
//                   fill="#6D6E75"
//                 />
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M9.1875 7.65625C9.42912 7.65625 9.625 7.85213 9.625 8.09375V10.7188C9.625 10.9604 9.42912 11.1562 9.1875 11.1562C8.94588 11.1562 8.75 10.9604 8.75 10.7188V8.09375C8.75 7.85213 8.94588 7.65625 9.1875 7.65625Z"
//                   fill="#6D6E75"
//                 />
//               </svg>
//             </div>
//             <select
//               className="w-full pl-10 pr-4 py-2 border border-[#E1E6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-white appearance-none shadow-sm"
//               value={filter}
//               onChange={(e) => setFilter(e.target.value)}
//             >
//               <option value="all">All</option>
//               <option value="active">Active</option>
//               <option value="pending">Pending</option>
//             </select>
//             <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//               <svg
//                 className="h-4 w-4 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 ></path>
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Date, Sort, Add */}
//         <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
//           {/* Month Picker */}
//           <div className="relative flex-grow sm:flex-grow-0 sm:w-40">
//             <input
//               type="month"
//               className="w-full px-4 py-2 border border-[#E1E6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-white shadow-sm"
//             />
//           </div>

//           {/* Sort By */}
//           <div className="flex items-center gap-2 flex-grow sm:flex-grow-0">
//             <label className="text-[#B1B2B5] text-xs sm:text-sm whitespace-nowrap">
//               Sort by:
//             </label>
//             <select
//               className="w-full px-3 py-2 border border-[#E1E6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#09B5FF] bg-white shadow-sm"
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//             >
//               <option value="latest">Latest</option>
//               <option value="oldest">Oldest</option>
//             </select>
//           </div>

//           {/* Add Button */}
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="bg-[#425DE6] rounded-lg text-white font-semibold px-4 py-2 whitespace-nowrap hover:bg-[#3a51cc] transition-colors"
//           >
//             Add Properties
//           </button>
//         </div>
//       </div>

//       <AddPropertyModal
//         visible={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <div className="min-w-full overflow-hidden">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
//                 >
//                   Property Name
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
//                 >
//                   Location
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Boiler Info
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Service
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
//                 >
//                   Plans
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {currentData.map((item) => (
//                 <tr key={item.key} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {item.name}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {item.location}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {item.phone}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <span className="inline-block w-3 h-5 rounded bg-[#FDD9B5]"></span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {item.plan}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`text-xs px-3 py-1 rounded-full ${
//                         item.status === 'Active'
//                           ? 'bg-[#2F6FED] text-white'
//                           : 'bg-[#FEE4E2] text-[#D92D20]'
//                       }`}
//                     >
//                       {item.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
//         <div className="text-sm text-gray-500">
//           Showing {Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)}{' '}
//           to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{' '}
//           entries
//         </div>
//         <div className="flex items-center gap-2">
//           <select
//             className="px-2 py-1 border border-gray-300 rounded text-sm"
//             value={itemsPerPage}
//             onChange={(e) => {
//               setItemsPerPage(Number(e.target.value));
//               setCurrentPage(1);
//             }}
//           >
//             <option value={5}>5 per page</option>
//             <option value={10}>10 per page</option>
//             <option value={20}>20 per page</option>
//           </select>

//           <nav className="flex gap-1">
//             <button
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//               disabled={currentPage === 1}
//               className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50"
//             >
//               Previous
//             </button>

//             {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//               let pageNum;
//               if (totalPages <= 5) {
//                 pageNum = i + 1;
//               } else if (currentPage <= 3) {
//                 pageNum = i + 1;
//               } else if (currentPage >= totalPages - 2) {
//                 pageNum = totalPages - 4 + i;
//               } else {
//                 pageNum = currentPage - 2 + i;
//               }

//               return (
//                 <button
//                   key={pageNum}
//                   onClick={() => setCurrentPage(pageNum)}
//                   className={`px-3 py-1 border rounded text-sm ${
//                     currentPage === pageNum
//                       ? 'bg-[#425DE6] text-white border-[#425DE6]'
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   {pageNum}
//                 </button>
//               );
//             })}

//             <button
//               onClick={() =>
//                 setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//               }
//               disabled={currentPage === totalPages}
//               className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50"
//             >
//               Next
//             </button>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProperties;
