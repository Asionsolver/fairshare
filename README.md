# 🌐 FairShare

**FairShare** is a smart, modern, and intuitive expense-splitting web application. Whether you're sharing costs with roommates, splitting trip expenses, or managing group payments, FairShare AI simplifies the process with real-time updates and a clean user experience.

---

**[🚀 View Live Demo](https://fairshare-seven.vercel.app/)** · **[📚 Read the Full Documentation](./doc/README.md)** · **[🐞 Report a Bug](https://github.com/Asionsolver/fairshare-ai/issues)**

## ✨ Core Features

| Feature                     | Description                                                                          |
| --------------------------- | ------------------------------------------------------------------------------------ |
| **👥 Group Expenses**       | Create dedicated groups for any event to keep expenses organized and transparent.    |
| **🧍 Individual Expenses**  | Log one-on-one expenses to maintain a complete financial picture.                    |
| **🧠 Smart Settlements**    | Our algorithm minimizes the number of payments required when settling up.            |
| **📊 Expense Analytics**    | Visualize spending patterns and track shared costs to gain financial insights.       |
| **🔔 Payment Reminders**    | Receive automated reminders for pending debts.                                       |
| **➗ Multiple Split Types** | Split costs equally, by percentage, or with exact amounts—flexible for any scenario. |
| **🔄 Real-Time Updates**    | Experience instant syncing of all financial activities across the group.             |

---

## 📚 Documentation

This project includes comprehensive documentation to provide a clear understanding of its architecture and features. The documentation is organized into two main sections for different audiences:

- **User Guides:** Simple, step-by-step instructions for end-users.
- **Feature Documentation:** In-depth technical breakdowns for developers or reviewers.

> 👉 **[Explore the Full Documentation Hub](./docs/README.md)** to learn more about how each feature works.

---

## 🧱 Tech Stack

This project leverages a modern, full-stack serverless architecture:

| Layer        | Technology Used                                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------------------------------- |
| **Frontend** | [Next.js 15](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/) |
| **Backend**  | [Convex](https://www.convex.dev/) (Full-stack TypeScript Development Platform)                                   |
| **Auth**     | [Clerk](https://clerk.com/)                                                                                      |

---

## 🚀 Getting Started Locally

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- Node.js (v18 or higher)
- `npm` or `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/Asionsolver/fairshare-ai.git
cd fairshare-ai
```

### 2. Install Dependencies

Make sure you have Node.js (v18+) and npm or yarn installed.

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a .env.local file in the root directory:

```
touch .env.local
```

#### Add the following variables:

```
# .env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key

NEXT_PUBLIC_CONVEX_URL=your-convex-url
CONVEX_DEPLOY_KEY=your-convex-deploy-key

```

### 4. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

## 📄 License

This project is licensed under the **MIT License**.

---

## 🤝 How to Contribute

Have ideas or found a bug? Contributions are welcome! Open an issue or submit a pull request.

### Steps to Contribute

1. **Fork the Repository:** Click the "Fork" button in the top right corner of the repo page.
2. **Create your Feature Branch:**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes:**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch:**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request:** Go to the original repository and create a pull request from your branch.

> 💡 FairShare: **Smarter sharing. Fairer spending.**
