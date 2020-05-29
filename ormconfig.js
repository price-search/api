module.exports = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'user',
  password: 'pass',
  database: 'data',
  entities: [
    process.env.NODE_ENV === 'test'
      ? 'src/**/*.entity.ts'
      : 'dist/**/*.entity.js',
  ],
  synchronize: true,
};
