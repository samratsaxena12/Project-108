clickAudio = document.getElementById("clickAudio");
clickAudio2 = document.getElementById("clickAudio2");
clickAudio3 = document.getElementById("clickAudio3");
clickAudio4 = document.getElementById("clickAudio4");

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yeA1raLXA/model.json', modelLoaded)
}

function modelLoaded() {
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if(error){
        console.error(error);
    } else {
        console.log(results);
        animalName = results[0].label;
        catImage = "cat.png";
        crowImage = "crow.png";
        dogImage = "dog.png";
        duckImage = "duck.png";
        earImage = "ear.png"

        if(animalName == "Cat") {
            document.getElementById("animal_image").src = catImage;
            document.getElementById("cat").style.opacity = 1;
            document.getElementById("crow").style.opacity = 0.5;
            document.getElementById("dog").style.opacity = 0.5;
            document.getElementById("duck").style.opacity = 0.5;
            clickAudio.play();
        }
        if(animalName == "Crow") {
            document.getElementById("animal_image").src = crowImage;
            document.getElementById("cat").style.opacity = 0.5;
            document.getElementById("crow").style.opacity = 1;
            document.getElementById("dog").style.opacity = 0.5;
            document.getElementById("duck").style.opacity = 0.5;
            clickAudio2.play();
        }
        if(animalName == "Dog") {
            document.getElementById("animal_image").src = dogImage;
            document.getElementById("cat").style.opacity = 0.5;
            document.getElementById("crow").style.opacity = 0.5;
            document.getElementById("dog").style.opacity = 1;
            document.getElementById("duck").style.opacity = 0.5;
            clickAudio3.play();
        }
        if(animalName == "Duck") {
            document.getElementById("animal_image").src = duckImage;
            document.getElementById("cat").style.opacity = 0.5;
            document.getElementById("crow").style.opacity = 0.5;
            document.getElementById("dog").style.opacity = 0.5;
            document.getElementById("duck").style.opacity = 1;
            clickAudio4.play();
        }
        if(animalName == "Background Noise") {
            document.getElementById("animal_image").src = earImage;
            document.getElementById("cat").style.opacity = 0.5;
            document.getElementById("crow").style.opacity = 0.5;
            document.getElementById("dog").style.opacity = 0.5;
            document.getElementById("duck").style.opacity = 0.5;
        }
    }
}