
function preload() {

}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',getposes);
}

function modelLoaded(){
  console.log("Posenet is loaded");
}

function getposes(result){
  if(result.legnth > 0 ){
    console.log(result)
    console.log("nosex = " + result [0].pose.nose.x);
    console.log("nosey = " + result [0].pose.nose.y);
  }
}

function draw() {
image(video,0,0,300,300);
}

function take_snapshot(){    
  save('myFilterImage.png');
}