import { rm } from 'fs/promises';
import { resolve } from 'path';

const distPath = resolve('dist');

try {
    await rm(distPath, { recursive: true, force: true });
    console.log('Cleaned dist/');
} catch (err) {
    console.error('Failed to clean:', err);
}