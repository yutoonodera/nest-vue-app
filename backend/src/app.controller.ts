import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('App') // ← Swagger のグループ名
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Hello を返します' })
  @ApiResponse({ status: 200, description: '成功', type: String })
  getHello(): string {
    return this.appService.getHello();
  }
}
