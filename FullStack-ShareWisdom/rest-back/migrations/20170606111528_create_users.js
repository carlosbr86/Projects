exports.up = function(knex, Promise) { //blueprint for the table
    return knex.schema.createTableIfNotExists('users', function (table) {
        table.increments('id').primary(); // adds incrementing int for id
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('email');       
        table.string('name');
        table.string('admin');      
    })  
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};