import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDTO } from './dto/create-expense.dto';
import { UpdateExpenseDTO } from './dto/update-expense.dto';

@Controller('expense')
export class ExpenseController {
    constructor(private expenseService: ExpenseService) {}

    @Get()
    getAll() {
        return this.expenseService.getAll();
    }

    @Post()
    create(@Body() expense: CreateExpenseDTO) {
        return this.expenseService.create(expense);
    }

    @Get(":id")
    getById(@Param('id', ParseIntPipe) id: number) {
        return this.expenseService.getById(id);
    }

    @Patch(":id")
    update(@Param('id', ParseIntPipe) id: number, @Body() updateExpense: UpdateExpenseDTO) {
        return this.expenseService.update(id, updateExpense);
    }
}