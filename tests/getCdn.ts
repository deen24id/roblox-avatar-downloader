import assert from "node:assert";
import { describe, it } from "node:test";
import getCdn from "../utils/getCdn";

describe("30-Day CDN", () => {
  it("MTL", () => {
    assert.strictEqual(
      getCdn("30DAY-a80d396cefc1ddb861b55035b8c4a90e"),
      "https://t7.rbxcdn.com/30DAY-a80d396cefc1ddb861b55035b8c4a90e"
    );
  });
  it("OBJ", () => {
    assert.strictEqual(
      getCdn("30DAY-1746cec81a07c8ddcec374036762cb2f"),
      "https://t6.rbxcdn.com/30DAY-1746cec81a07c8ddcec374036762cb2f"
    );
  });
  it("PNG", () => {
    assert.strictEqual(
      getCdn("30DAY-e46cd78840a64f6c16010bbcadcba411"),
      "https://t2.rbxcdn.com/30DAY-e46cd78840a64f6c16010bbcadcba411"
    );
    assert.strictEqual(
      getCdn("30DAY-b216b4d520afa032be010caf2ef9c3f4"),
      "https://t0.rbxcdn.com/30DAY-b216b4d520afa032be010caf2ef9c3f4"
    );
  });
});
