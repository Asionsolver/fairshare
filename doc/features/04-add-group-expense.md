## 🧾 Feature: Group Expense

Log and manage shared expenses within user-created groups. FairShare allows users to track who paid, how much, and how the cost should be distributed among group members.

---

### 📄 Description

This feature allows a user to create an expense within a selected group, define the amount, category, date, and choose how to split the amount between members. The expense is saved in the selected group’s history, and balances are updated accordingly.

---

### 🧭 Feature Flow

1. **Description**  
   The user provides a short description (e.g., "Dinner at Pizza Hut").

2. **Amount**  
   Enter the total cost of the expense.

3. **Category**  
   Choose the spending category (e.g., Food, Transport, Rent, etc.).

4. **Date**  
   Select the date the expense occurred.

5. **Group Selection**  
   The user must choose the group this expense belongs to.

   > ⚠️ **Required**: The form cannot be submitted without selecting a group.

6. **Paid By**  
   The user selects who paid — themselves or another group member.

7. **Split Type**  
   Define how the expense will be shared:

   - **Equal**: Divide amount evenly among members.
   - **Percentage**: User defines a % for each member. Total must equal 100%.
   - **Exact Amount**: Enter exact amount for each member. Sum must equal total amount.

8. **Submit**  
   When all fields are valid:
   - Submit button becomes active.
   - On submission, user is redirected to the selected **Group Details Page**.
   - Expense is saved and balances are updated.

---

### ✅ Example

**Scenario**:  
Asibul, Joy, and Anik go to dinner. Asibul paid ৳1500 and wants to split it as follows:

- Asibul: 50% (৳750)
- Joy: 25% (৳375)
- Anik: 25% (৳375)

**Form Input:**

- Group: “Roommates”
- Description: “Dinner at Pizza Hut”
- Amount: 1500
- Category: Food
- Date: 2025-07-05
- Paid By: Asibul
- Split Type: Percentage
  - Asibul: 50%
  - Joy: 25%
  - Anik: 25%
- ✅ Click "Submit"

**Result:**

- Expense added under “Roommates” group
- Group balances updated accordingly
- UI redirects to Group Expense Summary page
