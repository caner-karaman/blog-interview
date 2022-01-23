const user2: IUser = {
  name:"Test",
  username:"Admin",
  email:"testAdmin@googel.com",
  id:"2"  
}

const user3: IUser = {
  name:"Devran",
  username:"Hasan",
  email:"devrenajas@googel.com",
  id:"3"  
}

const createUser = ({
  name="Caner",
  username="Karaman",
  email="karamancaner@googel.com",
  id="1"
}): IUser => {
  return {
    name,
    username,
    email,
    id
  }
}

function createUsers(){
  return [createUser({}), user2, user3 ];
}

export { createUser, createUsers };
