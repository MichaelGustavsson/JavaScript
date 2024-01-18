// En funktion som både har typat argument(parameter) och typat returvärde...
function sayHello(name: string): string {
  console.log('Hej ' + name);
  return name;
}
sayHello('Michael');

const myFunc1 = (): boolean => {
  console.log('Hej');
  return true;
};

// livsfarlig!!!!!!!!!
// const square = (num) => {
//   return num * num;
// }

const square = (num: number): number => {
  return num * num;
};

const result = square(2);

const checkModelYear = (modelYear): boolean | string => {
  if (modelYear < 2015) {
    return 'Vi köper inte så gamla bilar';
  }

  return true;
};

const checkModelYear2 = (modelYear: number): boolean | string => {
  if (modelYear < 2015) {
    return 'Vi köper inte så gamla bilar';
  }

  return true;
};

checkModelYear2(2015);
// checkModelYear2("2019")
// checkModelYear2(false)

// never
// Kasta fel(undantag)
const throwException = (errorMsg: string, errorCode: number): never => {
  throw new Error(`${errorMsg} - ${errorCode}`);
};

const error = throwException('Faan', 404);

// Köra någonting i oändlighet...
function mainLoop(): never {
  while (true) {
    console.log('I am running forever, please help me!!!');
  }
}
