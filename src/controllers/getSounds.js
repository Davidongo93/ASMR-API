const { Client } = require('podcast-api');
const totalEpisodesToFetch = 20;

const getSounds = async () => {
	const client = Client({ apiKey: 'fb206d4cf50041218cd71e97e205143c' });
	// const client = Client({ apiKey: 'fb206d4cf50041218cd71e97e205143c' });
	let allEpisodes = [];
	let nextEpisodePubDate = null; // Initialize to null for the first fetch

	while (allEpisodes.length < totalEpisodesToFetch) {
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
		const fetchedEpisodes = episodes.slice(0, episodesToFetch).map((item) => ({
			id: item.id,
			published_at: item.pub_date_ms,
			title: item.title,
			audio: item.audio,
		}));

		allEpisodes = [...allEpisodes, ...fetchedEpisodes];

		// Update nextEpisodePubDate with the pub_date_ms of the last episode fetched
		nextEpisodePubDate = fetchedEpisodes[episodesToFetch - 1].published_at;
	}

	return allEpisodes;
};

module.exports = getSounds;
