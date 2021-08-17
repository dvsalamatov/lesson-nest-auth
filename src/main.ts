import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const swagConfig = new DocumentBuilder()
        .setTitle('Пример авторизации JWT на NodeJS, NestJs, Typescript')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .addTag('Node test project')
        .build();
    const document = SwaggerModule.createDocument(app, swagConfig);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

start();