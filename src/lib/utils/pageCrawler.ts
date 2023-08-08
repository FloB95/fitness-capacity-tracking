import { JSDOM } from 'jsdom';

export const getCurrentUsers = async (): Promise<number | undefined> => {
	const pageHTML = await fetch(
		'https://xsports.memberarea.club/CheckinCounter/GetClubsCheckinCounterPage'
	).then((res) => res.text());

	const dom = new JSDOM(pageHTML);
	const document = dom.window.document;
	const data = document.querySelector(
		'#b7c4c9d4-1bb6-4dd2-9a94-cb37a61adc0c > div.card-block > div:nth-child(1) > div > label:nth-child(2)'
	);

	return data?.innerHTML && data?.innerHTML.replaceAll(' ', '')
		? Number(data.innerHTML.trim())
		: undefined;
};
