let row = `<div><select name="course">
    <option value="Aplus">A+</option>
    <option value="A">A</option>
    <option value="Aminus">A-</option>
    <option value="Bplus">B+</option>
    <option value="B">B</option>
    <option value="Bminus">B-</option>
    <option value="Cplus">C+</option>
    <option value="C">C</option>
    <option value="Cminus">C-</option>
    <option value="Dplus">D+</option>
    <option value="D">D</option>
    <option value="F">F</option></select>
<input type="number"/>
</div>`;
let flag = false;
let start = ()=>{
    reset();
    let num = document.getElementById("courses").value;
    for(let i=0;i<num;i++){
        document.querySelector(".inputs").innerHTML+=row;
    }
}
let reset= ()=>{
    document.querySelector(".inputs").innerHTML="";
}
let calculate = ()=>{
    let hoursum=0,sum=0;
    let grades = document.querySelectorAll(".inputs div select");
    let hours = document.querySelectorAll(".inputs div input");
    if(grades.length===0){
        window.alert("start firsrt!!!");
        return;
    }
    for(let i=0;i<grades.length;i++){
        sum += Number(hours[i].value) * Number(document.querySelector(`#${grades[i].value}`).value);
        hoursum += Number(hours[i].value);
    }
    console.log(hoursum)
    console.log(sum)
    window.alert("your GPA is :  "+sum/hoursum);
}