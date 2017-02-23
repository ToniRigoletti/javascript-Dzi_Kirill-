function getTime(n) {
	let h,m,s;
	h = n/3600;	
	m = (h - Math.floor(h))*60;
	s = (m - Math.floor(m))*60;
	if (h < 10) {h="0"+Math.floor(h);}
	else h = Math.floor(h);
	if (m < 10) {m="0"+Math.floor(m);}
	else m = Math.floor(m);
	if(s < 10){s = "0"+Math.floor(s);}
	else s = Math.floor(s);
	
	return h+":"+m+":"+s;
}
console.log(getTime(40315));

function assert(expression, message) {
	if(expression) { 
		console.log("+", message);
	}
	else {
		console.error("-", message);
	}
}

function runTask3() {
	assert(getTime(20423) == "05:40:23", "Case '20423'");
	assert(getTime( 5320) == "01:28:40", "Case '5320'");
	assert(getTime(23630) == "06:33:50", "Case '23630'");
	assert(getTime(20381) == "05:39:41", "Case '20381'");
	assert(getTime(42718) == "11:51:58", "Case '42718'");
	assert(getTime(30002) == "08:20:02", "Case '30002'");
	assert(getTime( 3010) == "00:50:10", "Case '3010'");
	assert(getTime(20437) == "05:40:37", "Case '20437'");
	assert(getTime(40315) == "11:11:55", "Case '40315'"); // 	погрешность округления  вместо 55 у меня 54 (( 
	assert(getTime(18392) == "05:06:32", "Case '18392'");
	console.log("Done!");
}

runTask3();
