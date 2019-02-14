
import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);
    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration, 
      isHovered: false,
      
    };
    this.audioElement = document.createElement('audio')
    this.audioElement.src = album.songs[0].audioSrc;
  }
  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }
  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  } 
  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      }
    };
    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
  }
  componentWillUnmount() {
      this.audioElement.src = null;
      this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
      this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
  }  
  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }
  handleSongClick(song) {
    const isSameSong = this.state.currentSong === sessionStorage;
    if (this.state.isPlaying) {
      this.pause(song);
    } else {
      if (!isSameSong) { this.setSong(song); } 
      this.play();
    }
  }
  handlePrevClick() {
  const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.max(0, currentIndex - 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
  }
  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.min(this.state.album.songs.length, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }
  handleTimeChange(e) {
    if (!this.state.isPlaying) {
      return
    }
    const newTime = this.audioElement.duration * e.target.value;
    console.log(this.audioElement.duration)
    console.log(e.target.value);
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }
  render() {
    return (
      <section className="album">
       <section id="album-info">
       <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
           <div className="album-details">
           <h1 id="album-title">{this.state.album.title}</h1>
             <h2 className="artist">{this.state.album.artist}</h2>
             <div id="release-info">{this.state.album.releaseInfo}</div>
           </div>
         </section>
         <table id="song-list">
           <colgroup>
             <col id="song-number-column" />
             <col id="song-title-column" />
             <col id="song-duration-column" />
           </colgroup>  
           <thead>
             <td>Number</td>
             <td>Song</td>
             <td>Duration</td>
           </thead>
           <tbody>
            {this.state.album.songs.map ((song, index) => 
             <tr className="song" key={index} onClick={() => this.handleSongClick(song)} 
              onMouseEnter={() => this.setState({ isHovered: index + 1 })}
                onMouseLeave={() => this.setState({ isHovered: false })}>
                <td className="song-actions"></td>
               <td>{song.title}</td>
               <td>{song.duration}</td>
             <td className= "song-actions">
             <button id="song-action-btns">
                      { (this.state.currentSong.title === song.title) ?
                        <span className={this.state.isPlaying ? "ion-pause" : "ion-play"}></span>
                        :
                        (this.state.isHovered === index+1) ?
                        <span className="ion-play"></span>
                        :
                        <span className="song-number">{index+1}</span>
                      }
                      </button>
                    </td>
                    <td className="song-title">{song.title}</td>
                  </tr>
                )}
                </tbody>
            </table>
      </section>
    );
  }
}
export default Album