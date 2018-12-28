autowatch = 1
outlets = 2;
var totalSliderCount = 10;
var activeSliders = 10;
var persistedValues = {
  minimumValue: 0, // default, should be reset by patcher on load
  maximumValue: 100, // default, should be reset by patcher on load
  sliderValues: []};
  for(var i=0; i < 10; i++) {
    persistedValues.sliderValues[i] = 0;
  }
var valuePrecision = 4;

setoutletassist (0, 'all value messages\nsend these directly to the live.slider objects');
setoutletassist (1, 'all attribute-related messages\nsend these to the attrUI objects connected to each live.slider');

function dump() {
  post('dump', 'persistedValues: \n');
  for(var p in persistedValues) {
    post('\t' + p + ' = ' + (typeof persistedValues[p] === 'Array' ? persistedValues[p].join(',') : persistedValues[p]) + '\n');
  }
}

function setSliderCount(activeSliderCount) {
  activeSliders = activeSliderCount;
  setPropertiesForAllSliders(totalSliderCount, activeSliderCount);
}

function setSliderRanges(newMax, newMin) {
  persistedValues.minimumValue = newMin;
  persistedValues.maximumValue = newMax;
  post('state', 'setting new range: ' + persistedValues.minimumValue + ', ' + persistedValues.maximumValue, '\n');
  for(var i=0; i < totalSliderCount; i++) {
    outlet(0, [i, '_parameter_range', newMax, newMin]);
  }
}

function setPropertiesForAllSliders(numberOfSliders, activeSliderCount) {
  for(var i = 0; i < numberOfSliders; i++) {
    setSliderColors(i, activeSliderCount > i);
    outlet(1, [i, 'attr', 'ignoreclick']);
    outlet(1, [i, activeSliderCount > i ? 0 : 1]);
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

function distributeSliderValueChange(changedIndex, newValue) {
  persistedValues.sliderValues[changedIndex] = newValue;
}

function sliderValueChanged(sliderIndex, newValue) {
  post('slider ' + sliderIndex + ' changed to ' + newValue + '\n');
  const roundedValue = roundSliderValue(newValue);
  if(roundedValue !== persistedValues.sliderValues[sliderIndex]) {
  //   post('will record slider ' + sliderIndex + ' value as ' + roundedValue + '\n');
    var oldValue = persistedValues.sliderValues[sliderIndex];
    distributeSliderValueChange(sliderIndex, roundedValue);
    resendSliderValues();
  }
}

function setSliderValue(sliderIndex, newValue) {
  persistedValues.sliderValues[sliderIndex] = newValue;
  outlet(0, [sliderIndex, 'set', persistedValues.minimumValue + newValue * persistedValues.maximumValue]);
}

function resendSliderValues() {
  for(var i = 0; i < persistedValues.sliderValues.length; i++) {
    post(i + '\n');
    outlet(0, [i, 'set', persistedValues.minimumValue + persistedValues.sliderValues[i] * persistedValues.maximumValue]);
  }
}

function roundSliderValue(value) {
  const roundingFactor = Math.pow(10, valuePrecision);
  return Math.round(value * roundingFactor) / roundingFactor;
}
