require('dotenv').config();
const { Client } = require('podcast-api');
const { Sound } = require('../db');
const { get } = require('mongoose');
const { API_KEY_DAVE, API_KEY_SAMZA } = process.env;
const totalEpisodesToFetch = 80;

const getSoundsAPI = async () => {
	const client = Client({ apiKey: API_KEY_DAVE });
	let allEpisodes = [];
	let nextEpisodePubDate = null; // Initialize to null for the first fetch

	while (allEpisodes.length < totalEpisodesToFetch) {
		try {
			const response = await client.fetchPodcastById({
				id: '407f99bd98764c48a8ce81fd9ce9a72f',
				next_episode_pub_date: nextEpisodePubDate,
				sort: 'recent_first',
			});

			const episodes = response.data.episodes;

			if (episodes.length === 0) {
				break; // No more episodes available
			}

			const episodesToFetch = Math.min(
				totalEpisodesToFetch - allEpisodes.length,
				episodes.length
			);
			const fetchedEpisodes = episodes
				.slice(0, episodesToFetch)
				.map((item) => ({
					published_at: item.pub_date_ms,
					title: item.title,
					audio: item.audio,
				}));

			allEpisodes = [...allEpisodes, ...fetchedEpisodes];

			nextEpisodePubDate = fetchedEpisodes[episodesToFetch - 1].published_at;

			// Agregar un intervalo de 1 segundo entre las solicitudes
			await new Promise((resolve) => setTimeout(resolve, 1000));
		} catch (error) {
			console.error('Error:', error);
			// Manejo de errores aquí
		}
	}

	return allEpisodes;
};

const soundsDB = async () => {
	const count = await Sound.countDocuments();

	if (count > 0) {
		// Hay documentos en la base de datos, entonces obtén los sonidos de la DB
		const existingSounds = await Sound.find();
		return existingSounds;
	} else {
		const soundsToInsert = await getSoundsAPI(); // datos API

		const sounds = await Sound.insertMany(soundsToInsert); // Insertar datos en la DB
		return sounds;
	}
};

// module.exports = getSoundsAPI;
module.exports = soundsDB;
