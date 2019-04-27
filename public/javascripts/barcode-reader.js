
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

const barcode_button = document.getElementsByClassName('barcode-button')[0]
const type = barcode_button.getAttribute('data-type')
const img = document.getElementById("barcode-img")

barcode_button.onclick = () => {
  console.log("in barcode-reader.js")
  javascriptBarcodeReader(img, {
    barcode: type,
    // type: subType,
  }).then(code => {
    console.log(`Code : ${code}`)
    // alert(`Code : ${code}`) // eslint-disable-line
    $("div.preview-barcode").append('<label class="label">Barcode: ' + `${code}` + '</label>')
  })

  
}


