autowatch = 1
outlets = 2;
var totalSliderCount = 10;

setoutletassist (0, 'all value messages\nsend these directly to the live.slider objects');
setoutletassist (1, 'all attribute-related messages\nsend these to the attrUI objects connected to each live.slider');

function setSliderCount(activeSliderCount) {
  setPropertiesForAllSliders(totalSliderCount, activeSliderCount);
}

function setSliderRanges(newMax, newMin) {
  for(var i=0; i < totalSliderCount; i++) {
    outlet(0, [i, '_parameter_range', newMax, newMin]);
  }
}

function setPropertiesForAllSliders(numberOfSliders, activeSliderCount) {
  for(var i = 0; i < numberOfSliders; i++) {
    setSliderColors(i, activeSliderCount > i);
  }
}

function setSliderColors(sliderIndex, enabled) {
  // post('setSliderColors:' + sliderIndex + '=' + enabled + '\n')
  var opacity = enabled ? 1.0 : 0.25;
  // attr textcolor, 0 0 0 1.,
  // attr slidercolor, 0 0 0 1.,
  // attr tribordercolor, 0.314 0.314 0.314 1, attr trioncolor, 0 0 0 1, attr tricolor, 0.65 0.65 0.65 1
  var propertyValues = [
    ['textcolor', [1, 1, 1]],
    ['slidercolor', [0, 1, 0]],
    ['tribordercolor', [0.65, 0.65, 0.65]],
    ['tricolor', [.314, .314, .314]],
    ['trioncolor', [1, 1, 1]],
  ];
  for(var i=0; i < propertyValues.length; i++) {
    // post('prop name: ' + propertyValues[i][0] + '\n');
    outlet(1, [sliderIndex, 'attr', propertyValues[i][0]]);
    outlet(1, [sliderIndex, propertyValues[i][1][0], propertyValues[i][1][1], propertyValues[i][1][2], opacity])
  };
}
