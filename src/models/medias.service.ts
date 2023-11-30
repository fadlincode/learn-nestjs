import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Media } from "./media.entity";
import { Repository } from "typeorm";

@Injectable()
export class MediasService {
    constructor(
        @InjectRepository(Media)
        private mediasRepository: Repository<Media>,
    ) {}

    findAll(): Promise<Media[]> {
        return this.mediasRepository.find();
    }

    findOne(id: number): Promise<Media | null> {
        return this.mediasRepository.findOneBy({id});
    }
}