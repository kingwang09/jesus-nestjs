import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { UploadController } from "./upload.controller";


@Module({
    imports:[
        MulterModule.register({
            storage: diskStorage({
                destination(req, file, callback){
                    // callback 함수의 두번째 인자로 파일 저장 경로를 지정할 수 있습니다.
                    callback(null, './upload_local_storage');
                },
                filename: (req, file, callback) => callback(null, `${new Date().getTime()}-${file.originalname}`)
            })
        })
    ],
    controllers: [
        UploadController
    ]
})
export class LocalStorageUploadModule{}