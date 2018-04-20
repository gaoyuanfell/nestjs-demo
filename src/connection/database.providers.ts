import {createConnection} from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'gaoyuan',
      database: 'moka',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
    }),
  },
];
