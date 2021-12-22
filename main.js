let text = document.getElementById('txt');
let btn = document.getElementById('btn');
let div = document.getElementById('cardd');


let id = 0;
btn.addEventListener('click', ()=>{
    id++;
  if(!text.value == ""){
     div.innerHTML += `
         <div class="card mb-1" id="${id}">
            <div class="card-body d-flex justify-content-between">
                <span class="card-title">${text.value}</span>
                <button class="btn btn-danger" onclick="delDiv(${id})" >წაშლა</button>
            </div>
         </div>
     `;
     text.value = "";
  }else text.placeholder = "შეიყვანეთ ვის რა უნდა არგოთ !";
})

window.addEventListener("keypress", (e)=>{
  if(e.keyCode == 13){
      e.preventDefault();
    id++;
    if(!text.value == ""){
       div.innerHTML += `
           <div class="card mb-1" id="${id}">
              <div class="card-body d-flex justify-content-between">
                  <span class="card-title">${text.value}</span>
                  <button class="btn btn-danger" onclick="delDiv(${id})" >წაშლა</button>
              </div>
           </div>
       `;
       text.value = "";
    }else text.placeholder = "შეიყვანეთ ვის რა უნდა არგოთ !";
  }
})

function delDiv(id){
    document.getElementById(`${id}`).style.display = "none";
}