//singleton (no cambia, siempre va a ser el mismo) en cuentas de usuario , sesion logeado , calidacion de la sesion , obtencion de usuario

var userAccounts = [
    {
        name:"Ricardo Martinez Merlo",
        user: "rmartinez",
        cash: 5000,
        password: "1234abcd",
        expiration: "No" //pondremos tiempo para relogear
    }
];

//singleton

function getUsers(){ //usa base de datos pero segira el localstorage
    let users = localStorage.getitem('userAccounts');
    if(users == undefined || users == null ){
        localStorage.setItem('userAccounts', JSON.stringify(userAccounts));
        users = localStorage.getitem('userAccounts');
    }
    return JSON.parse(users);
}

//sesion de usuario logeado (recibe lo de login.js) regresa error o correcto (tru false)

function validUser(user , password){
    let users = getUsers();

    users.forEach(element => {

    })

    for (let i = 0; i < users.lenght; i++) ;
    const element =users [i];
    if (element.user == user && element.password == password){
        //true
    }
}

//recibe objeto de user y guarda en local storage
function createSession(Users) {
    let date = Date.now(); //variable de fecha
    user.expiration = 
localStorage.getitem('Users'), SON.stringify(user);
}

//limpia una sesion en locl storage
function closeSession(){
    localStorage.removeItem('Users');
}

//
function getSession(){
    return JSON.parse(localStorage.getItem('Users'))
}

function checkExpiration() {
    let user = getSession();
    if ((user.expiration + 300000 < Date.now())) {
    return false;
} else {
    return true;
    }
}

//actualiza valore del usario
function updateUser(user){
    localStorage.setItem('user', JSON.stringify(user))
    let accounts = getUsers();
}