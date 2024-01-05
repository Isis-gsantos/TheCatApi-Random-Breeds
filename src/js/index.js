const btnRandomBreed = document.querySelector('.btn-random-breed')
const meow = new Audio('src/cat-meow/cat-call-meow.mp3')

async function getACatBreed() {
    const response = await fetch('https://api.thecatapi.com/v1/breeds')
    const result = await response.json()
    return result
  }
  
  async function main() {
    meow.play()

    const catBreed = await getACatBreed()
    const position = Math.floor(Math.random() * (catBreed.length + 1));
  
    // console.log(catBreed[position])
    const randomBreed = catBreed[position];

    const imagesUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${randomBreed.id}`;
    const imagesResponse = await fetch(imagesUrl);
    const imagesData = await imagesResponse.json();

    if (imagesData.length > 0) {
        const imageUrl = imagesData[0].url;
        console.log('Imagem:', imageUrl);
        document.querySelector('.breed-image').src = imageUrl
    } else {
        alert("There's not an available photo for this breed.");
    }

    document.querySelector('.breed-name').innerHTML = `<span class="bold-text">Name: </span> ${catBreed[position].name}`

    document.querySelector('.origin').innerHTML = `<span class="bold-text">Origin: </span> ${catBreed[position].origin}`

    document.querySelector('.description').innerHTML = `<span class="bold-text">Description: </span> ${catBreed[position].description}`

    document.querySelector('.affection').innerHTML = `<span class="bold-text">Affection Level: </span> ${catBreed[position].affection_level}`

    document.querySelector('.temperament').innerHTML = `<span class="bold-text">Temperament: </span> ${catBreed[position].temperament}`

    document.querySelector('.intelligence').innerHTML = `<span class="bold-text">Intelligence: </span> ${catBreed[position].intelligence}`

    document.querySelector('.life').innerHTML = `<span class="bold-text">Life Span: </span> ${catBreed[position].life_span}`
  }
  
  main()

  btnRandomBreed.addEventListener('click', main)