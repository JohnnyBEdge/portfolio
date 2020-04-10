const welcome_container = document.getElementById('welcome');
const collapseUpBtn = document.getElementById('collapse_up');
const collapseDownBtn = document.getElementById('collapse_down');


function hideWelcome(){
    console.log("hidden");
    welcome_container.style.display = 'none';

    if(collapseUpBtn.style.display = ''){
        collapseDownBtn.style.display = 'none';
    } else {
        collapseUpBtn.style.display = '';
    }
};

collapseUpBtn.addEventListener('click', hideWelcome);
collapseDownBtn.addEventListener('click', hideWelcome);


