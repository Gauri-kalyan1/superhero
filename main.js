var canvas=new fabric.canvas("myCanvas");

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("ADV C86 2.jpg",function(Img){
    player_object=Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
    
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
        });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;


if (keyPressed=="38") {
       up();
       console.log("up");
    }

    if (keyPressed=="40") {
        down();
        console.log("down");
     }

     if (keyPressed=="37") {
        left();
        console.log("left");
     }

     if (keyPressed=="39") {
        right();
        console.log("right");
     }

     if (keyPressed=="87") {
        new_image("captin_ameriac_left_hand.png");
        console.log("w");
     }

     if (keyPressed=="71") {
        new_image("hulk_left_hand.png");
        console.log("g");
     }
     
     if (keyPressed=="76") {
        new_image("hulk_right_hand.png");
        console.log("l");
     }

     if (keyPressed=="84") {
        new_image("hulkd_body.png");
        console.log("t");
     }

     if (keyPressed=="82") {
        new_image("ironman_body.png");
        console.log("r");
     }

     if (keyPressed=="89") {
        new_image("ironman_face.png");
        console.log("y");
     }

     if (keyPressed=="68") {
        new_image("ironman_left_hand.png");
        console.log("d");
     }

     if (keyPressed=="85") {
        new_image("ironman_legs.png");
        console.log("u");
     }

     if (keyPressed=="67") {
        new_image("ironman_right_hand.png");
        console.log("c");
     }

     if (keyPressed=="67") {
        new_image("ispiderman_body.png");
        console.log("j");
     }

     if (keyPressed=="67") {
        new_image("spiderman_face.png");
        console.log("z");
     }

     if (keyPressed=="67") {
        new_image("spiderman_left_hand.png");
        console.log("x");
     }

     if (keyPressed=="67") {
        new_image("spiderman_legs.png");
        console.log("b");
     }

     if (keyPressed=="67") {
        new_image("spiderman_right_hand.png");
        console.log("v");
     }

     if (keyPressed=="67") {
        new_image("thor_face.png");
        console.log("k");
     }

     if (keyPressed=="67") {
        new_image("thor_left_hand.png");
        console.log("1");
     }

     if (keyPressed=="67") {
        new_image("thor_right_hand.png");
        console.log("4");
     }
    }