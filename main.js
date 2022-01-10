function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PpCqsI9BS/model.json', modelLoaded)
  }
  
  function modelLoaded(){
  console.log("Madel was loaded");
  }
  
  function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotresults);
  }
  
  function gotresults(error,results) {
    if (error){console.error(error)}
    else {console.log(results);
  
      document.getElementById("daobject").innerHTML=results[0].label;
      document.getElementById("number_of_accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
  }
  
  
  
  