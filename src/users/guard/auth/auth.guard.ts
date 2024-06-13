import { CanActivate, ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest() as Request;

   if(request.headers.authorization !== 'kevinWeb') {
      throw new HttpException('Unauthorized', 401);
    }

    if (request.query.name && request.query.age) {
      console.log(request.originalUrl);
      return true;
    }
    return false;
  }
}
