
// --------------------------------------------------------------------
// InreadVideo Class Constructor
// --------------------------------------------------------------------
function SpeechPlayer(wrapper){
  this.stat = {};
  this.stat.current_time = 0;
  this.opt.src =  wrapper.getAttribute("hosr_url");
  this.createSpeechPlayer();

}


// --------------------------------------------------------------------
// Create Video
// --------------------------------------------------------------------
SpeechPlayer.prototype.createSpeechPlayer = function(){
  this.log("createVideo");
  var self = this;
  var audio = document.createElement("audio");
  var source = document.createElement("source");

  audio.addEventListener("timeupdate", function(e){ self.onTimeUpdate() }, false);
  audio.setAttribute("controls","controls");
  source.setAttribute("type", "audio/mp3");
  source.setAttribute("src", self.opt.src);
  audio.appendChild(source);
  self.$.wrapper.appendChild(audio);
  self.$.audio = audio;
}
  
// --------------------------------------------------------------------
// On Change Video Current Time
// --------------------------------------------------------------------
SpeechPlayer.prototype.onTimeUpdate = function(){
  this.log("onTimeUpdate");
  var self = this;
  if( self.$.audio === undefined ){ return; }

 document.getElementById("audio_time").textContent=1;
} 


// --------------------------------------------------------------------
// Create Instances
// --------------------------------------------------------------------
window.onload = function(){
  if( !!document.createElement('audio').canPlayType === false){
    return;
  }
  var object = document.getElementById("audio_player");
  var player = new SpeechPlayer(object);

}
