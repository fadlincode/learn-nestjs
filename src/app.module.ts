import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from './models/media.entity';
import { MediasService } from './models/medias.service';
import { MediasController } from './medias.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'arti_pos_engine',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Media]),
  ],
  controllers: [AppController, ProductsController, MediasController],
  providers: [AppService, MediasService],
})
export class AppModule {}
