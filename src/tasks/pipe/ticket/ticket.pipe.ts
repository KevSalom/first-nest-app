import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TicketPipe implements PipeTransform {
  transform(value: any) {
     
    const num = parseInt(value.num.toString());
    if (isNaN(num)) {
      throw new HttpException('Invalid ticket number', HttpStatus.BAD_REQUEST);
    }

    return {name: value.name, num};
  }
}
