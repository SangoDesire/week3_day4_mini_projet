//variables 

let msdown = false;
let color = null;


let body = document.getElementsByTagName("body")[0];
let color_blocks = document.querySelectorAll("#sidebar > *");
let fill_blocks = document.querySelectorAll("#container > *");
let clear_button = document.getElementsByTagName("button")[0];


clear_button.addEventListener("click", function(){
    for (fill_block of fill_blocks){
        fill_block.style.backgroundColor = "white";
    }
});

body.addEventListener("msdown", function(){
    msdown = true;
})

body.addEventListener("mouseup", function(){
    msdown = false;
})


for (color_block of color_blocks){
    color_block.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    });
}

for (fill_block of fill_blocks){
    fill_block.addEventListener("mousedown", function(event){
        if (color != null) event.target.style.backgroundColor = color;
    });
    fill_block.addEventListener("mouseover", function(event){
        if (msdown && color != null) event.target.style.backgroundColor = color;
    });
}
