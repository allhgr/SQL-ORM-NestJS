import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PostagensModule } from './postagens/postagens.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { CurtidasPostagensModule } from './curtidas_postagens/curtidas_postagens.module';
import { CurtidasComentariosModule } from './curtidas_comentarios/curtidas_comentarios.module';
@Module({
  imports: [UsuariosModule, PostagensModule, ComentariosModule, CurtidasPostagensModule, CurtidasComentariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
