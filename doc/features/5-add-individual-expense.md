## ✏️ Feature: Add Individual Expense (With Split Between Two People)

This feature allows users to log an expense shared between themselves and one other person. The user can define how the expense should be split (equally, by percentage, or by exact amount) and who paid for it. This ensures precise tracking of shared personal costs.

---

### 📄 Description

Log and split individual expenses between you and another participant. This feature is ideal for shared personal transactions like food, rides, gifts, etc.

---

### 🧭 Feature Flow

1. **Description**  
   The user enters a brief description of the expense (e.g., "Lunch at Kacchi Bhai").

2. **Amount**  
   The total expense amount is input (e.g., 600 BDT).

3. **Category**  
   The user selects the expense category (e.g., Food, Transport, Shopping, etc.).

4. **Date**  
   The date the expense occurred is selected.

5. **Participants**  
   The user selects exactly one additional participant.

   > ⚠️ The form cannot be submitted unless two participants (user + one more) are selected.

6. **Paid By**  
   The user chooses who paid the full amount:

   - Themselves (the current user)
   - The other participant

7. **Split Type**  
   The user selects how the expense should be split between the two people:

   - **Equal**: 50/50 split (each pays half)
   - **Percentage**: User sets percentage for both (e.g., 70% and 30%)
   - **Exact Amount**: User enters the exact amount owed by each person (must add up to the total)

8. **Submit**  
   Once the form is valid and submitted:
   - The expense is saved
   - The user is redirected to their **Personal Expense Page** where they can view a summary of the transaction and balances

---

### ✅ Example Use Case

**Situation**: Asibul and Joy had lunch worth 600 BDT. Asibul paid the full amount and wants to split it 70% (Asibul) and 30% (Joy).

- Description: "Lunch at Kacchi Bhai"
- Amount: 600
- Category: Food
- Date: 2025-07-05
- Participants: Asibul, Joy
- Paid by: Asibul
- Split Type: Percentage
  - Asibul: 70%
  - Joy: 30%
- Submit → Redirects to personal expenses

---

### 🎯 Outcome

- A single individual expense is saved with exact split logic
- Proper debt tracking and visibility between both parties
- Ensures no expense is logged without a second participant

---

📘 **Note**: This is an essential part of FairShare’s micro-splitting system and complements the group expense system for smaller, one-on-one transactions.
