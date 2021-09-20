import { bech32m, Decoded } from "bech32";

export const encode = (prefix: string, words: string): string =>
  bech32m.encode(prefix, bech32m.toWords(Buffer.from(words, "utf8")));

export const decode = (content: string): Decoded => bech32m.decode(content);

export const verify = (content: string): boolean => {
  try {
    bech32m.decode(content);

    return true;
  } catch {
    return false;
  }
};
