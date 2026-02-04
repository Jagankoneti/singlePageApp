console.log('script added');

// function login(user, callback) {
//     setTimeout(() => {
//         console.log("User logged in:", user);
//         callback(user.id);
//     }, 1000);
// }

// function getProfile(userId, callback) {
//     setTimeout(() => {
//         console.log("Profile fetched for user:", userId);
//         callback({ userId, name: "Jagan" });
//     }, 1000);
// }

// function getOrders(profile, callback) {
//     setTimeout(() => {
//         console.log("Orders fetched for:", profile.name);
//         callback(["Order1", "Order2"]);
//     }, 1000);
// }

// // CALLBACK HELL 😵
// login({ id: 101 }, function (userId) {
//     getProfile(userId, function (profile) {
//         getOrders(profile, function (orders) {
//             console.log("Orders:", orders);
//         });
//     });
// });

function login(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user && user.id) {
                console.log("Login successful");
                resolve(user.id);
            } else {
                reject("Login failed: Invalid user");
            }
        }, 1000);
    });
}

function getProfile(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 101) {
                console.log("Profile fetched");
                resolve({ userId, name: "Jagan" });
            } else {
                reject("Profile not found");
            }
        }, 1000);
    });
}

function getOrders(profile) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (profile && profile.name) {
                console.log("Orders fetched");
                resolve(["Order1", "Order2"]);
            } else {
                reject("Orders not available");
            }
        }, 1000);
    });
}

// PROMISE CHAINING
// login({ id: 101 })
//     .then(res=>getProfile(res))
//     .then(res=>getOrders(res))
//     .then(orders => {
//         console.log("Orders:", orders);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });


async function loadUserData() {
    try {
        const userId = await login({ id: 101 });
        const profile = await getProfile(userId);
        const orders = await getOrders(profile);
        console.log("Orders:", orders);
    } catch (err) {
        console.error(err);
    }
}

// loadUserData();


document.getElementById("btn").addEventListener("click",function(){
 console.log('hii');
})
// $('#btn').on("click",function(){
//     alert('hi');
// })

let a=1;
if(a==1){
    var b=2;
    console.log(a);
    console.log(b);
}
console.log(b);

const btnHandler= document.getElementById('btn');

btnHandler.style.display="none"

const colClass= document.getElementsByClassName('jumbotron');
for (let i = 0; i < colClass.length; i++) {
    colClass[i].style.color = "pink";
}
// $(".jumbotron").css("color", "red");

var arr= [1,2,3];
var mul=arr.reduce((total,cur)=>total+cur);
console.log(mul);

var obj= {
    name:'jagan',
    age:27,
    consoleFun: function(){
        console.log("my name is:"+this.name);
    }
};
// var shallow= Object.assign({},obj);
// console.log(shallow);

// var deepCopy= structuredClone(obj);
var deepCopy= JSON.parse(JSON.stringify(obj));
console.log(deepCopy);

let nameObj={
    name:"john",
    age:27
}
let calFun= function(place){
    console.log(this.name+' age is '+this.age +" from "+place);
}
// calFun.call(nameObj, 'Srikakulam');

let nameObj1={
    name:"john1",
    age:28
}
// calFun.call(nameObj1, 'Tekkali')
// calFun.apply(nameObj1, ['Tekkali'])
let bindFun=calFun.bind(nameObj1, 'Tekkali')
bindFun();

let append_div_ele= document.createElement(`div`);
const textnode_ele = document.createTextNode("Water");
append_div_ele.appendChild(textnode_ele)
let append_div= document.getElementById("append_div");
append_div.appendChild(append_div_ele);

const node = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("append_div").appendChild(node);


// function currying is whay that after a returning a function higher funcion argument value is availabale in lower function

let multi= function(a){
    return function(b){
        console.log(a*b);
    }
}

let multiByTwo=multi(2);
multiByTwo(3);

function getData(){
    let val=document.getElementById("search").value;
    console.log(val)
}
//debouncing we mainly see in search bars like 
// when anything enters in search instead of making multiple api calls based on 
// certine time we can make a api call
function doSomething(fn,d){
    let timer;
    return function (){
        clearTimeout(timer);
        timer=setTimeout(fn,d);
    }
}
const getSuggestion=doSomething(getData,1000);

// “Debouncing is useful when only the final action matters, while throttling is useful when intermediate actions are also important but need to be rate-limited.”