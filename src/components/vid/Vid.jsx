import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
	<div className="video-responsive flex items-center justify-center mt-5 mb-20 bg-[black]">
		<iframe
			width="100%"
			height="400px"
			src="https://www.youtube.com/embed/cMfOmuPlSzc?autoplay=1&mute=1&start=120"
			title="YouTube video player"
			frameborder="0"
			allow="autoplay accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen></iframe>
	</div>
);

YoutubeEmbed.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
