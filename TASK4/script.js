     //selecting
     var ul = document.getElementById("list-container")
     var input=document.getElementById("input")
     //function
     function add(){
          var listitem=document.createElement("li")
          listitem.innerHTML=input.value +"  "+"<button onclick='deleteiteam()' id='button'>Delete</button>"
          ul.append(listitem)
          
     }
     function deleteiteam(){
         event.target.parentElement.remove()

     }
