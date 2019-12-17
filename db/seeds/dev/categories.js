
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'Baby Items'},
        {id: 2, name: 'Child Care'},
        {id: 3, name: 'Clothing'},
        {id: 4, name: 'Day Shelter'},
        {id: 5, name: 'Clothing'},
        {id: 6, name: 'Dental'},
        {id: 7, name: 'Disability Services'},
        {id: 8, name: 'Domestic Violence'},
        {id: 9, name: 'Education'},
        {id: 10, name: 'Emergency'},
        {id: 11, name: 'Employment'},
        {id: 12, name: 'Family Planning'},
        {id: 13, name: 'Family Support'},
        {id: 14, name: 'Food'},
        {id: 15, name: 'General'},
        {id: 16, name: 'Health'},
        {id: 17, name: 'Holiday Assistance'},
        {id: 18, name: 'Housing'},
        {id: 19, name: 'Insurance'},
        {id: 20, name: 'Legal'},
        {id: 21, name: 'LGBTQ'},
        {id: 22, name: 'Mental Health'},
        {id: 23, name: 'Transportation'},
        {id: 24, name: 'Vision'},
      ]);
    });
};
