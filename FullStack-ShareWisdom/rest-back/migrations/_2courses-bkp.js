exports.up = function(knex, Promise) { //blueprint for the table
    return knex.schema.createTableIfNotExists('courses', function (table) {
        table.increments('id').primary(); // adds incrementing int for id
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('name').notNullable();
        table.string('imgsrc',[1000]);
        table.string('type');
        table.integer('user_id').notNullable();
    })  
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('courses')
};
