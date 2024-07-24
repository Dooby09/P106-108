/*https://teachablemachine.withgoogle.com/models/btKy7yCC0/*/

bark=0;
meow=0;
roar=0;
moo=0;

function start(){
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/btKy7yCC0/model.json",modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("resultlabel").innerHTML="The animal noise is " + results[0].label;
        document.getElementById("resultconfidence").innerHTML="Accuracy: " + results[0].confidence.toFixed(2)*100 + "%";

        if(results[0].label=="Barking"){
            document.getElementById("img").src="dog.png";
        }
        if(results[0].label=="Meowing"){
            document.getElementById("img").src="cat.png";
        }
        if(results[0].label=="Mooing"){
            document.getElementById("img").src="cow.png";
        }
        if(results[0].label=="Roaring"){
            document.getElementById("img").src="lion.jpg";
        }
    }
}
