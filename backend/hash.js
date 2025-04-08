import bcrypt from 'bcrypt';

// repeat encryption this many times
const saltRounds = 8;

// encrypt a password
export async function hash(password) {
    return await bcrypt.hash(password, saltRounds);
}

// compare a plaintext password with an encrypted one
export async function sameHash(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}