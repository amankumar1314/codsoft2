document.getElementById('job-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var title = document.getElementById('job-title').value;
    var company = document.getElementById('job-company').value;

    if(title === '' || company === '') {
        alert('Please fill in all fields');
        return;
    }

    var jobItem = document.createElement('li');
    jobItem.className = 'job-item';
    jobItem.innerHTML = '<strong>' + title + '</strong> - ' + company;

    document.getElementById('job-list').appendChild(jobItem);

    document.getElementById('job-title').value = '';
    document.getElementById('job-company').value = '';
});
