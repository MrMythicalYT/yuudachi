import process from 'node:process';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';

import {
	// Moderation
	AntiRaidNukeCommand,
	CaseLookupCommand,
	BanCommand,
	DurationCommand,
	HistoryCommand,
	KickCommand,
	LockdownCommand,
	ReasonCommand,
	ReferenceCommand,
	RestrictCommand,
	SoftbanCommand,
	UnbanCommand,
	WarnCommand,
	TimeoutCommand,

	// Utility
	PingCommand,
	CheckScamCommand,
	RefreshScamlistCommand,

	// Context Menu
	HistoryContextMenuCommand,
	SponsorCommand,
	SponsorContextMenuCommand,
} from './interactions/index.js';

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);

try {
	console.log('Start refreshing interaction (/) commands.');

	await rest.put(Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID!, process.env.DISCORD_GUILD_ID!), {
		body: [
			// Moderation
			AntiRaidNukeCommand,
			BanCommand,
			CaseLookupCommand,
			DurationCommand,
			HistoryCommand,
			KickCommand,
			ReasonCommand,
			ReferenceCommand,
			RestrictCommand,
			SoftbanCommand,
			UnbanCommand,
			WarnCommand,
			LockdownCommand,
			TimeoutCommand,

			// Utility
			PingCommand,
			CheckScamCommand,
			RefreshScamlistCommand,
			SponsorCommand,

			// Context Menu
			HistoryContextMenuCommand,
			SponsorContextMenuCommand,
		],
	});
	console.log('Successfully reloaded interaction (/) commands.');
} catch (e) {
	console.error(e);
}