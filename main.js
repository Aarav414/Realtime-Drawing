function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
PoseNet = ml5.poseNet(video, modelLoaded);
PoseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model is Loaded!");
}

function draw(){
    background('#00FFBF');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}