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
    // username: 'Leena', // string
    // test_id: 'letter_sounds', // string, test id
    // timestamp: 1507596091106, // integer
    // question_order: ['0', '1', '2'], // array of question ids
    // question_current: '0', // string, question id
    // response_list: { '0': '0', '5': '1' }, // object keyed by question ids with values of option ids
    view_mode: 'registration' // string, either 'registration', 'test' or 'result'
  },
  result_list: {
    '0': {
      username: 'Scarlett',
      test_id: 'letter_sounds',
      timestamp: 1507596091106,
      score: 0.3333
    },
    '1': {
      username: 'Lucia',
      test_id: 'letter_sounds',
      timestamp: 1507596091106,
      score: 1.0
    }
  }
};