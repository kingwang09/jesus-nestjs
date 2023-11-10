import { Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiTags, ApiConsumes } from "@nestjs/swagger";
import { diskStorage } from "multer";

@ApiTags('upload')
@Controller('/upload')
export class UploadController {
  
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    @ApiBody({
        required: true,
        type: "multipart/form-data",
        schema: {
          type: "object",
          properties: {
            file: {
              type: "string",
              format: "binary",
            },
          },
        },
      })
      @ApiConsumes("multipart/form-data")
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
    }

    @Post('/local')
    @UseInterceptors(FileInterceptor('file'))
    @ApiBody({
        required: true,
        type: "multipart/form-data",
        schema: {
          type: "object",
          properties: {
            file: {
              type: "string",
              format: "binary",
            },
          },
        },
      })
      @ApiConsumes("multipart/form-data")
    uploadFileToLocalStorage(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
        return {
            ok: true
        };
    }
}