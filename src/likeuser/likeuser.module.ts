
import { Module } from '@nestjs/common';
import { LikeuserController } from './likeuser.controller';
import { LikeuserService } from './likeuser.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
    imports: [
        JwtModule.register({
            global:true,
            secret:'jfjebhcjfoet38586dhgtoi5ydnjh4g3d4u6igjf',
            signOptions:{expiresIn: '1h'}
          }),
    ],
    controllers: [LikeuserController],
    providers: [LikeuserService,PrismaService]
})
export class LikeuserModule {}
