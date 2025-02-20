// get connection to database ORM object
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:qwerty@localhost:3306/joga_sequelize"
);

// read model data for table representation
const models = require("../../models");

// create new article into data table
const createArticle = (req, res) => {
  let name = req.body.name;
  let slug = req.body.slug;
  let image = req.body.image;
  let body = req.body.body;

  const newArticle = models.Article.create({
    name: name,
    slug: slug,
    image: image,
    body: body,
    published: new Date().toISOString().slice(0, 19).replace("T", " "),
  })

    .then((article) => {
      console.log(article);
      return res.status(200).json({ message: "New article is added" });
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

const updateArticle = (req, res) => {
  let name = req.body.name;
  let slug = req.body.slug;
  let image = req.body.image;
  let body = req.body.body;

  models.Article.findOne({
    where: { id: req.params.id },
  })

    .then((article) => {
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      return article.update({
        name: name,
        slug: slug,
        image: image,
        body: body,
      });
    })
    .then((updatedArticle) => {
      console.log(updatedArticle);
      return res
        .status(200)
        .json({ message: "Article updated successfully", updatedArticle });
    })
    .catch((error) => {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Failed to update article", error: error.message });
    });
};

// export controller functions
module.exports = {
  createArticle,
  updateArticle,
};
