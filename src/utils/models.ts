export abstract class Model<Type> {
  public abstract ID?: string
  public abstract createdAt?: Date
  public abstract updatedAt?: Date
  public abstract deletedAt?: Date

  public abstract fromJSON: (json: any) => Type
}
