import { decode, encode, verify } from "./index";

test("#encode", () => {
  expect(encode("foo", "foobar")).toStrictEqual("foo1vehk7cnpwgkc4mqc");
});

test("#decode", () => {
  expect(decode("foo1vehk7cnpwgkc4mqc")).toStrictEqual({
    "prefix": "foo",
    "words": [12, 25, 23, 22, 30, 24, 19, 1, 14, 8],
  });
});

test("#verify", () => {
  expect(verify("foo1vehk7cnpwgkc4mqc")).toBe(true);
  expect(verify("foo")).toBe(false);
});
