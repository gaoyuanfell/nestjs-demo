import {Get, Controller, Post, Req, Res, HttpCode, Param, HttpStatus, HttpException, UseFilters} from '@nestjs/common';
import {Observable} from 'rxjs/Observable';
import {HttpExceptionFilter} from './filter/http-exception.filter';

@Controller()
@UseFilters(new HttpExceptionFilter())
export class AppController {
  @Get()
  @UseFilters(new HttpExceptionFilter())
  findOne(): Observable<any[]> {
    throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @HttpCode(200)
  @Post('/post/:id')
  async save(@Param() params): Promise<string> {
    return params;
  }
}
