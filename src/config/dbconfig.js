module.exports = {
  HOST:'storemanagedemo.c5ldiy3s6b0l.ap-south-1.rds.amazonaws.com',
  PORT: '3306',
  USER: 'admin',
  PASSWORD: 'LqlRlYdSPdYui0afl5lC',
  DB: 'storemngsys',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
