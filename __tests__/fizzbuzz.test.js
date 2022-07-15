const fizzbuzz = require("../src/fizzbuzz");

const testData = [
  { testCase: "1の場合は1が返ること", value: 1, expected: 1 },
  { testCase: "3の場合はFizzが返ること", value: 3, expected: "Fizz" },
  { testCase: "5の場合はBuzzが返ること", value: 5, expected: "Buzz" },
  { testCase: "15の場合はFizzBuzzが返ること", value: 15, expected: "FizzBuzz" },
];

testData.forEach((v) => {
  test(`fizzbuzz_${v.testCase}`, () => {
    // 実行
    const actual = fizzbuzz(v.value);

    // 検証
    expect(actual).toBe(v.expected);
  });
});

