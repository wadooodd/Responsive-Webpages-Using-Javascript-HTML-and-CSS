
//**************** mytimetable javascript code ********************

function searchTable() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                
                found = true;
                td[j].style.backgroundColor="yellow";
            }
            else{
                td[j].style.backgroundColor="";
            }
        }
        if (found) {
            tr[i].style.display = "";
            //td[j].style.backgroundColor="yellow";
            found = false;
            
        } else {
            tr[i].style.display = "none";
        }
    }
}

function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var r1=document.getElementById("1row"+no);
 var r2=document.getElementById("2row"+no);
 var r3=document.getElementById("3row"+no);
 var r4=document.getElementById("4row"+no);
 var r5=document.getElementById("5row"+no);
 var r6=document.getElementById("6row"+no);

 
 var data1=r1.innerHTML;
 var data2=r2.innerHTML;
 var data3=r3.innerHTML;
 var data4=r4.innerHTML;
 var data5=r5.innerHTML;
 var data6=r6.innerHTML;


	
 r1.innerHTML="<input type='text' id='text1"+no+"' value='"+ data1 +"'>";
 r2.innerHTML="<input type='text' id='text2"+no+"' value='"+ data2+"'>";
 r3.innerHTML="<input type='text' id='text3"+no+"' value='"+ data3+"'>";
 r4.innerHTML="<input type='text' id='text4"+no+"' value='"+ data4+"'>";
 r5.innerHTML="<input type='text' id='text5"+no+"' value='"+ data5+"'>";
 r6.innerHTML="<input type='text' id='text6"+no+"' value='"+ data6+"'>";
}

function save_row(no)
{
 var val1=document.getElementById("text1"+no).value;
 var val2=document.getElementById("text2"+no).value;
 var val3=document.getElementById("text3"+no).value;
 var val4=document.getElementById("text4"+no).value;
 var val5=document.getElementById("text5"+no).value;
 var val6=document.getElementById("text6"+no).value;

 document.getElementById("1row"+no).innerHTML=val1;
 document.getElementById("2row"+no).innerHTML=val2;
 document.getElementById("3row"+no).innerHTML=val3;
 document.getElementById("4row"+no).innerHTML=val4;
 document.getElementById("5row"+no).innerHTML=val5;
 document.getElementById("6row"+no).innerHTML=val6;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var newcol1=document.getElementById("newcol1").value;
 var newcol2=document.getElementById("newcol2").value;
 var newcol3=document.getElementById("newcol3").value;
 var newcol4=document.getElementById("newcol4").value;
 var newcol5=document.getElementById("newcol5").value;
 var newcol6=document.getElementById("newcol6").value;

	
 var table=document.getElementById("myTable");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='1row"+table_len+"'>"+newcol1+"</td><td id='2row"+table_len+"'>"+newcol2+"</td><td id='3row"+table_len+"'>"+newcol3+"</td><td id='4row"+table_len+"'>"+newcol4+"</td><td id='5row"+table_len+"'>"+newcol5+"</td><td id='6row"+table_len+"'>"+newcol6+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("newcol1").value="";
 document.getElementById("newcol2").value="";
 document.getElementById("newcol3").value="";
 document.getElementById("newcol4").value="";
 document.getElementById("newcol5").value="";
 document.getElementById("newcol6").value="";
}

//************** index javascript code ********************

function enlarge(x) {
    x.style.height = "auto";
    x.style.width = "60%";
 }
 
 function normal(x) {
    x.style.height = "auto";
    x.style.width = "40%";
 }


 function validate() {
    var project =
        document.forms["RegForm"]["project"];
    var year =
        document.forms["RegForm"]["year"];
    var tech =
        document.forms["RegForm"]["tech"];
   

    if (project.value == "") {
        window.alert("Please enter project title");
        project.focus();
        return false;
    }

    if (year.selectedIndex < 1) {
        alert("Please enter the year.");
        year.focus();
        return false;
    }

    if (tech.selectedIndex < 1) {
        alert("Please enter the technology.");
        tech.focus();
        return false;
    }


    return true;
}

function append() {
    debugger
    var strText = document.getElementById("project").value;
    var strText1 = document.getElementById("year").value;
    var strText2 = document.getElementById("tech").value;
    var strText3 = document.getElementById("description").value;
    document.getElementById("p1").innerHTML = strText;
    document.getElementById("p2").innerHTML = strText1;
    document.getElementById("p3").innerHTML = strText2;
    document.getElementById("p4").innerHTML = strText3;

    
}



//***************** course videos javascript code ****************

var player = document.getElementById("myplayer");

function playPause(id) {
    var ply = document.getElementById(id);
    if (ply.paused)
        ply.play();
    else
        ply.pause();
}

function stopVideo(id) {
    var stop = document.getElementById(id);
    stop.pause();
    if (stop.currentTime) {
        stop.currentTime = 0;
    }
}

function replayVideo(id) {
    var reply = document.getElementById(id);
    reply.currentTime = 0;
      reply.play();
}

function increaseVolume(id) {
    var volup = document.getElementById(id);
    volup.volume+=.1;
    
}

function decreaseVolume(id) {
    var voldown = document.getElementById(id);
    voldown.volume-=.1;
    
}

function muteVolume(id) {
    var mute = document.getElementById(id);
    if (mute.muted)
        mute.muted = false;
    else
        mute.muted = true;
}

function speeddown(id){
    var vid = document.getElementById(id);
    vid.playbackRate = 0.5;
}

function speedup(id){
    var vid = document.getElementById(id);
    vid.playbackRate = 1;
}


