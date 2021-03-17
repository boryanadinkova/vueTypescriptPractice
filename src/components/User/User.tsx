import { Component, Prop, Vue } from "vue-property-decorator";
import { UserEntity } from "../../models/UsersEntity";

import "./User.scss";

@Component({})
export class User extends Vue {
  @Prop({ required: true })
  readonly user!: UserEntity;
  @Prop({ required: true })
  readonly userDetails!: any;
  @Prop({ required: true })
  readonly isActive!: boolean;

  render() {
    return (
      <div class={`userItem${this.isActive ? " active" : ""}`} onClick={() => this.userDetails(this.user.id)}>
        <h1 class="userItemTitle">{this.user.id}</h1>
        <div class="subtitle">
          {this.user.devices} Devices - {this.user.sessions.length} Sessions - {this.user.location}
        </div>
      </div>
    );
  }
}
