const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging:false});

const Page = db.define('Page', {
	title: {
		type: Sequelize.STRING,
		allowNull:false

	},
	urlTitle: {
		type: Sequelize.STRING,
		allowNull:false,
		get() {
	  	return '/wiki/' + this.getDataValue('urlTitle')
		}
	},
	content: {
		type: Sequelize.TEXT,
		allowNull:false
	},
	status: {
		type: Sequelize.ENUM('open', 'close')
	},
	date:{
		type: Sequelize.DATE,
		defaulValue : Sequelize.NOW
	},
});

const User = db.define('User', {
	name: {
		type: Sequelize.STRING,
		allowNull:false
	},
	email: {
        type: Sequelize.STRING,
				allowNull:false,
				validate:{
					isEmail: true
				}
    }
});

module.exports = {
	User:User,
	Page:Page,
	db:db
}
