import { Controller, Get, Query, UseGuards, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { GreetingDto } from './dto/gretting.dto';
import { AuthGuard } from './guard/auth/auth.guard';

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('/hello')
  @UseGuards(AuthGuard)
  getHello(@Query() query:GreetingDto) {
    return 'Hello ' + query.name + ' your are ' + (parseInt(query.age.toString()) + 3) + ' years old';
  }
}
