import type { BaseCommandInteraction } from 'discord.js';
import type { Command } from '../../Command';
import { checkModRole } from '../../functions/permissions/checkModRole';
import type { HistoryCommand } from '../../interactions';
import type { ArgumentsOf } from '../../interactions/ArgumentsOf';
import { generateHistory } from '../../util/generateHistory';

export default class implements Command {
	public async execute(
		interaction: BaseCommandInteraction<'cached'>,
		args: ArgumentsOf<typeof HistoryCommand>,
		locale: string,
	): Promise<void> {
		await interaction.deferReply({ ephemeral: args.hide ?? true });
		await checkModRole(interaction, locale);

		const embed = await generateHistory(interaction, args.user, locale);

		await interaction.editReply({
			embeds: [embed],
		});
	}
}
