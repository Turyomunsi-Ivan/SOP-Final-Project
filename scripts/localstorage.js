window.onload = function(){
    if(localStorage){
        populate();
        const form = document.getElementById('register');
        form.addEventListener('submit', store);
    }
    else{
        window.alert('localStorage is not supported');
    }
}



function store(){
    let firstname = document.forms.personalinfo.firstname.value;
        let middlename = document.forms.personalinfo.middlename.value;
        let lastname = document.forms.personalinfo.lastname.value;
        let sex = document.forms.personalinfo.sex.value;
        let sexorientation = document.forms.personalinfo.sexorientation.value;
        let dob = document.forms.personalinfo.dob.value;
        let uniqueid = document.forms.personalinfo.uniqueid.value;

        localStorage.setItem('firstname', firstname);
        localStorage.setItem('middlename', middlename);
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('sex', sex);
        localStorage.setItem('sexorientation', sexorientation);
        localStorage.setItem('dob', dob);
        localStorage.setItem('uniqueid', uniqueid);

}

function populate(){
    let firstname = document.forms.personalinfo.firstname;
    let middlename = document.forms.personalinfo.middlename;
    let lastname = document.forms.personalinfo.lastname;
    let sex = document.forms.personalinfo.sex;
    let sexorientation = document.forms.personalinfo.sexorientation;
    let dob = document.forms.personalinfo.dob;
    let uniqueid = document.forms.personalinfo.uniqueid;

    if(localStorage.getItem('firstname') != null){
        firstname.value = localStorage.getItem('firstname');
    }
    if(localStorage.getItem('lastname') != null){
        lastname.value = localStorage.getItem('lastname');
    }
    if(localStorage.getItem('sex') != null){
        sex.value = localStorage.getItem('sex');
    }
    if(localStorage.getItem('sexorientation') != null){
        sexorientation.value = localStorage.getItem('sexorientation');
    }
    if(localStorage.getItem('dob') != null){
        dob.value = localStorage.getItem('dob');
    }
    if(localStorage.getItem('uniqueid') != null){
        uniqueid.value = localStorage.getItem('uniqueid');
    }
    // if(localStorage.getItem('middlename') != null){
    //     firstname.value = localStorage.getItem('middlename');
    // }
}