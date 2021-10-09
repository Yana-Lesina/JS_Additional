let arr = ['155', '216', '3815', '7687', '12984', '4277', '839']

for (let i = 0; i < arr.length; i++) {

  if(arr[i][0] == '2' || arr[i][0] == '4') {
    console.log(arr[i])
  }

}

let isSimpl

for (let i = 2; i < 100; i++) {

  isSimpl = 0;


  for (let j = 2; j < i; j++) {
    
    if (i % j == 0) {
      isSimpl++ ;
    } else continue;

  }

  if (isSimpl < 1) {
    console.log(i + '\tДелитель этого числа: 1 и ' + i)
  } else {
    continue
  }
}