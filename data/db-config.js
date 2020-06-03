const knex = require("knex");
const config = require("../knexfile");

const db = knex(config.development);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};

function find() {
  return db("frontPosts");
}

function findById(id) {
  return db("frontPosts").where({ id: Number(id) });
}

function insert(post) {
  return db("frontPosts")
    .insert(post)
    .then((ids) => ({ id: ids[0] }));
}

function update(id, post) {
  return db("frontPosts").where("id", Number(id)).update(post);
}

function remove(id) {
  return db("frontPosts").where("id", Number(id)).del();
}
