import { getCurrentUsers } from '$lib/utils/pageCrawler';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const currentUsers = await getCurrentUsers();

	return {
		currentUsers,
		datasets: [
			{
				label: 'Montag',
				data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
				borderWidth: 3
			},
			{
				label: 'Dienstag',
				// random data array with 12 entries
				data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
				borderWidth: 3
			},
			{
				label: 'Mittwoch',
				data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
				borderWidth: 3
			},
			{
				label: 'Donnerstag',
				data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
				borderWidth: 3
			},
			{
				label: 'Freitag',
				data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
				borderWidth: 3
			},
			{
				label: 'Samstag',
				data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
				borderWidth: 3
			},
			{
				label: 'Sonntag',
				data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
				borderWidth: 3
			}
		]
	};
}) satisfies PageServerLoad;
