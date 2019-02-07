
// bring in form node from dom 1
const formNode = document.getElementById('form');
const firstNameNode =document.getElementById('first-name');
const lastNameNode = document.getElementById('last-name');

// adding event lisener to form 2
formNode.addEventListener('submit', function(event) {
    event.preventDefault();
// store name values
    const firstName = firstNameNode.value;
    const lastName = lastNameNode.value; 
// create object
    const applicant = {
        firstNameKey: firstName,
        lastNameKey: lastName
    }
    let applicants = null; //or [] without else
    // check to see if applicants exists in local storage
    const existingApplicantsJSON = window.localStorage.getItem('applicants');
     
    if(existingApplicantsJSON) {
        //if yes - parse and assign to applicants array
        applicants = JSON.parse(existingApplicantsJSON);
    //  console.log(applicantJSON);
    }
     //if no applicants in local storage
    else {
        applicants = [];
    }
    
    applicants.push(applicant);
    
    //store applicants to local storage
    const newApplicantJSON = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', newApplicantJSON);
    
});



