// --------------------------------------------------------------------
// InreadVideo Class Constructor
// --------------------------------------------------------------------
function SpeechPlayer(wrapper){
  this.stat = {};
  this.stat.current_time = 0;
  this.stat.current_sentence=0;

  this.opt = {};
  this.opt.src =  wrapper.getAttribute("host_url");

  this.$ = {};
  this.$.wrapper = wrapper;
  this.$.audio = undefined;

  this.createSpeechPlayer();
}


// --------------------------------------------------------------------
// Create Video
// --------------------------------------------------------------------
SpeechPlayer.prototype.createSpeechPlayer = function(){
  console.log("createVideo");
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
  console.log("onTimeUpdate");
  var self = this;
  console.log(self.$.audio.currentTime);
  console.log(self.stat.current_sentence);
  var current_span_id;

  if( self.$.audio === undefined ){ return; }

  document.getElementById("audio_time").textContent=self.$.audio.currentTime;
  document.getElementById("sentence_id").textContent=self.stat.current_sentence;

  var current_span_id = "sentence_" + String(self.stat.current_sentence);

  if( speech_time_array[self.stat.current_sentence] < self.$.audio.currentTime && self.$.audio.currentTime < speech_time_array[self.stat.current_sentence+1]){
      document.getElementById(current_span_id).style.color = "red";
  }else{
      console.log("do not match");
      document.getElementById(current_span_id).style.color = "black";
      var n=0;
      while(speech_time_array[n] < self.$.audio.currentTime){
        console.log("loop");
        console.log(n);
        console.log(speech_time_array[n]);
        n+=1;
        console.log(n);
      }
      if(self.$.audio.currentTime != 0){
        self.stat.current_sentence = n-1;
        current_span_id = "sentence_" + String(self.stat.current_sentence);
        document.getElementById(current_span_id).style.color = "red";
      }
  }
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

