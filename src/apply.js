
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
        lastNameKey: lastName,
    }
    // store applicant in local storage
    const applicantJSON = JSON.stringify(applicant);
    window.localStorage.setItem('applicant', applicantJSON); // could be "bananas"
});

let applicants = null; //or [] without else
// check to see if applicants exists in local storage
const applicantJSON = window.localStorage.getItem('applicants')
 
if(applicantJSON) {
    //if yes - parse and assign to applicants array
    applicants = JSON.parse(applicantJSON);
 console.log(applicantJSON);
}
 //if no applicants in local storsge
else {
    applicants = [];
}

