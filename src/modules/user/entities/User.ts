interface UserProps {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
}
export class User {
  private props: UserProps;
  private _id: string;

  constructor(props: UserProps, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
    this._id = id || crypto.randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }
  set name(name: string) {
    this.props.name = name;
  }

  get email(): string {
    return this.props.email;
  }
  set email(email: string) {
    this.props.email = email;
  }

  get password(): string {
    return this.props.password;
  }
  set password(password: string) {
    this.props.password = password;
  }

  get createdat(): Date {
    return this.props.createdAt as Date;
  }
}
