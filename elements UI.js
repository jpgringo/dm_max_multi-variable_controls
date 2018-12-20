/*
Speaker icons for Surround Panning
Nico Starke @ Ableton / Robert Henke
Jan. 24 2018
*/

autowatch = 1;

outlets = 1;

// mgraphics initialization
mgraphics.init();					// initialize mgraphics
mgraphics.relative_coords = 0;		// coordinate system: x, y, width height
mgraphics.autofill = 0;				// we want to fill the paths ourself

// global variables
var width = this.box.getattr("presentation_rect")[2];
var height = this.box.getattr("presentation_rect")[3];

var elementList = [0, 1, 90, 1];
var elementNames = ['earth', 'fire', 'water', 'air', 'ether'];

// colors
var speakertextcolor = [0, 0, 0, 0.9];
var speakercolor = [[0.99, 0.86, 0.02, 1.], // 0 = L
					[1., 0.57, 0.02, 1.], 	// 1 = R
					[1., 0.71, 0.2, 1.]];	// 2 = Center (unused)


function list(input) {
 post("the list contains",arguments.length, "elements\n");
}

// main paint function
function paint()
{
	with (mgraphics) {
		const startAngle = 90;
		const displacementAngle = 360 / elementNames.length;
		post('displacementAngle', displacementAngle, '\n');
		for(var i=0; i < elementNames.length; i++) {
			const elementAngle = startAngle - displacementAngle * i;
			post(elementNames[i], ': ', elementAngle, 'degrees\n');
			identity_matrix();
			translate(worldtoscreen(0, 0));
			// rotate(degtorad(angle));
			set_source_rgba(speakercolor[1]);
			const circleRadius = 12;
			const y = -(circleRadius + circleRadius * 2 * i);
			ellipse(-circleRadius, y, circleRadius * 2, circleRadius * 2);
			fill();
		}
		var numElements = elementList.length / 4;
		post('numElements', numElements, '\n');
	    for (var i = 1; i <= numElements; i++){

		    var x = elementList[(i-1)*4];
		    var y = - elementList[(i-1)*4+1];
		    var angle = 270 -elementList[(i-1)*4+2];
		    var textoffset = 0;

		    identity_matrix();
		    translate(worldtoscreen(x, y));
		    rotate(degtorad(angle));

		    // draw the speaker
		    set_source_rgba(speakercolor[elementList[(i-1)*4+3]]);
		    rectangle(-10, -2, 20, 8);
		    fill();

		    // move_to(-5, -1);
		    // line_to(-9, -5);
		    // line_to(9, -5);
		    // line_to(5, -1);
		    // close_path();
		    // fill();

		    // rotate number in case speakers are facing upside down
		    if (angle > 90 && angle < 270){
			    rotate(3.14);
			    textoffset = 3;
		    }

		    else {
			    rotate(0);
			    textoffset = 4;
		    }

		    // draw the number
		    set_source_rgba(speakertextcolor);
		    select_font_face("Ableton Sans Book");
		    set_font_size(9.5);
		    move_to(-8, textoffset);
//		    text_path(i.toString());
				text_path('quux');
		    fill();
	    }

	}
}

function drawElements(a) {
    post("the list contains",arguments.length, "elements");
    mgraphics.redraw();
}

function forcesize(w,h)
{
	if (w!=h) {
		h = w;
		box.size(w,h);
	}
}
forcesize.local = 1; //private


function onresize(w,h)
{
	forcesize(w,h);
	var width = this.box.getattr("presentation_rect")[2];
	var height = this.box.getattr("presentation_rect")[3];
	refresh();
}
onresize.local = 1; //private


// convert degrees to radians
function degtorad(deg){
	return deg*6.283185307179586/360.;
}
degtorad.local = 1; //private


// scale numbers to real pixels for speaker placement
function worldtoscreen(x, y){
	var pixelValue = [0, 0];

	pixelValue[0] = ((x*0.92 + 1) * width) / 2;
	pixelValue[1] = ((y*0.92 + 1) * height) / 2;

	return pixelValue;
}
worldtoscreen.local = 1; //private
