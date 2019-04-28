
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
  javascriptBarcodeReader(img, {
    barcode: type,
    // type: subType,
  }).then(code => {
    console.log(`Code : ${code}`)
    // alert(`Code : ${code}`) // eslint-disable-line
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
    }
    
  })
}




