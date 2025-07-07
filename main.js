fetch('info.json')
  .then(response => response.json())
  .then(data => {
    const jobList = document.getElementById('job-list');

    data.jobs.forEach(job => {
      const li = document.createElement('li');
      li.textContent = `${job.name} — Start Date: ${job.start_date}, ${job.rank}`;
      jobList.appendChild(li);
    });
    const projectList = document.getElementById('project-list');

    data.projects.forEach(project => {
      const li = document.createElement('li');
      li.textContent = `${project.name} — Start Date: ${project.start_date}`;
      projectList.appendChild(li);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
