/**
 * 示例函数：将两个数字相加
 * @param a 第一个数字
 * @param b 第二个数字
 * @returns 两个数字的和
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * 示例函数：将字符串转换为大写
 * @param str 输入字符串
 * @returns 大写字符串
 */
export function toUpperCase(str: string): string {
  return str.toUpperCase()
}

// 导出类型
export interface Config {
  name: string
  version: string
  debug?: boolean
}

/**
 * 示例类
 */
export class Calculator {
  private history: number[] = []

  add(a: number, b: number): number {
    const result = a + b
    this.history.push(result)
    return result
  }

  getHistory(): number[] {
    return [...this.history]
  }

  clear(): void {
    this.history = []
  }
}
