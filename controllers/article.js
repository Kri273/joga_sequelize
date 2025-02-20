// get connection to database ORM object
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')


// read model data for table representation
const models = require('../models')


// get all data from table 
const getAllArticles = (req, res) => {
    models.Article.findAll()
    .then(articles => {
        console.log(articles)
        return res.status(200).json({ articles });
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
}

const getArticleBySlug = (req, res) => {
    models.Article.findOne({
    where: {
        slug: req.params.slug
    },
    include: [{
        model: models.Author,
        as: 'author'
    },
    {
    model: models.Tag, 
    through: {
    model: models.ArticleTag
    }
}],
})
.then(article => {
    console.log("Author's Articles:", article);
    return res.status(200).json({ article });
})
.catch(error => {
    console.error(error);
    return res.status(500).send(error.message);
})
};

const getArticleByAuthor = (req, res) => {
    models.Author.findByPk(req.params.id, {
        include: [{
            model: models.Article,
            as: 'article',
        }],
    })
    .then(author => {
        if (!author) {
            return res.status(404).json({ error: "Author not found" });
        }
        return res.status(200).json({ 
            author: author.name,
            articles: author.articles
        });
    })
    .catch(error => {
        console.error(error);
        return res.status(500).send(error.message);
    });
};

// export controller functions
module.exports = {
    getAllArticles,
    getArticleBySlug,
    getArticleByAuthor
};