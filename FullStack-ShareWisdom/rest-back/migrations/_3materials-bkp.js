exports.up = function(knex, Promise) { //blueprint for the table
    return knex.schema.createTableIfNotExists('materials', function (table) {
        table.increments('id').primary(); // adds incrementing int for id
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('url',[8000]).notNullable();
        table.string('goals',[8000]);
        table.string('text',[8000]);       
        table.integer('course_id').notNullable();
    })  
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('materials')
};
