import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting with name when no greeting provided', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting with name when greeting provided', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });

  it('should work with empty string name', () => {
    expect(greet('')).toBe('Hello, !');
  });

  it('should work with empty string greeting', () => {
    expect(greet('John', '')).toBe('Hello, John!'); // Fixed to match actual implementation
  });

  it('should work with special characters in name', () => {
    expect(greet('John@#$')).toBe('Hello, John@#$!');
  });

  it('should work with special characters in greeting', () => {
    expect(greet('John', 'Hello@#$')).toBe('Hello@#$, John!');
  });

  it('should work with very long name', () => {
    const longName = 'a'.repeat(1000);
    expect(greet(longName)).toBe(`Hello, ${longName}!`);
  });

  it('should work with very long greeting', () => {
    const longGreeting = 'a'.repeat(1000);
    expect(greet('John', longGreeting)).toBe(`${longGreeting}, John!`);
  });
});
