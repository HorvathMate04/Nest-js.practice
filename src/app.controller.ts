import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  @Get("/quotes")
  @Render('quotes')
  getQuotes() {
    return this.appService.getQuotes();
  }

  @Get("/randomQuote")
  @Render('randomQuote')
  getRandomQuote() {
    return {result: this.appService.randomizeQuote()};
  }

  @Get("/topAuthors")
  @Render('topAuthors')
  getTopAuthors() {
    return {result: this.appService.countQuotes()};
  }

  @Get('/quotes/:id')
  @Render('randomQuote')
  getQuoteById(@Param('id') id: string) {
    return { result: this.appService.getQuoteById(id) };
  }

  @Get('/deleteQuote/:id')
  @Render('delete')
  deleteQuote(@Param('id') id: string) {
    return { result: this.appService.deleteQuoteById(id) };
  }
}
