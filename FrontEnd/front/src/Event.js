import general from './images/general.png';
import ece from './images/ece.png';
import eee from './images/eee.png';
import cse from './images/computer.png';
import './Event.css';

function Event() {
    return (
        <div>
            <div class="event">
    <p>Events</p>
  </div>
  <div class="section2">
  <div class = "container">
    <div class = "card">
      <div class = "image">
        <img href = "#" src = {general} alt='general' />
      </div>
      <div class = "content">
        <a class="view" href="http://127.0.0.1:5500/WebDevProject/FrontEnd/front/src/event/index.html">
          <span>view</span>
          <span>view</span>
        </a>
      </div>
    </div>
    <div class = "card">
      <div class = "image">
        <img href = "#" src = {ece} alt='ece' />
      </div>
      <div class = "content">
        <a class="view" href="http://127.0.0.1:5500/WebDevProject/FrontEnd/front/src/event/index.html">
          <span>view</span>
          <span>view</span>
        </a>
      </div>
    </div>
    <div class = "card">
      <div class = "image">
        <img href = "#" src = {eee} alt='eee' />
      </div>
      <div class = "content">
        <a class="view" href="http://127.0.0.1:5500/WebDevProject/FrontEnd/front/src/event/index.html">
          <span>view</span>
          <span>view</span>
        </a>
      </div>
    </div>  
    <div class = "card">
      <div class = "image">
        <img href = "#" src ={cse} alt='cse' />
      </div>
      <div class = "content">
        <a class="view" href="http://127.0.0.1:5500/WebDevProject/FrontEnd/front/src/event/index.html">
          <span>view</span>
          <span>view</span>
        </a>
      </div>
    </div>   
  </div>
</div>
        </div>    
    );
}

export default Event;
