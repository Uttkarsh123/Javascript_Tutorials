/*
Define a function that can answer the role of a user.
Auser can be on following roles:
admin - with all access
subadmin - with access to create/delete courses
testprep -  with access to create/delete tests
user - consume all content
other - trial user

Input: getUserRole(name, role)
*/
function getUserRole(name, role)
{
    switch(role)
    {
        case "admin":
            return `${name} is admin with all access`;
            break;

        case "subadmin":
            return `${name} is subadmin with access to create/delete courses `
            break;
        
        case "testprep":
            return `${name} is testprep  with access to create/delete tests`
            break;

        case "user":
            return `${name} is user which consume all content `
            break;

        default :
        return `${name} is default user`;
        break;
    }
}
var res = getUserRole("Raju", "admin")
console.log(res)