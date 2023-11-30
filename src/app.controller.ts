import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  @Render('index')
  index() {
    
    const viewData = {
      title: "Home Page",
      content: this.appService.getHello
    };
    
    return {
      viewData: viewData
    };
  }

  @Get("/about")
  @Render('about')
  about() {

    const data = {
      title: "About Page",
      description: "This is description",
      author: "Authorer",
    };

    return {
      viewData: data
    }
  }
  
}
