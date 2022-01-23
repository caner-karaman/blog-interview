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

// ***--- Comments ---***
const comment: IComment = {
  body: 'İklim değişikliği yazı dizimiz kapsamında bir önceki makalemizde de belirtmiş olduğumuz üzere, Birleşmiş Milletler İklim Değişikliği Çerçeve Sözleşmesi',
  name: 'Ebru',
  id: '1',
}

const comment2: IComment = {
  body: 'Lorem Ipsum dolor sit amet.',
  name: 'Levent',
  id: '2',
}

const createComment = ({
  body= 'Nulla tempus laoreet pretium. Aliquam hendrerit ante dolor, at ultrices turpis euismod sed. Duis consectetur scelerisque nunc, quis viverra dui commodo in',
  name= 'Mehmet',
  id= '3',
}) => {
  return {
    body, name, id
  }
}

const createComments = () => {
  return [createComment({}), comment, comment2];
}


// ***--- Post ---***
const post: PostResponse = {
  user: createUser({}),
  title: 'İklim Değişikliği Yazı Dizisi 3 | İklim Değişikliğine İlişkin Uluslararası',
  id: '1',
  body: "İklim değişikliği yazı dizimiz kapsamında bir önceki makalemizde de belirtmiş olduğumuz üzere, Birleşmiş Milletler İklim Değişikliği Çerçeve Sözleşmesi",
  comments: {
    data: createComments(),
  }
}

const post2: PostResponse = {
  user: createUser(user2),
  title: 'İklim Değişikliğine İlişkin Uluslararası',
  id: '2',
  body: "Belirtmiş olduğumuz üzere, Birleşmiş Milletler İklim Değişikliği Çerçeve Sözleşmesi",
  comments: {
    data: createComments(),
  }
}

const createPost = ({
  user= createUser({}),
  title= 'İklim Değişikliği Yazı Dizisi 3 | İklim Değişikliğine İlişkin Uluslararası',
  id= '1',
  body= "İklim değişikliği yazı dizimiz kapsamında bir önceki makalemizde de belirtmiş olduğumuz üzere, Birleşmiş Milletler İklim Değişikliği Çerçeve Sözleşmesi",
  comments= {
    data: createComments(),
  }
}) => {
  return {
    user, title, id, body, comments
  }
}

const createPosts = () => {
  return [post, post2];
}


export { createUser, createUsers, createComment, createComments, createPost, createPosts };
