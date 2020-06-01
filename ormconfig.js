module.exports = {
  type: 'postgres',
  url:
    process.env.DATABASE_URL ||
    `postgres://${process.env.TYPEORM_USERNAME || 'user'}:${process.env
      .TYPEORM_PASSWORD || 'pass'}@${process.env.TYPEORM_HOST ||
      'db'}:${parseInt(process.env.TYPEORM_PORT, 10) || 5432}/${process.env
      .TYPEORM_DATABASE || 'data'}`,
  entities: [
    process.env.NODE_ENV === 'test'
      ? 'src/**/*.entity.ts'
      : 'dist/**/*.entity.js',
  ],
  synchronize: true,
};
