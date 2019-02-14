
 import React, { Component } from 'react';
<<<<<<< HEAD
 
=======

>>>>>>> audioplayback-assignment
 class PlayerBar extends Component {
   render() {
     return (
       <section className="player-bar">
        <section id="buttons">
<<<<<<< HEAD
           <button id="previous">
             <span className="ion-skip-backward"></span>
           </button>
           <button id="play-pause">
=======
           <button id="previous" onClick={this.props.handlePrevClick}>
             <span className="ion-skip-backward"></span>
           </button>
           <button id="play-pause" onClick={this.props.handleSongClick}>
>>>>>>> audioplayback-assignment
             <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
           </button>
           <button id="next" onClick={this.props.handleNextClick}>
             <span className="ion-skip-forward"></span>
           </button>
         </section>
         <section id="time-control">
<<<<<<< HEAD
           <div className="current-time">–:––</div>
           <input type="range" className="seek-bar" value="0" />
           <div className="total-time">–:––</div>
=======
         <div className="current-time">{this.props.currentTime}</div>
           <input 
             type="range" 
             className="seek-bar" 
             value={(this.props.currentTime / this.props.duration) || 0} 
             max="1" 
             min="0" 
             step="0.01" 
             onChange={this.props.handleTimeChange}
           />   
           <div className="total-time">{this.props.duration}</div>
>>>>>>> audioplayback-assignment
         </section>
         <section id="volume-control">
           <div className="icon ion-volume-low"></div>
           <input type="range" className="seek-bar" value="80" />
           <div className="icon ion-volume-high"></div>
         </section>
         </section>
     );
   }
 }
 
 export default PlayerBar;