import { expect, test } from 'vitest';
import { hash, sameHash } from '../hash.js';

// test sameHash
test('sameHash', async () => {
    expect(await sameHash('x', await hash('x'))).toBe(true);
})