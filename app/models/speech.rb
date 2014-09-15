class Speech < ActiveRecord::Base
 serialize :subtitle_context_array
 serialize :subtitle_time_array
end
