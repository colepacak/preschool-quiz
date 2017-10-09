export default {
  test_list: {
    letter_sounds: {
      name: 'Letter sounds',
      question_list: {
        '0': {
          text: 'What is the first letter of cups?',
          answer: '0',
          option_list: { '0': 'c', '1': 'd', '2': 'b' }
        },
        '5': {
          text: 'What is the first letter of dinosaur?',
          answer: '1',
          option_list: { '0': 'c', '1': 'd', '2': 'b' }
        },
        '7': {
          text: 'What is the first letter of ant?',
          answer: '2',
          option_list: { '0': 'e', '1': 'i', '2': 'a' }
        }
      }
    }
  },
  session: {
    username: 'Leena',
    test: 'letter_sounds',
    timestamp: 1506002406,
    question_order: ['0', '1', '2'],
    question_current: '0',
    response_list: { // { '0': '0', '1': '1' }
    },
    view_mode: 'test' // 'registration', 'test', 'result'
  },
  result_list: {
    '0': {
      username: 'Scarlett',
      test: 'letter_sounds',
      timestamp: 1506002406,
      score: 0.33
    }
  }
};