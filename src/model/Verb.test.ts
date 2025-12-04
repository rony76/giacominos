import { describe, expect, it } from 'vitest';
import { removeTilde } from './Verb';

describe('removeTilde', () => {
  it('removes í and replaces with i', () => {
    expect(removeTilde('í')).toBe('i');
    expect(removeTilde('leí')).toBe('lei');
  });

  it('removes é and replaces with e', () => {
    expect(removeTilde('é')).toBe('e');
    expect(removeTilde('hablémos')).toBe('hablemos');
    expect(removeTilde('comé')).toBe('come');
  });

  it('removes á and replaces with a', () => {
    expect(removeTilde('á')).toBe('a');
    expect(removeTilde('hablámos')).toBe('hablamos');
    expect(removeTilde('comá')).toBe('coma');
  });

  it('removes multiple tildes in a single string', () => {
    expect(removeTilde('íéá')).toBe('iea');
    expect(removeTilde('hablámos')).toBe('hablamos');
    expect(removeTilde('coméís')).toBe('comeis');
  });

  it('handles strings without tildes', () => {
    expect(removeTilde('hablar')).toBe('hablar');
    expect(removeTilde('comer')).toBe('comer');
    expect(removeTilde('vivir')).toBe('vivir');
    expect(removeTilde('')).toBe('');
  });

  it('handles strings with only tildes', () => {
    expect(removeTilde('í')).toBe('i');
    expect(removeTilde('é')).toBe('e');
    expect(removeTilde('á')).toBe('a');
  });

  it('only handles lowercase tildes (not uppercase)', () => {
    // removeTilde only replaces lowercase tildes
    expect(removeTilde('HablÁ')).toBe('HablÁ'); // uppercase Á is not replaced
    expect(removeTilde('ComÉ')).toBe('ComÉ'); // uppercase É is not replaced
    expect(removeTilde('VivÍ')).toBe('VivÍ'); // uppercase Í is not replaced
    
    // But lowercase tildes are replaced
    expect(removeTilde('hablá')).toBe('habla');
    expect(removeTilde('comé')).toBe('come');
    expect(removeTilde('viví')).toBe('vivi');
  });

  it('does not affect other characters', () => {
    expect(removeTilde('hablar')).toBe('hablar');
    expect(removeTilde('comer')).toBe('comer');
    expect(removeTilde('vivir')).toBe('vivir');
    expect(removeTilde('123')).toBe('123');
    expect(removeTilde('!@#')).toBe('!@#');
  });

  it('handles edge cases', () => {
    // removeTilde only replaces the first occurrence of each character
    // 'íéáíéá'.replace('í', 'i') = 'iéáiéá'
    // 'iéáiéá'.replace('é', 'e') = 'ieáiéá'
    // 'ieáiéá'.replace('á', 'a') = 'ieaíéá'
    expect(removeTilde('íéáíéá')).toBe('ieaíéá');
    // 'aíeá'.replace('í', 'i') = 'aieá'
    // 'aieá'.replace('é', 'e') = 'aieá' (no é)
    // 'aieá'.replace('á', 'a') = 'aiea'
    expect(removeTilde('aíeá')).toBe('aiea');
    expect(removeTilde('íéá')).toBe('iea');
  });
});

