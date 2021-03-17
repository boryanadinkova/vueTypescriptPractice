import { Component, Prop, Vue } from "vue-property-decorator";
import { UserEntity } from "../models/UsersEntity";
import { User } from "./User/User";

@Component({})
export class UsersList extends Vue {
  @Prop({ required: true })
  readonly users!: Array<UserEntity>;
  @Prop({ required: true })
  readonly toggleUserDetails!: any;
  @Prop({ required: true })
  readonly id!: string;

  render() {
    return <div>{this.users.map(user => this.renderListItem(user, this.toggleUserDetails))}</div>;
  }

  // eslint-disable-next-line
  private renderListItem(user: UserEntity, toggleUserDetails: any) {
    return <User user={user} userDetails={toggleUserDetails} isActive={this.id === user.id} />;
  }
}
