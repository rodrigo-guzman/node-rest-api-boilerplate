const fs = require('fs');
const path = require('path');
//let json_users = fs.readFileSync(path.join(__dirname, '..', '..', 'infrastructure', 'users.json'), 'utf-8');
//let users = JSON.parse(json_users);


class Users {
    find() {
    return { 
        "Users":[ 
        { 
           "id":0,
           "name":"I robot",
           "lastname":"Isaac asimov",
           "birthday":"26/08/1988",
           "is_active": true,
           "email": "rodrigogastonguzman@gmail.com",
           "genere": "masculine"
    
        }
        ]
    };
  }

}
module.exports = Users;
