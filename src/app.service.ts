import { Injectable } from '@nestjs/common';
import { list} from './quotes';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getQuotes(){
    return list;
  }

  randomizeQuote(){
    return list.quotes[Math.floor(Math.random() * list.quotes.length)];
  }

  countQuotes(){
    let result = {};
    for(const quote of list.quotes){
      if(result.hasOwnProperty(quote.author)){
        result[quote.author]++;
      }else{
        result[quote.author] = 1;
      }
    }
    let sorted = {};
    for(const key in result){
      let max = result[key]
      let maxKey = key
      for(const comp in result){
        if(max < result[comp]){
          max = result[comp];
          maxKey = comp
        }
      }
      sorted[maxKey] = max;
      delete result[maxKey];
    }
    return sorted
  }

  getQuoteById(id) {
    for(const quote of list.quotes){
      if(quote.id == id){
        return quote;
      }
    }
    return null;
  }

  deleteQuoteById(id){
    for(let i = 0; i < list.quotes.length; i++){
      if(list.quotes[i].id == id){
        list.quotes.splice(i, 1)
        return true;
      }
    }
    return false;
  }
}
