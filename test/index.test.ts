import { describe, expect, it } from 'vitest'
import { add, toUpperCase, Calculator } from '../src/index'

describe('add function', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(-1, 1)).toBe(0)
    expect(add(0, 0)).toBe(0)
  })
})

describe('toUpperCase function', () => {
  it('should convert string to uppercase', () => {
    expect(toUpperCase('hello')).toBe('HELLO')
    expect(toUpperCase('World')).toBe('WORLD')
    expect(toUpperCase('')).toBe('')
  })
})

describe('Calculator class', () => {
  it('should calculate and store history', () => {
    const calc = new Calculator()
    
    expect(calc.add(1, 2)).toBe(3)
    expect(calc.add(3, 4)).toBe(7)
    expect(calc.getHistory()).toEqual([3, 7])
  })

  it('should clear history', () => {
    const calc = new Calculator()
    calc.add(1, 2)
    calc.clear()
    expect(calc.getHistory()).toEqual([])
  })
}) 