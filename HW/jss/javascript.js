function submitForm(){
    var name = document.forms["personaldetail"]["name"].value;
    var nam= (document.forms["personaldetail"]["nam"].value);
    var add = (document.forms["personaldetail"]["add"].value);
    var num = (document.forms["personaldetail"]["num"].value);
    var email = (document.forms["personaldetail"]["email"].value);
    var gen = (document.forms["personaldetail"]["gen"].value);
    var Message = (document.forms["personaldetail"]["Message"].value);
                    
        if(nam==""||add==""||num==""||email==""||gen==""||Message==""){
             alert("Please fill all the form")
        }
        else{
            alert("Thank You")
         }
 }
                