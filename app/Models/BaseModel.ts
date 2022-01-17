import { BaseModel as AdonisBaseModel } from '@ioc:Adonis/Lucid/Orm'
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy'

export default class BaseModel extends AdonisBaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()
}
