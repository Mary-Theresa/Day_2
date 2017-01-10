
var request        = require('request'),
    readline       = require('readline'),
    requestPromise = require('request-promise'),
    apiUrl         = "";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Please enter your github username==>  ', (userName) => {
    apiUrl = "https://api.github.com/users/" + userName;
    getGithubData(userName);
    rl.close();
});

function getGithubData(userName){
    console.log(apiUrl);
    var options = {
        uri: apiUrl,
        headers: {
            'User-Agent': userName 
        }
    };

    requestPromise(options)
    .then(function(response){
        var data = JSON.parse(response)
        displayData(data);
    })
    .catch(function(err){
        console.log(err);
    })
}

function displayData(gitData) {
    console.log("----------These are your stats----------");
    console.log("Location:     " + gitData['location']);
    console.log("Followers:    " + gitData['followers']);
    console.log("Following:    " + gitData['following']);
    console.log("Public repos: " + gitData['public_repos']);
    console.log("Public gists: " + gitData['public_gists']);
}





