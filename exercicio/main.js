$(document).ready(function(){
    url = "https://api.github.com/users/frohlichramon01";

    fetch(url).then(function(response){
        return response.json();
    }).then(function(json){
        $("#profile-avatar").attr("src",json.avatar_url);
        $("#profile-name").text(json.name);
        $("#profile-username").text(`@${json.login}`);
        $("#repos").text(json.public_repos);
        $("#followers").text(json.followers);
        $("#following").text(json.following);
        $("#profile-link").attr("href",json.html_url);
        document.title = `Meu Github - @${json.login}`;
    })
})