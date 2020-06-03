const server = require("./server");

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n***_You Have Awakened The Beast On Port: ${port}_***\n`);
});
