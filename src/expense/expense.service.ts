import { Injectable } from '@nestjs/common';
import { CreateExpenseDTO } from './dto/create-expense.dto';
import { UpdateExpenseDTO } from './dto/update-expense.dto';

@Injectable()
export class ExpenseService {
    private expenses = [
        {
            id: 1,
            name: "strawberry",
            cost: 2,
        },
        {
            id: 2,
            name: "blueberry",
            cost: 3,
        },
    ];

    getAll() {
        return this.expenses;
    }

    getById(id: number) {
        return this.expenses.find(expense => expense.id === id);
    }

    create(expense: CreateExpenseDTO) {
        const lastId = this.expenses[this.expenses.length - 1]?.id || 0;
        const newExpense = {
            id: lastId + 1,
            ...expense,
            createdAt: new Date().toISOString(),
        };
        this.expenses.push(newExpense);
        return newExpense;
    }

    update(id: number, expense: UpdateExpenseDTO) {
        const index = this.expenses.findIndex(el => el.id === id);
        if (index === -1) return null;
        this.expenses[index] = {
            ...this.expenses[index],
            ...expense,
        };
        return this.expenses[index];
    }

    delete(id: number) {
        const index = this.expenses.findIndex(expense => expense.id === id);
        if (index === -1) return null;
        const deletedExpense = this.expenses.splice(index, 1);
        return deletedExpense[0];
    }
}
