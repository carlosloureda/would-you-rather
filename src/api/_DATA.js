let users = {
  alicethomas: {
    id: "alicethomas",
    name: "Alice Thomas",
    avatarURL:
      "https://cdn.pixabay.com/photo/2013/07/13/10/24/beauty-157149_960_720.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  racheladams: {
    id: "racheladams",
    name: "Rachel Adams",
    avatarURL:
      "https://cdn.pixabay.com/photo/2016/12/08/19/03/vector-art-1892879_960_720.png",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  johndoe: {
    id: "johndoe",
    name: "John Doe",
    avatarURL:
      "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "alicethomas",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["alicethomas"],
      text: "know the history of every object you touched",
    },
    optionTwo: {
      votes: [],
      text: "be able to talk to animals",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "johndoe",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "have one real get out of jail free card",
    },
    optionTwo: {
      votes: ["johndoe", "alicethomas"],
      text: "a key that opens any door",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "alicethomas",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "always be 10 minutes late",
    },
    optionTwo: {
      votes: ["alicethomas"],
      text: "always be 20 minutes early",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "racheladams",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "have all traffic lights you approach be green",
    },
    optionTwo: {
      votes: ["alicethomas"],
      text: "never have to stand in line again",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "racheladams",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["racheladams"],
      text: "have an easy job working for someone else",
    },
    optionTwo: {
      votes: ["johndoe"],
      text: "work for yourself but work incredibly hard",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "johndoe",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["johndoe"],
      text: "go back to age 5 with everything you know now",
    },
    optionTwo: {
      votes: ["racheladams"],
      text: "know now everything your future self will learn",
    },
  },
};
