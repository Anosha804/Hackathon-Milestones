// get references to the form and display area

const form = document.getElementById("resume-form") as HTMLFormElement
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement

// handle form submission

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // collect input values
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const academicInformation = (document.getElementById('academic information') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // generate the resume content dynamically
    const resumeHtml = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>First Name :</b> ${firstName}</p>
    <p><b>Last Name :</b> ${lastName}</p>
    <p><b>Contact number :</b> ${phone}</p>
    <p><b>Email Address :</b> ${email}</p>

     <h3>Academic Information</h3>
    <p>${academicInformation}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skils</h3>
    <p>${skills}</p>
    `;

    // display
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else{
        console.error('The resume display element is missing')
    }
});


