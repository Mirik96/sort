const users = [
    {cpu: 'intel', info: {cores: 2, cache: 3}},
    {cpu: 'intel', info: {cores: 4, cache: 4}},
    {cpu: 'amd', info: {cores: 1, cache: 1}},
    {cpu: 'intel', info: {cores: 3, cache: 2}},
    {cpu: 'amd', info: {cores: 5, cache: 2}}
] 
const users1 = users.sort((el,arr) => el.info.cores - arr.info.cores);
console.log(users1);





