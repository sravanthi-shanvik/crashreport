import { add, subtract } from './math';

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export { add, subtract } from './math';
