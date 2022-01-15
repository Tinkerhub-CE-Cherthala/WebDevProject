import './Mainbg.css';
import logo from './images/logo thick 1.png';


window.addEventListener("scroll",function(){
    const header= document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
});

const navigation= document.querySelector('nav');

window.onload= function(){
document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}}
function Mainbg() {
    return (
        <header>
        <div class="main-bg"></div>
        <div class="logo">
            <img class="logo1" src={logo} alt="logo" />
            <div class="logo2">
                <a href="./Mainbg.js">Zealous</a>
                <p>Explore the New Horizons</p>
            </div>
        </div>
        <a class="zealous" href="./Mainbg.js">Zealous</a>
        <div class="toggle"></div>
        <nav>
            <ul>
                <li><a href="./Event">Events</a></li>
                <li><a href="./Event">About</a></li>
                <li><a href="./Event">Contact</a></li>
            </ul>
        </nav>
    </header>
    );
}
export default Mainbg;

