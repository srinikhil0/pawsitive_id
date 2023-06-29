const actualBtn = document.getElementById('upload__btn');

const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})




// function showPreview(event){
//   if(event.target.files.length > 0){
//     var src = URL.createObjectURL(event.target.files[0]);
//     var preview = document.getElementById("file-ip-1-preview");
//     preview.src = src;
//     preview.style.display = "block";
//   }
// }


function showPreview(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var imageSrc = e.target.result;

        // Create a new image element
        var newImage = document.createElement("img");
        newImage.src = imageSrc;

        // Replace the first image with the new image
        var uploadPreview = document.querySelector(".upload__preview");
        var oldImage = uploadPreview.querySelector(".upload__img__bg");
        uploadPreview.replaceChild(newImage, oldImage);
    };

    reader.readAsDataURL(file);
}



// Search breed
function searchCards() {
  // Get the search query from the input field
  var query = document.getElementById('searchInput').value.toLowerCase();

  // Get all the cards
  var cards = document.getElementsByClassName('blog__dog');

  // Loop through each card and check if it matches the search query
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var title = card.getElementsByClassName('dog__name')[0].innerText.toLowerCase();
    var description = card.getElementsByClassName('dog__description')[0].innerText.toLowerCase();

    if (title.includes(query) || description.includes(query)) {
      // Show the card if it matches the search query
      card.style.display = 'block';
    } else {
      // Hide the card if it doesn't match the search query
      card.style.display = 'none';
    }
  }
}

// Get the search input element
var searchInput = document.getElementById('searchInput');

// Add an input event listener to the search input
searchInput.addEventListener('input', searchCards);
