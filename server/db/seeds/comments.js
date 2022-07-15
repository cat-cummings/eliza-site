
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('comments')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1,
          post_id: 101,
          date_posted: new Date(Date.now()),
          comment: 'Great swim',
          posted_by: 'Cat'
        },
        {
          id: 2,
          post_id: 101,
          date_posted: new Date(Date.now()),
          comment: 'Really Great swim',
          posted_by: 'Petra'
        },
        {
          id: 3,
          post_id: 102,
          date_posted: new Date(Date.now()),
          comment: 'You rock',
          posted_by: 'Cat'
        },
      ])
    })
}