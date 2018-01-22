const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
	logging: false
});

const Page = db.define('Page', {
	title: {
		type: Sequelize.STRING
	},
	urlTitle: {
		type: Sequelize.STRING
	},
	content: {
		type: Sequelize.TEXT
	},
	status: {
		type: Sequelize.ENUM('open', 'close')
	}
});

const User = db.define('User', {
	name: {
		type: Sequelize.STRING
	},
	email: {
        type: Sequelize.STRING
    }
});

module.exports = {
	db: db
}

// module.exports = {
// 	Page: Page,
// 	User: User,
// }