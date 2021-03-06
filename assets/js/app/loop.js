const Loop = () => {
	let lastTime = 0;
	let stopped = false;
	let callback;

	const start = function(fn) {
		stopped = false;
		if(typeof fn !== "undefined") callback = fn;
		
		requestAnimationFrame(_frame);
	}

	const stop = function() {
		stopped = true;
	}

	const _frame = function(time) {
		callback(time);
		if (!stopped) requestAnimationFrame(_frame);
	};

	return {
		start,
		stop
	}
}

export default Loop;