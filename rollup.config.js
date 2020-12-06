import babel from 'rollup-plugin-babel'
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"

export default {
  input: 'src/index.js', // 指定模块入口
  output: {
    file: 'dist/dist.js', //指定模块输出文件路径
    format: 'cjs', // 指定模块输出格式
    // sourcemap: true // 开启sourcemap
  },
  plugins: [
    // 添加babel插件
    babel({
      exclude: 'node_modules/**' // 排除node_modules下的文件
    }),
    commonjs(), // 支持解析CommonJS模块
    resolve() // 支持从node_modules中引入模块
  ]
}