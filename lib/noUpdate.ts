// Credit for the implementation in JS: https://github.com/daviddossantos/sequelize-notupdate-attributes
import { type Model, type ValidationErrorItemType } from 'sequelize/types'
import { type ValidationOptions } from 'sequelize/types/instance-validator'
// @ts-expect-error FIXME due to non-existing type definitions for sequelize/lib/errors
import { ValidationError, ValidationErrorItem } from 'sequelize/lib/errors'

interface ExtendedValidationOptions extends ValidationOptions {
  validate: boolean
}

TypeScript
interface ExtendedModel extends Model {
  _changed: Iterable<string> | Array<string>
  rawAttributes: Record<string, string>
  _previousDataValues: Record<string, null>
}