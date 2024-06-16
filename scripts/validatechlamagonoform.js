try {
  // Getting input values and assigning them variables
  const form = document.getElementById("chlamForm");
  const date = document.getElementById("chgClinicDate");
  const personCompletingForm = document.getElementById("personCompletingForm");
  const healthProvider = document.getElementById("healthProvider");
  const patientContact = document.getElementById("patientContact");
  const patientName = document.getElementById("patientName");
  const patientBirthDate = document.getElementById("patientBirthDate");
  const patientGender = document.getElementsByName("patientGender");
  const patientEthnicity = document.getElementsByName("patientEthnicity");
  const patientRace = document.getElementsByName("patientRace");
  const patientSexPartners = document.getElementsByName("patientSexPartners");
  const patientTestResult = document.getElementsByName("patientTestResult");
  const patientPreviousHiv = document.getElementsByName("patientPreviousHiv");
  const patientReasonExam = document.getElementsByName("patientReasonExam");
  const patientDiagnosis = document.getElementsByName("patientDiagnosis");
  const patientSites = document.getElementsByName("patientSites");

  // Event Listener on pressing the Submit button
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //Function that checks inputs.
    checkInputs();
  });
  // function for checking inputs
  function checkInputs() {
    if (chgClinicDate.value === "") {
      document.getElementById("dateErr").innerText = "Date is required";
      document.getElementById("dateErr").color = "red";
      document.getElementById("chgClinicDate").style =
        "border-color: rgb(237, 23, 23); ";
    } else {
      document.getElementById("dateErr").innerText = ""; ////Clears error messages
      document.getElementById("chgClinicDate").style = "border-color:#4CAF50; ";
    }
    if (personCompletingForm.value.trim() === "") {
      document.getElementById("personCompletingFormErr").innerText =
        "Name of the person completing the form is required";
      document.getElementById("personCompletingFormErr").color = "red";
      document.getElementById("personCompletingForm").style =
        "border-color: rgb(237, 23, 23); ";
    } else {
      document.getElementById("personCompletingFormErr").innerText = ""; ////Clears error messages
      document.getElementById("personCompletingForm").style =
        "border-color:#4CAF50; ";
    }

    if (healthProvider.value.trim() === "") {
      document.getElementById("healthProviderErr").innerText =
        "Health Provider is required";
      document.getElementById("healthProviderErr").color = "red";
      document.getElementById("healthProvider").style =
        "border-color: rgb(237, 23, 23); ";
    } else {
      document.getElementById("healthProviderErr").innerText = ""; //Clears error messages
      document.getElementById("healthProvider").style =
        "border-color:#4CAF50; ";
    }
    if (patientContact.value === "") {
      document.getElementById("contactErr").innerText =
        "Patient contact is required";
      document.getElementById("contactErr").color = "red";
      document.getElementById("patientContact").style =
        "border-color: rgb(237, 23, 23); ";
    } else {
      document.getElementById("contactErr").innerText = ""; //Clears error messages
      document.getElementById("patientContact").style =
        "border-color:#4CAF50; ";
    }
    // name pattern
    let namePattern = /^[A-Za-z\s]+$/;
    let patientName = document.forms.chlamydiaForm.patientName.value;
    let name = namePattern.test(patientName);

    if (name == false) {
      document.getElementById("patientNameErr").innerText =
        "Patient name is required and only in letters and with white space.";
      document.getElementById("patientNameErr").color = "red";
      document.getElementById("patientName").style =
        "border-color: rgb(237, 23, 23); ";
    } else {
      document.getElementById("patientNameErr").innerText = ""; //Clears error messages
      document.getElementById("patientName").style = "border-color:#4CAF50; ";
    }

    if (patientBirthDate.value.trim() === "") {
      document.getElementById("patientBirthDateErr").innerText =
        "Date is required";
      document.getElementById("patientBirthDateErr").color = "red";
      document.getElementById("patientBirthDate").style =
        "border-color: rgb(237, 23, 23); ";
    } else {
      document.getElementById("patientBirthDateErr").innerText = ""; //Clears error messages
      document.getElementById("patientBirthDate").style =
        "border-color:#4CAF50; ";
    }

    // Variable to keep track if any checkbox is checked
    let checked = false;
    // Gender Checkbox input : Loop through all checkboxes to see if any is checked
    for (let i = 0; i < patientGender.length; i++) {
      if (patientGender[i].checked) {
        checked = true;
        break;
      }
    }
    // If no checkbox is checked, show the error message
    if (!checked) {
      document.getElementById("patientGenderErr").innerText =
        "Please check an option";
    } else {
      document.getElementById("patientGenderErr").style.display = "none";
    }

    // Ethnicity Checkbox input : Loop through all checkboxes to see if any is checked
    for (let i = 0; i < patientEthnicity.length; i++) {
      if (patientEthnicity[i].checked) {
        checked = true;
        break;
      }
    }
    // If no checkbox is checked, show the error message
    if (!checked) {
      document.getElementById("patientEthnicityErr").innerText =
        "Please check an option";
    } else {
      document.getElementById("patientEthnicityErr").style.display = "none";
    }

    // Race Checkbox input : Loop through all checkboxes to see if any is checked
    for (let i = 0; i < patientRace.length; i++) {
      if (patientRace[i].checked) {
        checked = true;
        break;
      }
    }
    // If no checkbox is checked, show the error message
    if (!checked) {
      document.getElementById("raceErr").innerText = "Please check an option";
    } else {
      document.getElementById("raceErr").style.display = "none";
    }
    // Gender of Sex partners Checkbox input : Loop through all checkboxes to see if any is checked
    for (let i = 0; i < patientSexPartners.length; i++) {
      if (patientSexPartners[i].checked) {
        checked = true;
        break;
      }
    }
    // If no checkbox is checked, show the error message
    if (!checked) {
      document.getElementById("genderOfSexPartnerErr").innerText =
        "Please check an option";
    } else {
      document.getElementById("genderOfSexPartnerErr").style.display = "none";
    }

    // Test type results Checkbox input : Loop through all checkboxes to see if any is checked
    for (let i = 0; i < patientTestResult.length; i++) {
      if (patientTestResult[i].checked) {
        checked = true;
        break;
      }
    }
    // If no checkbox is checked, show the error message
    if (!checked) {
      document.getElementById("patientTestResultErr").innerText =
        "Please check an option and enter the date the test was done";
    } else {
      document.getElementById("patientTestResultErr").style.display = "none";
    }

    // HIV test results input : Loop through all checkboxes to see if any is checked
    for (let i = 0; i < patientPreviousHiv.length; i++) {
      if (patientPreviousHiv[i].checked) {
        checked = true;
        break;
      }
    }
    // If no checkbox is checked, show the error message
    if (!checked) {
      document.getElementById("patientPreviousHivErr").innerText =
        "Please check an option and  if yes enter the date required";
    } else {
      document.getElementById("patientPreviousHivErr").style.display = "none";
    }

    // Reason For Exam input : Loop through all checkboxes to see if any is checked
    for (let i = 0; i < patientReasonExam.length; i++) {
      if (patientReasonExam[i].checked) {
        checked = true;
        break;
      }
    }
    // If no checkbox is checked, show the error message
    if (!checked) {
      document.getElementById("patientReasonExamErr").innerText =
        "Please check an option ";
    } else {
      document.getElementById("patientReasonExamErr").style.display = "none";
    }

    // Patient Diagnosis input : Loop through all checkboxes to see if any is checked
    for (let i = 0; i < patientDiagnosis.length; i++) {
      if (patientDiagnosis[i].checked) {
        checked = true;
        break;
      }
    }
    // If no checkbox is checked, show the error message
    if (!checked) {
      document.getElementById("patientDiagnosisErr").innerText =
        "Please check all that apply ";
    } else {
      document.getElementById("patientDiagnosisErr").style.display = "none";
    }

    // Sites input : Loop through all checkboxes to see if any is checked
    for (let i = 0; i < patientSites.length; i++) {
      if (patientSites[i].checked) {
        checked = true;
        break;
      }
    }
    // If no checkbox is checked, show the error message
    if (!checked) {
      document.getElementById("patientSitesErr").innerText =
        "Please check all that apply ";
    } else {
      document.getElementById("patientSitesErr").style.display = "none";
    }
  }
} catch (error) {}
