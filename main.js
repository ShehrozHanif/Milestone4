(function () {
    // TypeScript to dynamically update resume sections
    var nameInput = document.getElementById('name-input');
    var emailInput = document.getElementById('email-input');
    var phoneInput = document.getElementById('phone-input');
    var locationInput = document.getElementById('location-input');
    var educationInput = document.getElementById('education-input');
    var skillsInput = document.getElementById('skills-input');
    var experienceInput = document.getElementById('experience-input');
    var displayName = document.getElementById('display-name');
    var displayEmail = document.getElementById('display-email');
    var displayPhone = document.getElementById('display-phone');
    var displayLocation = document.getElementById('display-location');
    var displayEducation = document.getElementById('display-education');
    var displaySkills = document.getElementById('display-skills');
    var displayExperience = document.getElementById('display-experience');
    // Update the resume display when input changes
    nameInput.addEventListener('input', function () { return displayName.textContent = nameInput.value; });
    emailInput.addEventListener('input', function () { return displayEmail.textContent = emailInput.value; });
    phoneInput.addEventListener('input', function () { return displayPhone.textContent = phoneInput.value; });
    locationInput.addEventListener('input', function () { return displayLocation.textContent = locationInput.value; });
    educationInput.addEventListener('input', function () { return displayEducation.textContent = educationInput.value; });
    skillsInput.addEventListener('input', function () { return displaySkills.textContent = skillsInput.value; });
    experienceInput.addEventListener('input', function () { return displayExperience.textContent = experienceInput.value; });
    // New Code: Profile Picture Upload
    var profilePic = document.getElementById('profile-pic');
    var uploadButton = document.getElementById('upload-button');
    uploadButton.addEventListener('change', function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                profilePic.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
    // Select the submit button
    var submitButton = document.getElementById('submit-button');
    // Display message on button click
    submitButton.addEventListener('click', function () {
        alert("CV is created");
    });
})();
