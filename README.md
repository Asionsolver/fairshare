# 🌐 FairShare

**FairShare** is a smart, modern, and intuitive expense-splitting web application. Whether you're sharing costs with roommates, splitting trip expenses, or managing group payments, FairShare AI simplifies the process with real-time updates and a clean user experience.

---

## 🚀 Features

### 👥 Group Expenses

Create dedicated groups for roommates, trips, or events to keep expenses organized and transparent.

### 🧍 Individual Expenses

Easily add personal expenses outside of groups to maintain a full picture of your finances.

### 🧠 Smart Settlements

Our algorithm minimizes the number of payments when settling up.

### 📊 Expense Analytics

Visualize spending patterns, track shared costs over time, and gain financial insights.

### 🔔 Payment Reminders

Receive automated reminders for pending debts and get suggestions for repayment timing.

### ➗ Multiple Split Types

Split expenses equally, by percentage, or with exact custom amounts — flexible for any situation.

### 🔄 Real‑Time Updates

Experience instant syncing of expenses and repayments as soon as group members make changes.

---

## ⚙️ How It Works

Follow these simple steps to manage your shared expenses effortlessly:

1. **Create or Join a Group**  
   Start a group for roommates, trips, or events. Invite your friends to join.

2. **Add Expenses**  
   Log who paid, the amount, and how the expense should be divided.

3. **Settle Up**  
   Instantly see who owes what and record repayments to keep balances clear.

---

## 🧱 Tech Stack

| Layer        | Technology Used                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------- |
| **Frontend** | [Next.js 15](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn](https://ui.shadcn.com/) |
| **Backend**  | [Convex](https://www.convex.dev/)                                                                             |

---

## 📦 Getting Started

Follow these steps to set up and run the project locally:

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

## 🤝 Contributions

Have ideas or found a bug? Contributions are welcome! Open an issue or submit a pull request.

> 💡 FairShare: **Smarter sharing. Fairer spending.**
