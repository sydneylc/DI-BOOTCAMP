class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}


const video1 = new Video( 'Syrian White Helmets Documentary', 'SydneyLCC', 300);
video1.watch();


const video2 = new Video('Putins Messed Up Childhood', 'HisMother', 600);
video2.watch();




//BONUS 
const videoData = [
  { title: 'Syrian White Helmets Documentary', uploader: 'SydneyLCC', time: 300 },
  { title: 'Putins Messed Up Childhood', uploader: 'HisMother', time: 600 },

];


const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));


videos.forEach(video => video.watch());