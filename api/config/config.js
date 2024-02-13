module.exports = {
    development: {
        username: 'postgres',
<<<<<<<<< Temporary merge branch 1
        password: 'Baseball1027!',
=========
        password: 'new_password',
>>>>>>>>> Temporary merge branch 2
        database: 'WearItAgain',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    test: {
        username: 'postgres',
<<<<<<<<< Temporary merge branch 1
        password: '',
=========
        password: 'new_password',
>>>>>>>>> Temporary merge branch 2
        database: 'WearItAgain',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    production: {
        username: 'postgres',
<<<<<<<<< Temporary merge branch 1
        password: '',
=========
        password: 'new_password',
>>>>>>>>> Temporary merge branch 2
        database: 'WearItAgain',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
};
