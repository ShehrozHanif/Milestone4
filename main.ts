(function() {
    // TypeScript to dynamically update resume sections
    const nameInput = document.getElementById('name-input') as HTMLInputElement;
    const emailInput = document.getElementById('email-input') as HTMLInputElement;
    const phoneInput = document.getElementById('phone-input') as HTMLInputElement;
    const locationInput = document.getElementById('location-input') as HTMLInputElement;
    const educationInput = document.getElementById('education-input') as HTMLInputElement;
    const skillsInput = document.getElementById('skills-input') as HTMLInputElement;
    const experienceInput = document.getElementById('experience-input') as HTMLInputElement;

    const displayName = document.getElementById('display-name');
    const displayEmail = document.getElementById('display-email');
    const displayPhone = document.getElementById('display-phone');
    const displayLocation = document.getElementById('display-location');
    const displayEducation = document.getElementById('display-education');
    const displaySkills = document.getElementById('display-skills');
    const displayExperience = document.getElementById('display-experience');

    // Update the resume display when input changes
    nameInput.addEventListener('input', () => displayName!.textContent = nameInput.value);
    emailInput.addEventListener('input', () => displayEmail!.textContent = emailInput.value);
    phoneInput.addEventListener('input', () => displayPhone!.textContent = phoneInput.value);
    locationInput.addEventListener('input', () => displayLocation!.textContent = locationInput.value);
    educationInput.addEventListener('input', () => displayEducation!.textContent = educationInput.value);
    skillsInput.addEventListener('input', () => displaySkills!.textContent = skillsInput.value);
    experienceInput.addEventListener('input', () => displayExperience!.textContent = experienceInput.value);

    // New Code: Profile Picture Upload
    const profilePic = document.getElementById('profile-pic') as HTMLImageElement;
    const uploadButton = document.getElementById('upload-button') as HTMLInputElement;

    uploadButton.addEventListener('change', (event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePic.src = e.target!.result as string;
            };
            reader.readAsDataURL(file);
        }
    });

    // Select the submit button
    const submitButton = document.getElementById('submit-button') as HTMLButtonElement;

    // Display message on button click
    submitButton.addEventListener('click', () => {
        alert("CV is created");
    });
})();
