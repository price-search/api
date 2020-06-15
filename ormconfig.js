const type = process.env.TYPEORM_CONNECTION || 'postgres';
const username = process.env.TYPEORM_USERNAME || 'user';
const password = process.env.TYPEORM_PASSWORD || 'pass';
const host = process.env.TYPEORM_HOST || 'postgres';
const port = parseInt(process.env.TYPEORM_PORT, 10) || 5432;
const database = process.env.TYPEORM_DATABASE || 'data';
const entities = [
  process[Symbol.for('ts-node.register.instance')] || // In case we are running from ts-node
  process.env.NODE_ENV === 'test' // In case we are running from jest
    ? 'src/**/*.entity.ts'
    : 'dist/**/*.entity.js',
];
const logging = process.env.NODE_ENV !== 'production';

module.exports = {
  type,
  url:
    process.env.DATABASE_URL ||
    `${type}://${username}:${password}@${host}:${port}/${database}`,
  entities,
  synchronize: true,
  logging,
};
