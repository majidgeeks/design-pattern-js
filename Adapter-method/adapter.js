
// without adapter

// class OldApi{
//     getUser(){
//         return {name:'Majid', age:'36'};
//     }
// };

// function displayUser(userFetcher){
//    const user = userFetcher.fetchUserData();
//    console.log(user);
// };

// const oldApi = new OldApi();
// displayUser(oldApi); // will return error

// with adapter

// class UserAdapter{
//     constructor(oldApi){
//         this.oldApi = oldApi;
//     };
//     fetchUserData(){
//         return this.oldApi.getUser();
//     }
// };

// const oldApi = new oldApi();
// const adapterUser = new UserAdapter(oldApi)

// displayUser(adapterUser);
