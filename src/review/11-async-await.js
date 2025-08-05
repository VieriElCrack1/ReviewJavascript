
// const getImagePromise = () => new Promise( resolve => resolve('https://github.com'));

// getImagePromise().then( console.log );

const getImage = async () => {
    try {
        const apiKey = 'd45Gotd7Esfwk5kPI53yZZpQ9wHh8Z8j';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const { data } = await response.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        console.error(error);
    }
}

getImage();
