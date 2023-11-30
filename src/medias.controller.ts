import { Controller, Get, Param, Render, Res } from "@nestjs/common";
import { MediasService } from "./models/medias.service";

@Controller('/medias')
export class MediasController {
    constructor(private readonly mediasService: MediasService) {}

    @Get('/')
    @Render('medias/index')
    async index() {
        const viewData = {
            title: "List Media",
            medias: await this.mediasService.findAll()
        };

        return {
            viewData: viewData
        };
    }

    @Get('/:id')
    async show(@Param() params, @Res() response) {
        const media = await this.mediasService.findOne(params.id)
        if (media === undefined) {
            return response.redirect('/products')
        }

        const viewData = {
            title: "Detail Media",
            media: media
        }

        return response.render('medias/show', {
            viewData: viewData
        })
    }
}