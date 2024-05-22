import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from 'class-validator';
  
  @ValidatorConstraint({ async: false })
  export class MatchPasswordsConstraint implements ValidatorConstraintInterface {
    validate(confirmationPassword: any, args: ValidationArguments) {
      const { object } = args;
      return object['password'] === confirmationPassword;
    }
  
    defaultMessage(args: ValidationArguments) {
      return 'Password and confirmation password do not match';
    }
  }
  
  export function MatchPasswords(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: MatchPasswordsConstraint,
      });
    };
  }
  