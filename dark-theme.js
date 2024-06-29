let icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/ltym.png";
        
        
        
    }else{
        icon.src = "images/icons8-день-и-ночь-50.png";
        
    }
}
