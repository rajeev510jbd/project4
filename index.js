
const input=document.querySelector('#hello');
const div2=document.querySelector('.div2')
input.addEventListener('click',add());
function add()

{
    if(input.value=="")
    {
        alert("please Enter Task");
    }


    else
    {

let ele=document.createElement("ul");
ele.innerHtml='${input.value}';
div2.appendChild(ele);
input.value=""

    }
}




   

    


// form.addEventListener('change',(e)=>{
   
//     localStorage.setItem('myName',e.target.value);
//      h3.innerText=localStorage.getItem('myName')
     
//  })











// link.addEventListener('change',(e)=>{
//     // console.log(e.target.value);
//     // inputValue=e.target.value
//     pg.innerText=e.target.value
// });
//const link = document.querySelector('#hello')

