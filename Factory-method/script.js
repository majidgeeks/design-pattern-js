
// Factory method in javascript

const createUser = (role, userInfo) => {
    const user = {
        name : userInfo.name,
        password : userInfo.password,
    };
    const specificInfo = {
        admin : () => ({
          role : 'Admin',
          key : userInfo.key,
        }),
        customer : () => ({
            role : 'Customer',
            address : userInfo.address,
        }),
        seller : () => ({
            role : 'Seller',
            shopAddress : userInfo.shopAddress,
            contact_number : userInfo.contact_number,
        }),
    };
    const additionalInfo = specificInfo[role] ? specificInfo[role] : null;
    if(!additionalInfo){
        throw new Error('Invalid role specifier');
    }
    return {...user, ...additionalInfo};
};

const adminUser = createUser('admin', {
    name : 'Majid Hussain',
    password : '123456',
    key : '12345',
});

const customerUser = createUser('customer', {
    name : 'Walking',
    password : '123456',
    address : 'saddar khi',
});

const sellerUser = createUser('seller',{
    name : 'Majid',
    password : '123456',
    shopAddress : 'zenab market',
    contact_number : '03031113332',
})

console.log('adminUser',adminUser);
console.log('customerUser',customerUser);
console.log('sellerUser',sellerUser);