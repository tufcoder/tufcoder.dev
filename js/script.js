const jobs = document.querySelectorAll('.job');
const collapse = document.querySelector('.button-collapse');
let isCollapsible = true;

jobs.forEach(job => {
  job.addEventListener('click', function () {
    const content = this.querySelector('.job-content');
    const tooltip = this.querySelector('.tooltip');

    this.classList.toggle('job-active');

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
      tooltip.innerText = 'Clique para expandir';
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
      tooltip.innerText = 'Clique para recolher';
    }
  });
});

collapse.addEventListener('click', function () {
  this.innerText = isCollapsible ? 'Recolher tudo (-)' : 'Expandir tudo (+)';

  jobs.forEach(job => {
    if (isCollapsible) {
      if (!job.classList.contains('job-active')) {
        job.dispatchEvent(new Event('click'));
      }
    }
    else if (isCollapsible === false) {
      if (job.classList.contains('job-active')) {
        job.dispatchEvent(new Event('click'));
      }
    }
  })

  isCollapsible = !isCollapsible;
});
