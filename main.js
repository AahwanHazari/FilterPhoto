function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 255);
    video = createCapture(VIDEO);
    video = video.hide();

    tint_colour = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_colour);
}

function take_snapshot(){
    save('Special_Photo');
}

function apply_filter(){
    tint_colour= document.getElementById("colour_name").value;
}