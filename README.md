# Canvas 绘图演示项目

一个基于HTML5 Canvas的交互式绘图应用，支持全屏绘制和递归点生成效果。

## 功能特性

- **全屏Canvas绘图**：Canvas自动适应浏览器窗口大小
- **交互式绘制**：鼠标拖拽绘制彩色圆点
- **递归点生成**：每个点会递归生成分支状的子点群
- **性能优化**：使用requestAnimationFrame优化绘制性能
- **响应式设计**：支持窗口大小变化时自动调整
- **控制按钮**：清除画布、绘制圆形和矩形功能

## 项目结构

```
canvas_demo/
├── index.html          # 主页面
├── index.css           # 样式文件
├── index.js            # 主要JavaScript逻辑
├── pen2.html           # 第二个演示页面
├── pen2.css            # 第二个页面样式
├── pen2.js             # 第二个页面逻辑
├── README.md           # 项目说明文档
└── .gitignore          # Git忽略文件
```

## 使用方法

### 本地运行

1. 克隆或下载项目到本地
2. 在项目目录下启动HTTP服务器：
   ```bash
   python3 -m http.server 8080
   ```
3. 在浏览器中访问：`http://localhost:8080`

### 操作说明

- **绘制**：按住鼠标左键拖拽即可绘制
- **清除**：点击"清除画布"按钮清空所有内容
- **绘制圆形**：点击"绘制圆形"按钮在随机位置绘制圆形
- **绘制矩形**：点击"绘制矩形"按钮在随机位置绘制矩形

## 技术实现

### 核心技术

- **HTML5 Canvas API**：用于图形绘制
- **requestAnimationFrame**：优化动画性能
- **事件监听**：处理鼠标交互
- **递归算法**：生成分支状点群效果

### 性能优化

- **绘制队列**：使用队列机制批量处理绘制操作
- **节流控制**：限制绘制频率为60fps
- **递归深度限制**：防止栈溢出，最大递归深度为5层
- **循环次数限制**：每层最多生成3个子点

### 递归绘制算法

```javascript
function createPoint(x, y, max, depth = 0) {
    // 递归深度限制
    if (depth >= 5 || max <= 0) {
        return;
    }
    
    // 绘制当前点
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = getRandomColor();
    ctx.fill();
    
    // 递归生成子点
    // ...
}
```

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 开发说明

项目使用纯HTML、CSS和JavaScript开发，无需额外的构建工具或依赖。

## 许可证

MIT License