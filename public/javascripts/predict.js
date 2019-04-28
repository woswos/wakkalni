
// import clarifai_app from "./../../clarifai_app.js"
const CLARIFAI = require('clarifai')

var myClarifaiApiKey = 'b3b671eb256c4f8488fd91e038c87f73';

var myClarifaiApiKey = 'b3b671eb256c4f8488fd91e038c87f73';

var clarifai_app = new CLARIFAI.App({apiKey: myClarifaiApiKey});
/*
  Purpose: Pass information to other helper functions after a user clicks 'Predict'
  Args:
    value - Actual filename or URL
    source - 'url' or 'file'
    */
function predict_click(value, source) {
  console.log("in predict_Click")
  var preview = $(".food-photo");
  var file    = document.querySelector("input[type=file]").files[0];
  var loader  = "https://s3.amazonaws.com/static.mlh.io/icons/loading.svg";
  var reader  = new FileReader();

  // load local file picture
  reader.addEventListener("load", function () {
    preview.attr('style', 'background-image: url("' + reader.result + '");');
    doPredict({ base64: reader.result.split("base64,")[1] });
  }, false);

  if (file) {
    reader.readAsDataURL(file);
    $('#concepts').html('<img src="' + loader + '" class="loading" />');
  } else { alert("No file selcted!"); }
}

/*
  Purpose: Does a v2 prediction based on user input
  Args:
    value - Either {url : urlValue} or { base64 : base64Value }
*/
function doPredict(value) {
  clarifai_app.models.predict(FOOD_MODEL, value).then(function(response) {
      if(response.rawData.outputs[0].data.hasOwnProperty("concepts")) {
        var tag = response.rawData.outputs[0].data.concepts[0].name;
        $('#concepts').html('<h3>'+ tag + '</h3>');
        // var url = 'http://api.wolframalpha.com/v2/query?input='+tag+'%20nutrition%20facts&clarifai_appid='+myWolframclarifai_appId;

        // getNutritionalInfo(url, function (result) {
        //   $('#concepts').html('<h3>'+ tag + '</h3>' + "<img src='"+result+"'>");
        // });
      }
    }, function(err) { console.log(err); }
  );
}