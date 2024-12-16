db.books.distinct("title").map((x) => x.toUpperCase());
db.books.distinct("categories").map((x) => {
  const count = db.books.countDocuments({ categories: x });
  return x + ":" + count;
});
db.books.aggregate([
  { $match: { status: "PUBLISH" } },
  { $set: { is_publish: true } }]);
