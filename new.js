function cursorOver(Item){
    document.getElementById(Item).style.cursor="pointer";
    document.getElementById(Item).style.color="gold";
}
function cursorOut(Item){
    document.getElementById(Item).style.color="black";
}

var W = 1;
function stripIt(words){
    wordsValue=words.indexOf("~");
    words=words.slice(0,wordsValue);
    return words;
}
function getW(W,V) {
    PC=words[W][V];
    if(PC !=""){
        PCValue=PC.indexOf("~");
        LinkPC =PC.slice(PCValue+1);
        return LinkPC;
    }else
        return 0;
}
function getStory(V){
    
    if(V==0)   
    S =1;
    else
      
       S=getW(S,V);
    presentation = words[S][0];
    response1=words[S][1];
        response1=stripIt(response1);
    response2=words[S][2];
        response2=stripIt(response2);
    response3=words[S][3];
        response3=stripIt(response3);
    response4=words[S][4];
        response4=stripIt(response4);
    
    document.getElementById("P1").innerHTML = presentation;
    if(response1=="")
        response1="";
    else
        response1="1. "+response1;
    document.getElementById("R1").innerHTML=response1;
    document.getElementById("images").src=image[S];
//    document.getElementById("A1").src=audio[S];
   if(response2=="")
        response2="";
    else
        response2="2. "+response2;
    document.getElementById("R2").innerHTML=response2;
    if(response3=="")
        response3="";
    else
        response3="3. "+response3;
    document.getElementById("R3").innerHTML=response3;
    if(response4=="")
        response4="";
    else
        response4="4. "+response4;
    document.getElementById("R4").innerHTML=response4;
}




