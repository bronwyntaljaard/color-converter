// Question 3:
// Write a function that converts HEX to RGB.
// Then Make that function auto-detect the formats
// so that if you enter HEX color format it returns RGB
// and if you enter RGB color format it returns HEX.

// Convert RGB value to HEX

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r,g,b) {
    // let (r, g, b) = document.getElementById("inputRGBColorValue").value;
  var result2 = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  return result2;
}

function finalFunctionRgbToHex() {
    var redValue = document.getElementById("inputRedColorValue").value;
    var greenValue = document.getElementById("inputGreenColorValue").value;
    var blueValue = document.getElementById("inputBlueColorValue").value;
    console.log(typeof redValue);
    var hexValue = rgbToHex(parseInt(redValue), parseInt(greenValue), parseInt(blueValue));
    // console.log(hexValue);
    document.getElementById('convertedRGBValue').innerHTML=("The HEX value is " + hexValue);
}

// Convert HEX to RGB

function hexToRgb() {
    let hexColorCode = document.getElementById("inputHEXColorValue").value;
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColorCode);
  var res = result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
  var res2 = `(${res["r"]}, ${res["g"]}, ${res["b"]})`
  document.getElementById('convertedHEXValue').innerHTML=("The RGB value is " + res2);
}

// Auto-detect if format is HEX or RGB

function whichColorValue(colorValue) {
if (colorValue.length == 7 && colorValue.startsWith("#")) {
    return hexToRgb(colorValue);
}
else if (colorValue.split(",").length == 3) {
var rgbList = colorValue.split(",");
    return rgbToHex(parseInt(rgbList[0]), parseInt(rgbList[1]), parseInt(rgbList[2]));
}
else {
    return colorValue + " is not a valid color value";
}
}

// Event listeners

submitHEXColorValue.addEventListener("click", hexToRgb);
submitRGBColorValue.addEventListener("click", finalFunctionRgbToHex);