const jobs = document.querySelectorAll('.job');

jobs.forEach(job => {
  job.addEventListener('click', function() {
    const content = this.children[2];

    job.classList.toggle('job-active');

    if (content.parentNode.classList.contains('green-hover')) {
      content.parentNode.classList.toggle('green-background');
    } else if (content.parentNode.classList.contains('blue-hover')) {
      content.parentNode.classList.toggle('blue-background');
    } else if (content.parentNode.classList.contains('orange-hover')) {
      content.parentNode.classList.toggle('orange-background');
    } else if (content.parentNode.classList.contains('dark-blue-hover')) {
      content.parentNode.classList.toggle('dark-blue-background');
    } else if (content.parentNode.classList.contains('yellow-hover')) {
      content.parentNode.classList.toggle('yellow-background');
    }

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
