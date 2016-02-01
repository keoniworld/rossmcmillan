const generateParticlesData = (imgMap, resolution, cw, ch, scaleMul) => {
	const particlesData = Array.from(Array(Math.floor(imgMap.pixelAmount / resolution)))
		.reduce((newArray, item, i) => {
			const ii            = i * resolution;
			const maxBrightness = 255 * 3;
			let x               = ii%imgMap.width;
			let y               = Math.floor(ii/imgMap.width);
			let r               = ((maxBrightness - imgMap.getBrightnessData(x,y)) / maxBrightness) * .75;

			if(!r || y % resolution != 0) return newArray;

			// Scale radius
			r *= (imgMap.width / resolution) * scaleMul;  

			// Scale image
			x *= imgMap.scale;
			y *= imgMap.scale;

			// Center image
			x += ((cw / 2) - ((imgMap.width * imgMap.scale) / 2));
			y += ((ch / 2) - ((imgMap.height * imgMap.scale) / 2));

			newArray.push([x,y,r])
			return newArray;
		}, []);

	return particlesData;
}

export { generateParticlesData }