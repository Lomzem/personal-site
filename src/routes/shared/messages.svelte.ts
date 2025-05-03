export interface Message {
	author: 'You' | 'Bot';
	msg: string;
	delay?: number;
}

export const msgs: Message[] = [
	{
		author: 'You',
		msg: 'Hello'
	},
	{
		author: 'Bot',
		msg: 'Got it',
		delay: 800
	},
	{
		author: 'Bot',
		msg: "Here's your calendar",
		delay: 1600
	},
	{
		author: 'You',
		msg: 'Thanks!'
	}
];
