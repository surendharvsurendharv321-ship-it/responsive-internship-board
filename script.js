const internships = [
  {
    title: "Frontend Developer Intern",
    company: "Tech Solutions",
    domain: "Web Development",
    location: "Remote"
  },
  {
    title: "Data Analyst Intern",
    company: "DataWorks",
    domain: "Data Science",
    location: "Chennai"
  },
  {
    title: "Java Developer Intern",
    company: "CodeCraft",
    domain: "Java",
    location: "Bangalore"
  },
  {
    title: "Web Developer Intern",
    company: "WebTech",
    domain: "Web Development",
    location: "Remote"
  }
];

const list = document.getElementById("internship-list");
const search = document.getElementById("search");
const domain = document.getElementById("domain");
const message = document.getElementById("message");

function displayInternships() {
  const keyword = search.value.toLowerCase();
  const selectedDomain = domain.value;

  const filtered = internships.filter(item =>
    (item.title.toLowerCase().includes(keyword) ||
     item.company.toLowerCase().includes(keyword)) &&
    (selectedDomain === "all" ||
     item.domain === selectedDomain)
  );

  list.innerHTML = "";

  if (filtered.length === 0) {
    message.textContent = "No internships found.";
    return;
  }

  message.textContent = "";

  filtered.forEach(item => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <h2>${item.title}</h2>
      <p>Company: ${item.company}</p>
      <p>Domain: ${item.domain}</p>
      <p>Location: ${item.location}</p>
      <a href="mailto:careers@example.com">
        Apply Now
      </a>
    `;

    list.appendChild(card);
  });
}

search.addEventListener("input", displayInternships);
domain.addEventListener("change", displayInternships);

displayInternships();
