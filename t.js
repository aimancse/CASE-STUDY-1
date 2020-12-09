function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState==4&&this.status==200) {
            var response = JSON.parse(this.responseText);
            var output = "";
            for (var i = 0; i < response.length; i++) {
                output +=  "<div class='input-group mb-3'>"+"<div class='input-group-text'>"+"<input class='form-check-input' name='fruit' id='cb' action='return checkbox()' type='checkbox' value='' aria-label='Checkbox for following text input'>"+response[i].title +"</div>"+ "</div>" +"<br>" ;
            }
            document.getElementById("demo").innerHTML = output;


            
  document.querySelectorAll("input[name=fruit]").forEach(i=>{
    i.onclick = function(){
     showChecked();
    }
   });


        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}




function showChecked(){
   if(document.getElementById("cb").textContent = document.querySelectorAll("input:checked").length>=5) 
   {
    alert("Congrats! 5 Tasks have been Sucessfully Completed");
   }
  }
  



  function hell(callback)
  {
      let a=document.getElementById("imail");
      let b=document.getElementById("ipass");
      if(a.value == "admin" && b.value =="12345")
      {
          callback();
      }
      else
      {
          alert("Please Enter a valid Email/Password");
      }

  }

  function callback()
  {
      alert("Success");
      location.replace("tata.html");
  }