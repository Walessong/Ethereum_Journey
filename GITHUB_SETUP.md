# GitHub 仓库创建与推送指南

## 方式一：通过 GitHub 网页创建（推荐）

1. **创建新仓库**
   - 打开：https://github.com/new
   - **Repository name**：`Ethereum_Journey`（或 `ethereum-journey`）
   - **Description**：`以太坊思想史档案馆 - 技术路线的思想演进与路线斗争史`
   - 选择 **Public**
   - **不要**勾选 "Add a README file"（保持空仓库）
   - 点击 **Create repository**

2. **在本地添加远程并推送**
   ```powershell
   cd "d:\Github\myself\Ethereum_Journey"
   git remote add origin https://github.com/你的用户名/Ethereum_Journey.git
   git branch -M main
   git push -u origin main
   ```
   将 `你的用户名` 替换为你的 GitHub 用户名。

---

## 方式二：使用 GitHub CLI（若已安装）

```powershell
cd "d:\Github\myself\Ethereum_Journey"
gh auth login
gh repo create Ethereum_Journey --public --source=. --remote=origin --push
```

---

## 当前项目状态

- 本地已提交所有更改
- 分支：`master`（推送时可重命名为 `main`）
- 无远程仓库配置
