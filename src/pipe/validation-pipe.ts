import {ArgumentMetadata, BadRequestException, Pipe, PipeTransform} from '@nestjs/common';
import {validate} from 'class-validator';
import {plainToClass} from 'class-transformer';

@Pipe()
export class ValidationPipe implements PipeTransform<any> {

  async transform(value: any, metadata: ArgumentMetadata) {
    const object = plainToClass(metadata.metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException();
    }
    return value;
  }
}
