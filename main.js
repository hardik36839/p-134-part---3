noseX = 0
NoseY = 0 
difference = 0 
leftwristX = 0 
rightwristX = 0

function setup()
{
     video = createCapture(VIDEO)
     video.size(550 , 500)
canvas = createCanvas(550,550)
canvas.position(560 , 150)
poseNet = ml5.poseNet(video , model_loaded)
poseNet.on('pose',got_poses)
}
function model_loaded()
{
    console.log("model is loaded")
}
function got_poses(results)
{
if (results.length > 0)
{
console.log(results)
noseX = results[0].pose.nose.x
NoseY = results[0].pose.nose.y
console.log("noseX and noseY  = " , noseX, NoseY)
leftwristX = results[0].pose.leftWrist.x
rightwristX = results[0].pose.rightWrist.x
difference = floor(leftwristX - rightwristX)
console.log("leftwristX , rightwristX , difference = " , leftwristX  ,rightwristX , difference )
}
}
function draw()
{
    background("#f76f6f")
    fill("#0cfae6")
    stroke("#840dd4")
    textSize(difference)
    text( "hardik" , noseX , NoseY )
    
}