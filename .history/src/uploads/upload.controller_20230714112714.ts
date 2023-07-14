import {
  Post,
  UseInterceptors,
  UploadedFile,
  Controller,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('upload')
export class UploadController {
  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename =
            path.parse(file.originalname).name.replace(/\s/g, '') + Date.now();
          const extention = path.parse(file.originalname).ext;
          cb(null, `${filename}${extention}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return { UploadedFileName: file.filename };
  }

  @Get(':imagepath')
  findImage(@Res() res, @Param('imagepath') imagePath: string) {
    return res.sendFile(imagePath, { root: path.join(__dirname, 'uploads') });
  }
}
