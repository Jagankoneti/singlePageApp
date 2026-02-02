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
