import { tagSumLottery } from './tagSumLottery';
import { describe, test, expect } from 'vitest';

describe('tagSumLottery', () => {
  test('array of length 6 gets 2 pairs of winners', () => {
    const communications = [
      { tag: 10, name: 'Tim the T-Rex' },
      { tag: 26, name: 'Vince the Veloci' },
      { tag: 40, name: 'Sue the Bellu' },
      { tag: 47, name: 'Dean the Edmon' },
      { tag: 15, name: 'Sam the Seismo' },
      { tag: 24, name: 'Karen the Cryol' },
    ];
    const lotteryNumber = 50;
    const winners = [
      ['Sue the Bellu', 'Tim the T-Rex'],
      ['Karen the Cryol', 'Vince the Veloci'],
    ];
    expect(
      tagSumLottery(communications, lotteryNumber)
    ).toStrictEqual(winners);
  });

  test('array of length 4 gets no winners', () => {
    const communications = [
      { tag: 10, name: 'Tim the T-Rex' },
      { tag: 26, name: 'Vince the Veloci' },
      { tag: 40, name: 'Sue the Bellu' },
      { tag: 47, name: 'Dean the Edmon' },
    ];
    const lotteryNumber = 100;
    const winners = 'No winners';
    expect(
      tagSumLottery(communications, lotteryNumber)
    ).toStrictEqual(winners);
  });
});
