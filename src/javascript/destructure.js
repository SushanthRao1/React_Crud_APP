// object destructure - unpack the values into district variables.

let user = {
    username ="Sushanth",
    userID=123,
    userlocation = "Hyderabad"
}

let username = user.username; //normal ways

// we can give aliasename for object only not in Arrays
let { username: aliasname, userID } = { user } // destructure object
