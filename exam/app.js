const baseURL = 'https://www.omdbapi.com/';
const API = 'apikey=25b8f844';
const container = document.querySelector('.container');
const detailsWindow = document.querySelector('.details');
const detailsH3 = document.querySelector('.detailsH3');

form.addEventListener('submit', (e) =>
{
    const form = document.forms.form;
    const searchInput = form.elements.search.value;
    const selector = form.elements.selector.value;

    e.preventDefault();
    fetch(`${baseURL}?s=${encodeURIComponent(searchInput)}&type=${selector}&${API}`)
        .then(response => response.json())
        .then(data =>
        {
            console.log(data);
            if (!data.Search)
            {
                detailsWindow.innerHTML = '';
                detailsWindow.style.display = 'none';
                detailsH3.hidden = true;
                container.innerHTML = '<p>Movie not found!</p>';
                return;
            }

            container.innerHTML = '';
            detailsH3.hidden = true;

            for (const film of data.Search)
            {
                const filmCardDiv = document.createElement('div');
                const posterDiv = document.createElement('div');

                const poster = document.createElement('img');
                poster.style.cssText =
                `
                    height: 300px;
                    width: 200px;
                    object-fit: cover;
                    border-radius: 8px;
                    margin-bottom: 10px;
                    filter: brightness(1.1) contrast(1.1);
                `;

                poster.addEventListener('load', () =>
                {
                    const filmCard = document.createElement('div');
                    filmCard.classList.add('card');
                    filmCard.innerHTML =
                    `
                        <p>${selector}</p>
                        <h3 class="title">${film.Title}</h3>
                        <p>${film.Year}</p>
                        <button class="detailsBtn">Details</button>
                    `;

                    const detailsBtn = filmCard.querySelector('.detailsBtn');
                    detailsBtn.addEventListener('click', () =>
                    {
                        detailsWindow.innerHTML = '';
                        detailsH3.hidden = false;
                        detailsWindow.style.display = 'flex';

                        const imgDiv = document.createElement('div');
                        const img = document.createElement('img');
                        img.src = poster.src;
                        img.style.cssText =
                        `
                            height: 300px;
                            width: 200px;
                            object-fit: cover;
                            border-radius: 10px;
                            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                        `;
                        imgDiv.append(img);
                        detailsWindow.append(imgDiv);

                        fetch(`https://www.omdbapi.com/?i=${film.imdbID}&apikey=25b8f844`)
                            .then(response => response.json())
                            .then(data =>
                            {
                                const info = document.createElement('div');
                                const spaces = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;

                                info.innerHTML =
                                `
                                    <p>Title:${spaces}${data.Title}</p>
                                    <p>Released:${spaces}${data.Released}</p>
                                    <p>Genre:${spaces}${data.Genre}</p>
                                    <p>Country:${spaces}${data.Country}</p>
                                    <p>Director:${spaces}${data.Director}</p>
                                    <p>Writer:${spaces}${data.Writer}</p>
                                    <p>Actors:${spaces}${data.Actors}</p>
                                    <p>Awards:${spaces}${data.Awards}</p>
                                `;

                                detailsWindow.append(info);
                            })
                    });

                    posterDiv.append(poster);
                    filmCardDiv.append(posterDiv);
                    filmCardDiv.append(filmCard);
                    container.append(filmCardDiv);
                });

                if (film.Poster !== 'N/A')
                {
                    poster.src = film.Poster;
                }
            }
        })
});