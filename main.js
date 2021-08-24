function submit()
{
hi = []
for (let index = 1; index <= 6; index++) {
hi.push(document.getElementById("para1_input_box_"+index).value)    
}
hi=hi.join(". ")

document.getElementById("display_name").innerHTML=hi

hey = []
for (let index = 1; index <= 6; index++) {
hey.push(document.getElementById("para2_input_box_"+index).value)    
}
hey=hey.join(". ")

document.getElementById("hi_name").innerHTML=hey
}





