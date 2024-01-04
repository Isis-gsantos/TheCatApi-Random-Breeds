const btnRandomBreed = document.querySelector('.btn-random-breed')

async function getACatBreed() {
    const response = await fetch('https://api.thecatapi.com/v1/breeds')
    const result = await response.json()
    return result
  }
  
  async function main() {
    const catBreed = await getACatBreed()
    //essa variável é responsável por retornar todos as raças do array disponibilizado pela ap
    const position = Math.floor(Math.random() * (catBreed.length + 1));
    //position é uma constante a qual está sendo criada um número randômico, ele vai ter o valor de 0 até o número máximo de elementos que contém no array, no caso do catBreed. Então toda vez que chamar a função, o valor de position será diferente, sendo do 0 até 67 que é o número máximo de raças que contém no array
  
    console.log(catBreed[position])
    const randomBreed = catBreed[position];


    // Obter as imagens para a raça escolhida
    const imagesUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${randomBreed.id}`;
    const imagesResponse = await fetch(imagesUrl);
    const imagesData = await imagesResponse.json();

    // Verificar se há imagens disponíveis para a raça
    if (imagesData.length > 0) {
        const imageUrl = imagesData[0].url;
        console.log('Imagem:', imageUrl);
        document.querySelector('.breed-image').src = imageUrl
    } else {
        alert('Nenhuma imagem disponível para esta raça.');
    }

    document.querySelector('.breed-name').innerHTML = catBreed[position].name

    document.querySelector('.origin').innerHTML = catBreed[position].origin

    document.querySelector('.description').innerHTML = catBreed[position].description

    document.querySelector('.affection').innerHTML = catBreed[position].affection_level

    document.querySelector('.temperament').innerHTML = catBreed[position].temperament

    document.querySelector('.energy-level').innerHTML = catBreed[position].energy_level

    document.querySelector('.inteligence').innerHTML = catBreed[position].intelligence

    document.querySelector('.life').innerHTML = catBreed[position].life_span
  }
  
  main()

  btnRandomBreed.addEventListener('click', main)