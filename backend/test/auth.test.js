import { expect, test } from 'vitest';
import { hash, sameHash } from '../auth.js';

// test sameHash
test('sameHash', async () => {
    expect(await sameHash('x', await hash('x'))).toBe(true);
})