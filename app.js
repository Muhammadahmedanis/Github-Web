var inp = document.querySelector("#inp");
var userName = document.querySelector("#username");
var bio = document.querySelector("#bio");
var repo = document.querySelector("#repo");
var follower = document.querySelector("#follower");
var following = document.querySelector("#following");
var loca = document.querySelector("#location");
var gitlink = document.querySelector("#gitlink");
var getid = document.querySelector("#id");
var img = document.querySelector("#img");
var arr = [];

var getmain = document.querySelector("#main");
function search() {
    
    fetch(`https://api.github.com/users/${inp.value}`)
    .then(function (data) {
        return data.json()
    })
    .then(function (data1) {
        userName.innerText = data1.name;
        follower.innerText = data1.followers;
        following.innerText = data1.following; 
        repo.innerText = data1.public_repos
        getid.innerText = data1.id;
        bio.innerText = data1.bio ? data1.bio : "No bio found";
        gitlink.innerText = data1.html_url     
        loca.innerText = data1.location ? data1.location : "No location found";
        img.src = data1.avatar_url ? data1.avatar_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkK98VBjmf1Q6_3SC9Nmz8CILkBdm1BUiFLg&s"
        // console.log(data1);
        arr.push(data1);
        localStorage.setItem("ids", JSON.stringify(arr));
    })
}    


function ca() {
    var getval = localStorage.getItem("ids");
    // console.log(getval, typeof(getval));
    var changestr = JSON.parse(getval)
    // console.log(changestr, typeof(changestr));
    changestr.map(function (u) {
        userName.innerHTML = u.name;
        bio.innerText = u.bio ? u.bio: "No bio found";
        repo.innerText = u.public_repos;
        follower.innerText = u.followers;
        following.innerText = u.following;
        getid.innerText = u.id;
        gitlink.innerText = u.html_url;
        loca.innerText = u.location ? u.location : "No location found";
        img.src = u.avatar_url ? u.avatar_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkK98VBjmf1Q6_3SC9Nmz8CILkBdm1BUiFLg&s";
        // console.log(u);
    })
}
ca()