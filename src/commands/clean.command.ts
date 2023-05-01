/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Command, CommandRunner } from 'nest-commander'

import { promises as fs } from 'fs'
import { join } from 'path'

@Command({
  name: 'clean',
  arguments: '[path]',
  description: 'recursively deletes a folder, starting in the current directory, ./dist by default'
})
export class CleanCommand extends CommandRunner {
  async run(args: string[]): Promise<void> {
    const path = args[0] != null ? join(process.cwd(), args[0]) : join(process.cwd(), 'dist')
    await fs.rm(path, { recursive: true, force: true })
  }
}
