let arr=[
    
    ["Name","Age","Gender","Subject"],
    ["Uzair",19,"male","BCA"],
    ["Rehan",18,"male","BCA"],
    ["Umer",20,"male","BCA"],
    ["Adnan",19,"male","BCA"]
]
document.write("<table border=''>");
for(a=0;a<5;a++){
    document.write("<tr>");
    for(b=0;b<4;b++){
    document.write("<td>"+arr[a][b]+"</td>")
    }
    document.write("</tr>")
}
document.write("</table>");
