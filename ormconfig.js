const type = process.env.TYPEORM_CONNECTION || 'postgres';
const username = process.env.TYPEORM_USERNAME || 'user';
const password = process.env.TYPEORM_PASSWORD || 'pass';
const host = process.env.TYPEORM_HOST || 'postgres';
const port = parseInt(process.env.TYPEORM_PORT, 10) || 5432;
const database = process.env.TYPEORM_DATABASE || 'data';
// const dropSchema = process.env.TYPEORM_DROP_SCHEMA
//   ? process.env.TYPEORM_DROP_SCHEMA === 'true'
//   : true;

module.exports = {
  type,
  url:
    process.env.DATABASE_URL ||
    `${type}://${username}:${password}@${host}:${port}/${database}`,
  entities: [
    process.env.NODE_ENV === 'test'
      ? 'src/**/*.entity.ts'
      : 'dist/**/*.entity.js',
  ],
  // dropSchema: true,
  // synchronize: true,
};
