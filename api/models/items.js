'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Items extends Model {
        static associate(models) {}
    }

    Items.init(
        {
            item_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: 'Items',
            tableName: 'items',
            timestamps: false,
        }
    );

    return Items;
};
