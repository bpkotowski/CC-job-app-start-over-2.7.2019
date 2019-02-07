const existingApplicants = window.localStorage.getItem('applicants');
let applicants = null;



if(existingApplicants) {
    applicants = JSON.parse(existingApplicants);
    
}

else {
    applicants = [];
}


const table = document.getElementById('applicants');

for( let index = 0; index < applicants.length; index++ ) {
    const applicant = applicants[index];
//    create table data cell and set content for applicant first and last name
    const tableRow = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const link = document.createElement('a');
    link.href = 'applicant-detail.html?name='+ encodeURIComponent(applicant.firstNameKey);

    link.textContent = applicant.firstNameKey;
    firstNameCell.appendChild(link);
    tableRow.appendChild(firstNameCell);

    // append td and tr elements

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = applicant.lastNameKey;
    tableRow.appendChild(lastNameCell);


    table.appendChild(tableRow)
}
