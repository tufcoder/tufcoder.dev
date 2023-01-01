const jobs = document.querySelectorAll('.job');

jobs.forEach(job => {
  job.addEventListener('click', function() {
    const content = this.children[2];

    job.classList.toggle('job-active');

    if (job.classList.contains('green-hover')) {
      job.classList.toggle('green-background');
    } else if (job.classList.contains('blue-hover')) {
      job.classList.toggle('blue-background');
    } else if (job.classList.contains('orange-hover')) {
      job.classList.toggle('orange-background');
    } else if (job.classList.contains('dark-blue-hover')) {
      job.classList.toggle('dark-blue-background');
    } else if (job.classList.contains('yellow-hover')) {
      job.classList.toggle('yellow-background');
    }

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  });
});
