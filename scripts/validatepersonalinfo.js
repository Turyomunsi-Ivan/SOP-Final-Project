//^-> matches the beginning of an input
//$-> matches the end of an input.
//*= matches zero or more occurance of the preceeding character.
//+= matches one or more occurrance of the preceeding character.
//[^XYZ] = matches anything not enclosed in the bracket.
//\s matches a single white space.

try {
    function validatepersonalinfo(){
        let firstname = document.forms.personalinfo.firstname.value;
        let middlename = document.forms.personalinfo.middlename.value;
        let lastname = document.forms.personalinfo.lastname.value;
        let sex = document.forms.personalinfo.sex.value;
        let sexorientation = document.forms.personalinfo.sexorientation.value;
        let dob = document.forms.personalinfo.dob.value;
        let uniqueid = document.forms.personalinfo.uniqueid.value;
        
        if(!firstname){
               document.getElementById('firstnameErr').innerHTML = "First name is required";
               document.forms.personalinfo.firstname.focus();
               return false;
        }
        if(!lastname){
            document.getElementById('lastnameErr').innerHTML = "Last name is required";
            document.forms.personalinfo.lastname.focus();
            return false;
        }
        if(!sex){
            
        }
        if(!sexorientation){
            
        }
        if(!dob){
            
        }
        if(!uniqueid){
            
        }
        if(!middlename){
            
        }

    }
    function validatefn(){
        let namepattern = /^[A-Za-z]$/; 
        let firstname = document.forms.personalinfo.firstname.value;
        if(firstname){
            let x = namepattern.test(firstname);
            if(x==false){
                document.getElementById('firstnameErr').innerHTML = 'First name can only contain letters and white spaces';
                document.forms.personalinfo.lastname.focus();
            }
            else{
                document.getElementById('firstnameErr').innerHTML = "";
                document.forms.personalinfo.firstname.style.bordercolor= 'green';
            }
        }

    }
    function validateln(){
        
    }
    function validatesex(){
        
    }
    function validateuniqueid(){
        
    }
    function validatedob(){
        
    }
    function validatesexorientation(){

    }
} catch (error) {
    
}