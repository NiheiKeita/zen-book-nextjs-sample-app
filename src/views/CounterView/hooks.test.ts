import { describe, expect, it, test } from "vitest"
import { useCounterView } from "./hooks"
import { renderHook } from "@testing-library/react"

test('test', () => {
  expect("1").toBe("1")
})
test('error', () => {
  expect("2").toBe("2")
})

describe("testFunction", () => {
  it("渡した数値に1を足して返す", () => {
    const { result } = renderHook(() => useCounterView())
    const { testFunction } = result.current
    expect(testFunction(0)).toBe(1)
    expect(testFunction(5)).toBe(6)
    expect(testFunction(-3)).toBe(-2)
  })
})
