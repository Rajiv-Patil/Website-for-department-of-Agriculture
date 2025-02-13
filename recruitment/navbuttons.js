const data = [
  {
    srNo: 1,
    title: "Staff Car Driver Vacancy",
    startDate: "30-12-2024",
    endDate: "27-02-2025",
    publishDate: "30-12-2024",
    details: "<a href=''>Download</a>",
  },
  {
    srNo: 2,
    title: "Assistant Library Officer",
    startDate: "28-12-2024",
    endDate: "25-02-2025",
    publishDate: "28-12-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 3,
    title: "Administrative Officer, CIH",
    startDate: "28-12-2024",
    endDate: "25-02-2025",
    publishDate: "27-12-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 4,
    title: "Consultant for International Cooperation",
    startDate: "26-12-2024",
    endDate: "27-01-2025",
    publishDate: "26-12-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 5,
    title: "Young Professionals Recruitment",
    startDate: "26-12-2024",
    endDate: "27-01-2025",
    publishDate: "26-12-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 6,
    title: "Director, Central Institute of Horticulture",
    startDate: "09-12-2024",
    endDate: "20-01-2025",
    publishDate: "09-12-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 7,
    title: "Deputy Agricultural Marketing Adviser",
    startDate: "09-12-2024",
    endDate: "08-02-2025",
    publishDate: "09-12-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 8,
    title: "Young Professionals for Oilseeds Division",
    startDate: "09-12-2024",
    endDate: "08-02-2025",
    publishDate: "09-12-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 9,
    title: "Economic Officer Recruitment Rules",
    startDate: "03-12-2024",
    endDate: "01-01-2025",
    publishDate: "03-12-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 10,
    title: "Economic Officer Draft Rules",
    startDate: "02-12-2024",
    endDate: "01-01-2025",
    publishDate: "02-12-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 11,
    title: "Technical Clerk Recruitment",
    startDate: "02-12-2024",
    endDate: "01-01-2025",
    publishDate: "02-12-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 12,
    title: "Private Secretary, Varanasi",
    startDate: "30-11-2024",
    endDate: "28-01-2025",
    publishDate: "30-11-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 13,
    title: "Chief Seed Analyst Vacancy",
    startDate: "23-11-2024",
    endDate: "21-01-2025",
    publishDate: "23-11-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 14,
    title: "Director (Forestry) Deputation",
    startDate: "16-11-2024",
    endDate: "15-01-2025",
    publishDate: "16-11-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 15,
    title: "Director (Water Management) Deputation",
    startDate: "16-11-2024",
    endDate: "15-01-2025",
    publishDate: "16-11-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 16,
    title: "Technical Expert (Forestry)",
    startDate: "16-11-2024",
    endDate: "15-01-2025",
    publishDate: "16-11-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 17,
    title: "Senior Technical Assistant",
    startDate: "16-11-2024",
    endDate: "15-01-2025",
    publishDate: "16-11-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 18,
    title: "Joint Director (FI) Directorate of Extension",
    startDate: "31-01-2025",
    endDate: "31-2-2025",
    publishDate: "20-1-2025",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 19,
    title: "Fisheries Development Officer",
    startDate: "05-11-2024",
    endDate: "30-12-2024",
    publishDate: "05-11-2024",
    details: "<a href='#'>Download</a>",
  },
  {
    srNo: 20,
    title: "Agriculture Extension Officer",
    startDate: "02-11-2024",
    endDate: "29-12-2024",
    publishDate: "02-11-2024",
    details: "<a href='#'>Download</a>",
  },
];

let currentPage = 1;
const entriesPerPage = 10;

function renderTable(page) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  const start = (page - 1) * entriesPerPage;
  const end = start + entriesPerPage;
  data.slice(start, end).forEach((item) => {
    tableBody.innerHTML += `<tr><td>${item.srNo}</td><td>${item.title}</td><td>${item.startDate}</td><td>${item.endDate}</td><td>${item.publishDate}</td><td>${item.details}</td></tr>`;
  });

  document.getElementById("page-number").textContent = `Page ${page}`;
}

function changePage(step) {
  currentPage += step;
  renderTable(currentPage);
}

renderTable(currentPage);
