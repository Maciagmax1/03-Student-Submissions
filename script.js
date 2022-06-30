const submissions = [
  {
    name: "Jane",
    score: 300,
    date: "2020 - 01 - 24",
    passed: true,
  },
  {
    name: "Joe",
    score: 300,
    date: "2018 - 05 - 14",
    passed: true,
  },
  {
    name: "Jack",
    score: 50,
    date: "2019 - 07 - 05",
    passed: false,
  },
  {
    name: "Jill",
    score: 50,
    date: "2020 - 04 - 22",
    passed: false,
  },
];

// works
const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: array.score >= 60,
  };
  array.push(newObject);
};

// works
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// works
const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((element) => element.name === name);
  array.splice(index, 1);
};

// works
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60 ? true : false;
  //   array[index].passed = score >= 60;
};

// works
const findSubmissionByName = (array, name) =>
  array.find((item) => item.name === name);

// works
const findLowestScore = (array) => {
  let lowestScore = 1000;
  array.forEach((item) => {
    if (lowestScore > item.score) {
      lowestScore = item.score;
    }
  });
  return lowestScore;
};

// works
const findAverageScore = (array) => {
  let totalNum = 0;
  for (let item of submissions) {
    totalNum += item.score;
  }
  return totalNum / array.length;
};

// works
const filterPassing = (array) => array.filter((item) => item.passed);

// works
const filter90AndAbove = (array) => array.filter((item) => item.score >= 90);

// works
const createRange = (start, end) => {
  let newArray = [];
  for (let i = start; i <= end; i++) {
    newArray.push(i);
  }
  return newArray;
};

// struggling and not working
const countElements = (arrayOfStrings) => {
  arrayOfStrings.reduce((pv, cv) => {
    return pv[cv] ? ++pv[cv] : (cv[pv] = 1), pv;
  }, {});
};
console.log(countElements(["a", "b", "a", "c", "a", "b"]));

addSubmission(submissions, "Max", 1000, "idk");

deleteSubmissionByName(submissions, "Max");

console.log(submissions);
