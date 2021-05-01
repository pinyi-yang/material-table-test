const sampleUser = {
    "needsPasswordReset": false,
    "createdDate": "4/28/2021 11:36:00 PM", 
    "lastLoggedInDate": null,
    "authProvider": "Elexiant",
    "organization": "Elexiant",
    "isDeleted": false,
    "hasAccess": true,
    "userId": 1,
    "firstName": "Kieran",
    "lastName": "Jendro", 
    "email": "kieran.jendro@elexiant.com",
    "userPermission": 1,
    "userPermissionType": "SystemAdministrator"
};
const usersInfo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(num => {
    return {
        ...sampleUser,
        needsPasswordReset: sampleUser.needsPasswordReset ? "Yes" : "No",
        lastLoggedInDate: sampleUser.lastLoggedInDate ? sampleUser.lastLoggedInDate : "NA",
        firstName: `Mock${num > 9 ? num : "0" + num}`,
        lastName: `User${num > 9 ? num : "0" + num}`,
        userId: num,
        email: `mock${num}.user${num}@elexiant.com`,
        createData: `4/${num >= 9 ? num + 1 : "0" + num + 1}`,
        hasAccess: sampleUser.hasAccess ? "Yes" : "No",
        isDeleted: sampleUser.isDeleted ? "Yes" : "No"
    }
});

export default usersInfo;
