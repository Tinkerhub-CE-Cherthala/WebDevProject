import './Main-bg.css';

window.addEventListener("scroll",function(){
    const header= document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
});
const navigation= document.querySelector('nav');
document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}
function Event() {
    return (
        <header>
        <div class="main-bg"></div>
        <div class="logo">
            <img class="logo1" src="./logo thick 1.png" alt="logo" />
            <div class="logo2">
                <a href="#">Zealous</a>
                <p>Explore the New Horizons</p>
            </div>
        </div>
        <a class="zealous" href="#">Zealous</a>
        <div class="toggle"></div>
        <nav>
            <ul>
                <li><a href="#">Events</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    );
}
