const existingApplicants = window.localStorage.getItem('applicants');
let applicants = null;
let applicant = null;
const searchParams = new URLSearchParams(window.location.search);
const name = searchParams.get('name');


if(existingApplicants) {
    applicants = JSON.parse(existingApplicants);
    
}

else {
    applicants = [];
}

for(let index = 0; index < applicants.length; index++); {
    const currentApplicant = applicants[index];
    if(currentApplicant.firstNameKey === name) {
        applicant = currentApplicant;
        break;
    }
}

// const applicant = applicants[applicants.length - 1];

const firstNameNode = document.getElementById('first-name');
const lastNameNode = document.getElementById('last-name');

firstNameNode.textContent = applicant.firstNameKey;

lastNameNode.textContent = applicant.lastNameKey;

