/* XueWu System Core Javascript
 * (C)opyright 2024 KCISHackers.
 * All Rights reserved.
 * Visit: https://www.github.com/KCISHacker/XueWuSystem for more info.
 */
function main(){console.log("Hello from XueWu System Core Javascript. (C)opyright 2024 KCISHackers. All Rights reserved. Visit: https://www.github.com/KCISHacker/XueWuSystem for more info.");if(document.getElementById("tweaked")){alert('This page had already been tweaked! Do not run twice!');return;}function tweak(id){document.cookie="DSAI="+id+";path=/";fetch(window.location.origin+'/DSAI/Query/Form_ListDetention?strKeyWord1=').then(response=>response.json()).catch(error=>(function(){console.error(error);if(error.name=='SyntaxError'){alert(id+' seems not exist. Check your spelling.');return;}alert("Error while tweaking "+id+"! "+error);successed=false;}()));}function btn_onclick(){if(document.getElementById("UserId").value==''){alert('Username field cannot be empty!');return;}tweak(document.getElementById("UserId").value);window.location.href="/DSAI/Home";}document.getElementsByName('btn_s')[0].addEventListener("click",function(){btn_onclick();});document.getElementsByClassName("main_logout")[0].innerText="tweaked by 学武系统tweaker";document.getElementsByClassName("ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset")[1].innerHTML="<div style=\"color:red\">This program is for learning reference only, rather than abusing, or you'll take the risk!</div>";document.getElementById("UserId").addEventListener("keyup",function(event){if(event.keyCode===13){event.preventDefault();btn_onclick();}});var mark=document.createElement('div');mark.id='tweaked';document.body.appendChild(mark);}main();