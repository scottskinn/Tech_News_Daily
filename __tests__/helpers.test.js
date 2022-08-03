
const { format_date, format_plural, format_url } = require('../utils/helpers');


test('format_date() returns a date string', () => {
    const date = new Date('2022-07-3 0:0:0');

    expect(format_date(date)).toBe('7/3/2022');
});

test('check for plural words', () => {
    const word1 = format_plural('tiger', 2);
    const word2 = format_plural('lion', 1);

    expect(word1).toBe('tigers');
    expect(word2).toBe('lion');
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');
  
    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});