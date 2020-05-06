export const questions = {
  1: {
    yesCost: 1,
    yesQuestion: 2,
    noQuestion: 3,
    statement: '최근 1년 간 청첩장이 아닌 이유로 만난 적이 있다.',
  },
  2: {
    yesCost: 1,
    yesQuestion: 5,
    noQuestion: 3,
    statement: '청첩장을 직접 받았다.',
  },
  3: {
    yesCost: -1,
    yesQuestion: 6,
    noQuestion: 5,
    statement: '청첩장을 모바일로 받았다.',
  },
  4: {
    yesCost: 0,
    yesQuestion: 7,
    noQuestion: 9,
    statement: '인연을 맺은 지 5년 이상이다.',
  },
  5: {
    yesCost: 0,
    yesQuestion: 7,
    noQuestion: 4,
    statement: '직장 동료다.',
  },
  6: {
    yesCost: 0,
    yesQuestion: 11,
    noQuestion: 5,
    statement: 'SNS 친구다.',
  },
  7: {
    yesCost: 1,
    yesQuestion: 8,
    noQuestion: 9,
    statement: '자주 보는 사이다.',
  },
  8: {
    yesCost: -2,
    yesQuestion: 10,
    noQuestion: 11,
    statement: '이번이 재혼이다.',
  },
  9: {
    yesCost: 2,
    yesQuestion: 13,
    noQuestion: 12,
    statement: '식장이 호텔이다.',
  },
  10: {
    yesCost: -2,
    yesQuestion: 12,
    noQuestion: 11,
    statement: '그로부터 상처를 받은 적이 있다.',
  },
  11: {
    yesCost: -1,
    yesQuestion: 9,
    noQuestion: 13,
    statement: '결혼 성수기다.',
  },
  12: {
    yesCost: -1,
    yesQuestion: 15,
    noQuestion: 13,
    statement: '식장이 지방이다.',
  },
  13: {
    yesCost: 2,
    yesQuestion: 16,
    noQuestion: 14,
    statement: '나도 2년 안에 결혼할 예정이다.',
  },
  14: {
    yesCost: 1,
    yesQuestion: 16,
    noQuestion: 15,
    statement: '액수를 정했는데 뭔가 불안하다.',
  },
  15: {
    statement: '봉투만 전해도 OK',
  },
  16: {
    statement: '필참',
  },
}
