const username = process.env.TYPEORM_USERNAME || 'user';
const password = process.env.TYPEORM_PASSWORD || 'pass';
const host = process.env.TYPEORM_HOST || 'db';
const port = parseInt(process.env.TYPEORM_PORT, 10) || 5432;
const database = process.env.TYPEORM_DATABASE || 'data';

module.exports = {
  type: 'postgres',
  url:
    process.env.DATABASE_URL ||
    `postgres://${username}:${password}@${host}:${port}/${database}`,
  entities: [
    process.env.NODE_ENV === 'test'
      ? 'src/**/*.entity.ts'
      : 'dist/**/*.entity.js',
  ],
  synchronize: true,
};
