const { Client } = require('podcast-api');
const totalEpisodesToFetch = 20;

const getSounds = async () => {
	const client = Client({ apiKey: '9f0968d155c142648b979852e4a7f741' });
	const allEpisodes = [];

	let nextEpisodePubDate = 0;
	let episodesFetched = 0;

	while (episodesFetched < totalEpisodesToFetch) {
		const response = await client.fetchPodcastById({
			id: '407f99bd98764c48a8ce81fd9ce9a72f',
			next_episode_pub_date: nextEpisodePubDate,
			sort: 'recent_first',
		});

		const episodes = response.data.episodes;

		if (episodes.length === 0) {
			break;
		}

		allEpisodes.push(...episodes);
		episodesFetched += episodes.length;
		nextEpisodePubDate = episodes[episodes.length - 1].next_episode_pub_date;
	}

	return allEpisodes.slice(0, totalEpisodesToFetch).map((item) => ({
		id: item.id,
		title: item.title,
		audio: item.audio,
	}));
};

module.exports = getSounds;
