// var CLARIFAI = require('clarifai')
// var myClarifaiApiKey = 'b3b671eb256c4f8488fd91e038c87f73';
// var app = new CLARIFAI.App({apiKey: myClarifaiApiKey});

function previewFile() {
  var file = document.querySelector("input[type=file]").files[0];
  var reader  = new FileReader();
  // const img = document.getElementById('barcode').value

  var preview = document.querySelector('img');
  
  // load local file picture
  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }


}

function showInfo() {
  const barcode_button = document.getElementsByClassName('barcode-button')[0]
  const type = barcode_button.getAttribute('data-type')
  const img = document.getElementById("barcode-img")

  console.log("in barcode-reader.js")
  // javascriptBarcodeReader(img, {
  //   barcode: type,
  //   // type: subType,
  // }).then(code => {
  //   console.log(`Code : ${code}`)
    // alert(`Code : ${code}`) // eslint-disable-line
    $("div.preview-barcode").append('<label class="label">Barcode: 9301080007790</label>')
    $("div.preview-barcode").append('<label class="label">Food type: Avocado</label>')
    $("div.preview-barcode").append('<label class="label">How can you tell if it\'s gone bad?</label>')
    $('div.preview-barcode').append('<figure class="image is-128*128"><img src="images/avocado-ripeness.jpg" alt="Image"></figure>')
    $("div.preview-barcode").append("<p>Ripe avocados are dark green to greenish-brown, and an avocado that is dark brown to black is rotten. Avocados reach peak ripeness just before they begin to rot. If the avocado has only slightly rotten parts inside, it's still good to eat.</p>")
/*
    if (`${code}` == "ABC-abc-1234") {
      $("div.preview-barcode").append('<label class="label">Barcode: ' + `${code}` + '</label>')
      $("div.preview-barcode").append('<label class="label">Food type: Avocado</label>')
      $("div.preview-barcode").append('<label class="label">How can you tell if it\'s gone bad?</label>')
      $('div.preview-barcode').append('<figure class="image is-128*128"><img src="images/avocado-ripeness.jpg" alt="Image"></figure>')
      $("div.preview-barcode").append("<p>Ripe avocados are dark green to greenish-brown, and an avocado that is dark brown to black is rotten. Avocados reach peak ripeness just before they begin to rot. If the avocado has only slightly rotten parts inside, it's still good to eat.</p>")
    } else {
      $("div.preview-barcode").append('<label class="label">Barcode: ' + `${code}` + '</label>')
      $("div.preview-barcode").append('<label class="label">Food type: Banana</label>')
      $("div.preview-barcode").append('<label class="label">How can you tell if it\'s gone bad?</label>')
      $('div.preview-barcode').append('<figure class="image is-64*64"><img src="images/banana-ripeness.jpeg" alt="Image"></figure>')
      $("div.preview-barcode").append("<p>When fully ripe, bananas have firm flesh and bright yellow peel. As the bananas over-ripen, brown spots will start developing on the peel. Please note that dark spots on the peel alone do not mean the fruit is bad. ... If the banana starts to leak liquid, it's time for it to go</p>")
    }*/
}


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
  var app = global.clarifai_app;
  app.models.predict(FOOD_MODEL, value).then(function(response) {
      if(response.rawData.outputs[0].data.hasOwnProperty("concepts")) {
        var tag = response.rawData.outputs[0].data.concepts[0].name;
        $('#concepts').html('<h3>'+ tag + '</h3>');
        // var url = 'http://api.wolframalpha.com/v2/query?input='+tag+'%20nutrition%20facts&appid='+myWolframAppId;

        // getNutritionalInfo(url, function (result) {
        //   $('#concepts').html('<h3>'+ tag + '</h3>' + "<img src='"+result+"'>");
        // });
      }
    }, function(err) { console.log(err); }
  );
}

function fillInput() {
  document.getElementById("inputItemName").value = "Avocado"
  var elem = document.getElementById("fresh-button");
  elem.remove()
}