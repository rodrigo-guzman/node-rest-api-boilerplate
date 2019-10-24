//require('dotenv').config()
const userService = new (require('../../infraestructure/httpService'))();
const Users = require('../../domain/models/users');
const fetch = require('node-fetch');
const URI =  'https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api/users';//process.env.URI no pude hacerla andar con el valor desde el archivo de confirmacion


class usersCtrlClass {
    /**
     * Get list of users.
     * @async
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {Object} next - Express middleware handler.
     */
    async getUsers(req, res, next) {

    try{ 
        const json = await userService.requestService(URI);
        let jsonUser= json.users;
        let usersActive= jsonUser.filter(function (item) {
          return item.is_active == true
        });

        let usersOrderLastName=usersActive.sort(function(a, b) {
            return b.lastname.localeCompare(a.lastname)
        });
   
        res.status(200).json(usersOrderLastName);
    }
    catch(err){  
        res.status(404).json({
            "success": false,
            "msg": "error"
          });
    }
    }
  }

  module.exports = usersCtrlClass;
 
