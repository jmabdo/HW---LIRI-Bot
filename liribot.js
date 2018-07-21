const fs = require("fs");

function testFun(param1, param2){
    console.log(param1);

    console.log(param2)
}

// testFun(process.argv[2]);

// testFun("hello")


function runCommand(command, searchTerm){
    if(command){
        switch(command){
            case "my-tweets":
            myTweets();
            break;

            case "spotify-this-song":
            if(searchTerm){
                runSpotify(searchTerm);
            }else{
                runSpotify("The sign");
            }
            break;

            case 'movie-this':
            if(searchTerm){
                movieThis(searchTerm);
            }
            else{
                movieThis("Mr. Nobody");
            }
            break;

            case "do-what-it-says":
            doWhat();
            break;

            default:
            myTweets();
        }
    }
}


function myTweets(){
    console.log("running twitter function");
}

function runSpotify(searched){
    console.log("run spotify to search this song: ", searched);
}

function movieThis(searched){
    console.log("run movie function and search for this movie: ", searched);
}

function doWhat(){
    // console.log("run do what from random.txt");

    fs.readFile("random.txt", "utf8", function(error, data){
        if(error) throw error;

        console.log(data);

        // var myString = "batman";

        // console.log(myString.split("t"));

        console.log(typeof data)

        var commandArray = data.split(",");

        console.log(commandArray);

        runCommand(commandArray[0], commandArray[1]);
    })




}

function getSearchTerm(array){
    // console.log(array)

    var searchTerm = "";

    var searchArray = array.slice(3);

    // console.log(searchArray);

    for(var i = 0; i < searchArray.length; i++){
        // searchTerm = searchTerm + " " + searchArray[i];
        searchTerm += " " + searchArray[i];
    }

    // console.log(searchTerm);

    return searchTerm

  
}

// getSearchTerm(process.argv);

runCommand(process.argv[2], getSearchTerm(process.argv))

// console.log(process.argv)