'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


var targetelement = document.getElementById("target")

targetelement.appendChild("<option value=\"2345768\">John</option>\n" +
    "<option value=\"2134657\">Paul</option>\n" +
    "<option value=\"5423679\">Jones</option>")


for(let i = 0; i < students.length; i++)
{
    let optionelement = document.createElement("option")
    optionelement.value = students[i].id;
    optionelement.text = students[i].name
  targetelement.appendChild(optionelement);
}