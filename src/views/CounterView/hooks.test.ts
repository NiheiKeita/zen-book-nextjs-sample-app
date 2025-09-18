import { expect, test } from "vitest"

test('test', () => {
  expect("1").toBe("1")
})
test('error', () => {
  expect("2").toBe("2")
})