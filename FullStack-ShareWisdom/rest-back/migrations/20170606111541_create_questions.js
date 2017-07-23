exports.up = function(knex, Promise) { //blueprint for the table
    return knex.schema.createTableIfNotExists('questions', function (table) {
        table.increments('id').primary(); // adds incrementing int for id
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('question',[8000]).notNullable();
        table.string('trueAnswer').notNullable();
        table.string('wrongAnswer1');
        table.string('wrongAnswer2');
        table.string('wrongAnswer3');
        table.string('wrongAnswer4');
        table.string('type');
        table.integer('course_id').notNullable();
    })  
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('questions')
};
