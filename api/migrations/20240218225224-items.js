module.exports = {
  async up(queryInterface, Sequelize) {
  await queryInterface.createTable('items', {
  item_id: {
  allowNull: false,
  autoIncrement: true,
  primaryKey: true,
  type: Sequelize.INTEGER
  },
  name: {
  type: Sequelize.STRING,
  allowNull: false
  },
  zipcode: {
  type: Sequelize.INTEGER,
  allowNull: false
  },
  description: {
  type: Sequelize.STRING,
  allowNull: false
  },
  price: {
  type: Sequelize.INTEGER,
  allowNull: false
  },
  image: {
  type: Sequelize.STRING,
  allowNull: false
  }
  });
  // Insert initial data
  await queryInterface.bulkInsert('items', [
  {
  item_id: 1,
  name: 'shirts',
  price: 10,
  zipcode: 90210,
  description: 'plain white t-shirt',
  image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  item_id: 2,
  name: 'shirts',
  price: 15,
  zipcode: 44256,
  description: 'black t-shirt with white lettering',
  image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D',
  createdAt: new Date(),
  updatedAt: new Date()
  }
  ]);
  },
  
  async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('items');
  }
  };
