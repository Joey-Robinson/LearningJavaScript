// Student Score & Total Score

const gradeCalc = (studentScore, totalScore = 20) => {
  const percentage = (studentScore / totalScore) * 100;
  // return `You got a ${studentScore}, the highest possible score was ${totalScore}. Which is ${percentage} percent which is an A`;
  if (percentage >= 90) {
    return `Congratulations, your score of ${percentage} was above a 90, you got an A`;
  } else if (percentage >= 80) {
    return `You did incredibly well. Your score of ${percentage} yielded you a B`;
  } else if (percentage >= 70) {
    return `A little more studying will go a long way, your score of ${percentage} has gotten you a C`;
  } else if (percentage >= 60) {
    return `Studying is a vital part of passing this class. You got a ${percentage} which is a D`;
  } else {
    return `I'm not too sure what you were doing, but this score of ${percentage} is an embarassment`;
  }
};
// gradeCalc(20);
console.log(gradeCalc(15));