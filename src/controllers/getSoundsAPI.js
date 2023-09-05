require('dotenv').config();
const { Client } = require('podcast-api');
const { Sound } = require('../db');
const { API_KEY_DAVE, API_KEY_SAMZA } = process.env;
const totalEpisodesToFetch = 40;

// const getSoundsAPI = async () => {
// 	const client = Client({ apiKey: API_KEY_DAVE });
// 	let allEpisodes = [];
// 	let nextEpisodePubDate = null; // Initialize to null for the first fetch

// 	while (allEpisodes.length < totalEpisodesToFetch) {
// 		try {
// 			const response = await client.fetchPodcastById({
// 				id: '407f99bd98764c48a8ce81fd9ce9a72f',
// 				next_episode_pub_date: nextEpisodePubDate,
// 				sort: 'recent_first',
// 			});

// 			const episodes = response.data.episodes;

// 			if (episodes.length === 0) {
// 				break; // No more episodes available
// 			}

// 			const episodesToFetch = Math.min(
// 				totalEpisodesToFetch - allEpisodes.length,
// 				episodes.length
// 			);
// 			const fetchedEpisodes = episodes
// 				.slice(0, episodesToFetch)
// 				.map((item) => ({
// 					published_at: item.pub_date_ms,
// 					title: item.title,
// 					audio: item.audio,
// 				}));

// 			allEpisodes = [...allEpisodes, ...fetchedEpisodes];

// 			nextEpisodePubDate = fetchedEpisodes[episodesToFetch - 1].published_at;

// 			// Agregar un intervalo de 1 segundo entre las solicitudes
// 			await new Promise((resolve) => setTimeout(resolve, 1000));
// 		} catch (error) {
// 			console.error('Error:', error);
// 		}
// 	}

// 	return allEpisodes;
// };

const categoryToImageMap = {
	nature:
		'https://res.cloudinary.com/dnrahbx7u/image/upload/v1693933172/categories/nature/ofiwsw9nhipvbyibwjim.jpg',
	cityscape:
		'https://res.cloudinary.com/dnrahbx7u/image/upload/v1693933518/categories/cityscape/sot685ddh25x08f1om6b.jpg',
	rain: 'https://res.cloudinary.com/dnrahbx7u/image/upload/v1693933524/categories/rain/fso1ym2mkcmqqeewoh44.jpg',
	water:
		'https://res.cloudinary.com/dnrahbx7u/image/upload/v1693933558/categories/water/kg082d7pk4txy8jduens.jpg',
	storytelling:
		'https://res.cloudinary.com/dnrahbx7u/image/upload/v1693933529/categories/storytelling/ziaydkcvxz5neukjvxpg.jpg',
	binaural:
		'https://res.cloudinary.com/dnrahbx7u/image/upload/v1693933512/categories/binaural/blsudar49x6vsculxu8j.jpg',

	// Agrega más categorías y URLs según sea necesario
};

const soundsDB = async () => {
	// Actualiza la propiedad "image" en función de la categoría para cada sonido existente
	const existingSounds = await Sound.find();
	for (const sound of existingSounds) {
		const { category, _id } = sound;

		// Verifica si la categoría está en el mapa
		if (categoryToImageMap[category]) {
			// Obtiene la URL correspondiente de la categoría
			const imageUrl = categoryToImageMap[category];

			// Actualiza la propiedad "image" del sonido en la base de datos
			await Sound.findByIdAndUpdate(_id, { image: imageUrl });
		}
	}

	// Ahora, puedes realizar la consulta "find" para obtener los sonidos actualizados
	const updatedSounds = await Sound.find();
	return updatedSounds;
};

module.exports = soundsDB;
