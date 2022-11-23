const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns a random hash code when given an empty object", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).not.toBe("0");
    expect(trivialKey).toHaveLength(128);
  });
  it("Returns a hash code when given an object without a partitionKey", () => {
    const trivialKey = deterministicPartitionKey({test: 'jest'});
    expect(trivialKey).not.toBe("0");
    expect(trivialKey).toHaveLength(128);
  });
  it("Returns the partitionKey value when given a string", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: '12'});
    expect(trivialKey).toBe("12");
  });
  it("Returns the stringified partitionKey value when given a number", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 12});
    expect(trivialKey).toBe('12');
    expect(trivialKey).not.toBe(12);
  });
  it("Returns hash code when partitionKey has length > 256", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 'abd327134621195ab0ff7904437093be0a27584d3b3edc7249eeca6aefc9ae3837028b34e921cbad6cf5c1f89b95dc9a445bcc3e2851bbda0b9d0f102a7bbbdcabd327134621195ab0ff7904437093be0a27584d3b3edc7249eeca6aefc9ae3837028b34e921cbad6cf5c1f89b95dc9a445bcc3e2851bbda0b9d0f102a7bbbdct'});
    console.log(trivialKey)
    expect(trivialKey).toHaveLength(128);
    expect(trivialKey).not.toBe('abd327134621195ab0ff7904437093be0a27584d3b3edc7249eeca6aefc9ae3837028b34e921cbad6cf5c1f89b95dc9a445bcc3e2851bbda0b9d0f102a7bbbdcabd327134621195ab0ff7904437093be0a27584d3b3edc7249eeca6aefc9ae3837028b34e921cbad6cf5c1f89b95dc9a445bcc3e2851bbda0b9d0f102a7bbbdct');
  });
});
