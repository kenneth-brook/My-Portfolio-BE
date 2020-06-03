exports.up = function (knex) {
  return knex.schema.createTable("frontPosts", (tbl) => {
    tbl.increments("id").primary();

    tbl.text("title", 128).notNullable();

    tbl.timestamp("created").notNullable().defaultTo(knex.fn.now());

    tbl.text("post").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("frontPosts");
};
