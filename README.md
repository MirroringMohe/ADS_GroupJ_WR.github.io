# ADS401 Web Report Scaffold

单页 Web Report 骨架，对应 `ADS401.CourseworkSheet.Report.pdf` 里的 8 个必需章节。

## 文件说明

| 文件 | 用途 |
| --- | --- |
| `ADS401_GroupJ_Report.html` | 主页面（提交时保持这个文件名） |
| `assets/style.css` | 样式，一般不用改 |
| `assets/app.js` | 目录高亮 + 回到顶部，一般不用改 |
| `assets/img/` | 放图表截图的地方 |

## 使用步骤

1. 双击 `ADS401_GroupID_Report.html` 在浏览器里预览。
2. 搜索 `[` 找到所有占位符，逐个替换成你们的内容（橙色虚线标记就是待填位置）。
3. 找到 `1. Project at a glance` 等 8 个章节标题，按课程要求补内容。
4. 文件名保持 `ADS401_GroupJ_Report.html` 不要改。
5. 按下面「发布成链接」一节推送到 GitHub，启用 Pages，即可获得提交链接。

## 发布成链接（GitHub Pages）

课业要求提交的是**一个网址**，不是本地文件。所以顺序是:先把文件推上 GitHub 仓库，再用 Pages 把它变成网址。

第一步，在浏览器里新建一个空仓库（不要勾选任何自动生成的 README / .gitignore）:

```
https://github.com/new
```

本组仓库: `https://github.com/MirroringMohe/ADS_GroupJ_WR.github.io`，Public 仓库。

第二步，在 `C:\Users\Lenovo\Desktop\ADS401-WebReport` 这个文件夹里执行:

```powershell
git init -b main
git add .
git commit -m "Add ADS401 web report scaffold"
git remote add origin https://github.com/MirroringMohe/ADS_GroupJ_WR.github.io.git
git push -u origin main
```

第一次 push 会弹出登录窗口，用 GitHub 账号授权即可。

第三步，在仓库页面进入 `Settings` → 左侧 `Pages` → `Source` 选 `Deploy from a branch` → 分支选 `main`、目录选 `/ (root)` → `Save`。等 1-2 分钟。

第四步，提交的链接就是:

```
https://mirroringmohe.github.io/ADS_GroupJ_WR.github.io/ADS401_GroupJ_Report.html
```

注意最后必须带文件名。用无痕窗口打开一次，确认校外也能访问（老师批改时可能未登录 GitHub）。

## 必须注意

- 单页，不要拆子页面；章节内跳转用锚点即可。
- 网站和仓库里都不能放原始被试数据。
- 图表要有清晰标题、单位和不确定度；图片要写 `alt` 文本。
- 正文约 2000-2500 词，阅读时间约 10 分钟。
- 提交材料还包括 A1 海报（含指向本页面的二维码）和 Supplementary Materials 压缩包。

## 参考

- 提交文件名: `ADS401_GroupID_Report.html`（提交的链接要指向这个文件的完整地址）
- 海报文件名: `ADS401_GroupID_Poster.pdf`
- 补充材料: `ADS401_GroupID_SupplementaryMaterials.zip`
