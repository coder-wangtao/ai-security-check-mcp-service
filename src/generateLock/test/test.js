import { generateLock } from '../index.js';
import fs from 'fs';
import { join } from 'path';
import { getDirname } from '../../common/utils.js';

const packageJsonPath = join(getDirname(import.meta.url), 'project_package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

async function test() {
  const workDir =
    'D:\\DATA\\Project\\AIProject\\AI-Security-Check-MCP-SERVICE\\src\\generateLock\\test\\workdir';
  await generateLock(workDir, packageJson);
}

test();
