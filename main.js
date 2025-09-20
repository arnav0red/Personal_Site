fetch('info.json')
  .then(response => response.json())
  .then(data => {
    const jobList = document.getElementById('job-list');
    const projectList = document.getElementById('project-list');

    // Reusable function to create and append list items
    function populateList(listElement, items, filterFn, formatFn) {
      items.filter(filterFn).forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = formatFn(item);
        listElement.appendChild(li);
      });
    }

    // Populate jobs with rank > 3
    populateList(
      jobList,
      data.experience,
      job => job.rank > 3,
      job => `${job.title}: ${job.employer}<br>${job.description}`
    );

    // Populate all projects
    populateList(
      projectList,
      data.projects,
      () => true,
      project => `${project.name} — Start Date: ${project.start_date}`
    );
  })
  .catch(error => console.error('Error loading JSON:', error));
