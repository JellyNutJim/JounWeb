// controllers/updateUsers.js

const { writeFileSync } = require('fs');
const j = require('../data/users.json');

exports.UpdateUsers = async(req, res) => {
    var local = j.users;
    var newUsers = req.body.users;

    // Update
    for (var i = 0; i < newUsers.length; i++)
    {
        var exists = false;

        for (var l = 0; l < local.length; l++)
        {
            if (newUsers[i][0] == local[l][0])
            {
                local[l][3] += newUsers[i][3];
                local[l][2] = newUsers[i][2];
                sort(local, l);
                exists = true;
                break;
            }
        }

        if (!exists)
        {
            local.push(newUsers[i]);
        }
    }

    try {
        writeFileSync(__dirname +'/../data/users.json', JSON.stringify({"users": local}, null, 2), 'utf8');
        console.log('Data successfully saved to disk');
      } catch (error) {
        console.log('An error has occurred ', error);
      }
    
    console.log(local);
    console.log(newUsers);
}


const sort = function(local, pos)
{

}