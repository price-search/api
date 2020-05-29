module.exports = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST || 'db',
  port: parseInt(process.env.TYPEORM_PORT, 10) || 5432,
  username: process.env.TYPEORM_USERNAME || 'user',
  password: process.env.TYPEORM_PASSWORD || 'pass',
  database: process.env.TYPEORM_DATABASE || 'data',
  entities: [
    process.env.NODE_ENV === 'test'
      ? 'src/**/*.entity.ts'
      : 'dist/**/*.entity.js',
  ],
  synchronize: true,
};
