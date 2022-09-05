showtask()

function myFunction(x,index){
    x.classList.toggle("fa-check-square");

}

function fun1() {
    document.getElementById("task2").style.position = "absolute";
}


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






var submit = document.querySelector("Submit");
let form = document.getElementById("form");
let task = document.getElementById("tasks");
let msg = document.getElementById("msg");
let input = document.getElementById("des");




form.addEventListener("submit", (e)=>{
  e.preventDefault();
  msg.innerHTML = "";
  acceptData();
});

let acceptData = ()=>{
  var data = {};
  var dataarr = [];

  let elem_title = document.querySelector('#title').value;
  let elem_desc = document.querySelector('#des').value;

    data["t"] = elem_title;
    data["Desc"] = elem_desc;

    let content = localStorage.getItem("contents")
    if(content == null ){
      dataarr = []
    } else {
      dataarr = JSON.parse(content)
    }

    dataarr.push(data)
    console.log(dataarr)
    
    localStorage.setItem("contents" , JSON.stringify(dataarr));
    modal.style.display = "none";

    resetform();
    showtask()
};

function resetform(){
  document.querySelector('#title').value = "";
  document.querySelector('#des').value = "";
}

function showtask() {
  let task = document.getElementById("tasks");

  var dataarr
  let content = localStorage.getItem("contents")
    if(content == null ){
      dataarr = []
    } else {
      dataarr = JSON.parse(content)
    }

    console.log(dataarr)

    task.innerHTML = "<center><h4>Tasks</h4></center>"

  dataarr.forEach((data,index) => {
    task.innerHTML += `
      <div id = "sss">
        <span>
            <b>${data.t}</b>                 
            <i onclick="myFunction(this)" class="fa fa-clock-o"></i>
        </span>
      
        <br>
        <p>${data.Desc}</p>

        <span class="options">
          <i onClick="editTask(this, ${index}, '${data.Desc}', '${data.t}')" class='fa fa-edit'></i>
          <i onClick="deleteTask(this , ${index})" class="fa fa-trash"></i>
        </span>
      </div>
  `;
  });

}



let deleteTask = (r, index) => {
  // console.log("Hello")
  // let id = document.getElementById("sss");
  // r.parentElement.parentElement.remove(id);


  let content = localStorage.getItem("contents")
  content = JSON.parse(content)  

  content.splice(index,1)  

  localStorage.setItem("contents" , JSON.stringify(content));
  showtask();

}; 



let editTask = (c,index, desc, title)=> {
  console.log(desc, title,'data')
//   let id = document.getElementById("sss");
//  input.value = c.parentElement.innerHTML;
//  c.parentElement.parentElement.remove(id);
  
  modal.style.display = "block";

  document.querySelector('#title').value = title;
  document.querySelector('#des').value = desc;  

  let content = localStorage.getItem("contents")
  content = JSON.parse(content) 

  content.splice(index,1)  

  localStorage.setItem("contents" , JSON.stringify(content));
  showtask();
};


let deleteAlltask = ()=> {
  localStorage.clear();
  showtask();
};
