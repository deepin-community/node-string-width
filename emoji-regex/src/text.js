module.exports = () => {
	// https://mths.be/emoji
	return /<% RGI_Emoji %>|\p{Emoji}\uFE0F?/gu;
};
