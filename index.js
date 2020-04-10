const welcome_container = document.getElementById('welcome');
const collapseUpBtn = document.getElementById('collapse_up');
const collapseDownBtn = document.getElementById('collapse_down');

// function toggleHidden(){
//     setTimeout(function(){
//         if (welcome_container.style.display === "none") {
//             welcome_container.style.display = "flex";
//           } else {
//             welcome_container.style.display = "none";
//           };
//     },1000)
// };

function collapseUp(){
    console.log("collapsing")
    setTimeout(function(){
        if (welcome_container.style.display === "none") {
            welcome_container.style.display = "flex";
          } else {
            welcome_container.style.display = "none";
          };
          console.log("collapsed")
    },1000)

};

function collapseDown(){

        if (welcome_container.style.display === "flex") {
            welcome_container.style.display = "none";
          } else {
            welcome_container.style.display = "flex";
          };

};

collapseDownBtn.addEventListener('click', collapseDown)
collapseUpBtn.addEventListener('click', collapseUp)