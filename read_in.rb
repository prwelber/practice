File.open('./9235', "r") do |file_handle|
	file_handle.each_line do |server|
		server.split(" ")
		puts server.max
	end
end