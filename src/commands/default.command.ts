/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { CommandRunner, RootCommand } from 'nest-commander'

@RootCommand({
  name: 'houseplant',
  description: 'a set of tools for managing your typescript projects and repositories',
})
export class DefaultCommand extends CommandRunner {
  async run(): Promise<void> {
    this.command.help()
  }
}
