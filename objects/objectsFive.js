// const name = 'JBear';

const isPasswordValid = (password) => {
  if(password.includes('password') || password.lenth <= 8) {
    return `Whoops, get your shit together`;
  } else {
    return `Nice`;
  }
};

console.log(isPasswordValid('testing123456'))