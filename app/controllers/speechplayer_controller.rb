class SpeechplayerController < ApplicationController

def speechplayer
 @SpeechContextArray=Speech.find(1).subtitle_context_array.split(",")
 @SpeechTimeArray=Speech.find(1).subtitle_time_array.split(",")
end

end
