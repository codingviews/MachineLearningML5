let mobilenet;
let puffin;

function modelReady() {
	console.log('Model is ready!!!');
	mobilenet.predict(puffin, gotResults);
}

function gotResults(error, results) {
	if (error) {
		console.error(error);
	} else {
		console.log(results);
		let label = results[0].label;
		let prob = results[0].confidence;
		fill(0);
		textSize(32);
		text(label, 10, height - 200);
		createP(label);
		createP(prob);
	}
}

function imageReady() {
	image(puffin, 0, 0, width, height);
}

function setup() {
	createCanvas(640, 480);
	puffin = createImg('images/puffin.jpg', 'Puffin', imageReady);
	puffin.hide();

	background(0);

	mobilenet = ml5.imageClassifier('MobileNet', modelReady);

	console.log('ml5 version:', ml5.version);
}