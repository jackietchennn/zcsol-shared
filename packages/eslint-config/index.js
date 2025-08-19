module.exports = {
  // ===== 导出基础配置 =====
  base: require('./base.js'),
  
  // ===== 导出框架特定配置 =====
  react: require('./react.js'),
  vue: require('./vue.js'),
  
  // ===== 默认导出基础配置 =====
  ...require('./base.js'),
}; 