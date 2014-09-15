class SpeechplayerController < ApplicationController

def speechplayer
 @SpeechContextArray=Speech.find(1).subtitle_context_array.split(",")
 @SpeechTimeArray=Speech.find(1).subtitle_time_array.split(",")
 @Audio_URL=Speech.find(1).host_url

end

end
