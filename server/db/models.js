import {DataTypes, Model} from 'sequelize'
import url from 'url'
import connectToDB from "./db.js"

const db = await connectToDB('postgresql:///hobbies')

//Models go here
class Admin extends Model {}

Admin.init (
    {
        adminId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        adminName: {
            type: DataTypes.STRING(30),
            unique: true
        },
        adminPass: {
            type: DataTypes.STRING(30)
        }
    }, {
        sequelize: db
    }
)
class Suggestion extends Model {}

Suggestion.init (
    {
        suggestionId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        hobbyName: {
            type: DataTypes.TEXT,
            unique: true
        },
        basicSupplies: {
            type: DataTypes.TEXT
        },
        optionalSupplies: {
            type: DataTypes.TEXT
        },
        tutorialLinks: {
            type: DataTypes.TEXT
        }
    }, {
        sequelize: db
    }
)

class Hobby extends Model {} 

Hobby.init (
    {
        hobbyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        hobbyName: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false
        },
        hobbyImg: {
            type: DataTypes.TEXT
        },
        category: {
            type: DataTypes.STRING(30)
        },
        mapQuery: {
            type: DataTypes.TEXT
        }
    }, {
        sequelize: db
    }
)

class Supply extends Model {} 

Supply.init (
    {
        hobbyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },
        supplyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        supplyName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        optional: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        sequelize: db
    }
)

class Tutorial extends Model {} 

Tutorial.init (
    {
        hobbyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },
        tutorialId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        tutorialImg: {
            type: DataTypes.TEXT,
        },
        tutorialName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        tutorialLink: {
            type: DataTypes.TEXT,
        },
        paid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        sequelize: db
    }
)

Hobby.hasMany(Supply, {foreignKey: 'hobbyId'})
Hobby.hasMany(Tutorial, {foreignKey: 'hobbyId'})


if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync({force: true})
    console.log('Finished syncing database!');
}

export {Hobby, Supply, Tutorial, Admin, Suggestion, db}