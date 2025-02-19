import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('Postagem')
@UseGuards(JwtAuthGuard)
@Controller("/postagens")
@ApiBearerAuth()
export class PostagemController{
    constructor(private readonly postagemService: PostagemService){ }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]> {
     return this.postagemService.FindAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem>{
     return this.postagemService.findById(id);
   }
 
   
   @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]>{
     return this.postagemService.findByTitulo(titulo);
   }
 

   @Post()
   @HttpCode(HttpStatus.CREATED)
   create(@Body() postagem: Postagem): Promise<Postagem>{
    return this.postagemService.create(postagem);
   }

   @Put()
   @HttpCode(HttpStatus.CREATED)
   update(@Body() postagem: Postagem): Promise<Postagem>{
    return this.postagemService.update(postagem);
   }


   
   @Delete('/:id')
   @HttpCode(HttpStatus.NO_CONTENT)
   Delete(@Param('id', ParseIntPipe) id: number){
    return this.postagemService.delete(id);
  }
}

