function addEmp(){
    let emp=document.getElementById('empId').value;
    console.log(emp);
    let empNo=document.getElementById('empNo').value
    console.log(empNo);
    if(emp=='' || empNo==''){
        alert("Enter all fields")
    }else{
        li=document.createElement('li');
        li.innerHTML=`
        <div class="d-flex align-items-center justify-content-around mt-5 text-white">
                ${emp}
                <i onclick="editEmp(this)" class="fa-solid fa-pen"></i>
                ${empNo}
                <i onclick="editEmpNo(this)" class="fa-solid fa-pen"></i>
                <i onclick="deleteEmp(this)" class="fa-solid fa-trash"></i>
        </div>
         `
        document.getElementById('empList').append(li)
        document.getElementById('empId').value="";
        document.getElementById('empNo').value="";
    }
}

function editEmp(emt1){
    let li=emt1.parentNode;
    console.log(li);

    // childNodes[0] = <img>
    // childNodes[1] = " " (whitespace/newline)
    // childNodes[2] = " wef " your actual task text
    // childNodes[3] = <i class="fa-pen">
    // childNodes[4] = <i class="fa-trash"></i> 

    let oldText= li.childNodes[1].textContent.trim();
    let newTxt=prompt("Enter Employee Name",oldText);
    if(newTxt !== null && newTxt.trim() !==''){
        li.childNodes[0].textContent=" "+newTxt+" ";
    }
    
}

function editEmpNo(emt2){
    let li=emt2.parentNode;
    console.log(li);

    let oldText=li.childNodes[4].textContent.trim();
    let newTxt=prompt("Enter Employee Mobile No",oldText);
    if(newTxt !== null && newTxt!==""){
        li.childNodes[2].textContent=" "+newTxt+" ";
    }
    
}

function deleteEmp(emt1){
    emt1.parentNode.remove();
}