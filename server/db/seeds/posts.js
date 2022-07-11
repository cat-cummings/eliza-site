exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('blogposts')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('blogposts').insert([
        {
          id: 101,
          title: 'Placeholder Swim 1',
          comment_count: 2,
          date_created: new Date(Date.now()),
          post: JSON.stringify([
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          ]),
        },
        {
          id: 102,
          title: 'Placeholder Swim 2',
          comment_count: 1,
          date_created: new Date(Date.now()),
          post: JSON.stringify([
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          ]),
        },
      ])
    })
}
