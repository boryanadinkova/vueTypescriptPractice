import { Component, Prop, Vue } from "vue-property-decorator";
import { UserEntity } from "../../models/UsersEntity";
import { UserInfoPills } from "./UserInfoPills";
import { AttributeList } from "./AttributeList";

import "./UserDetails.scss";

@Component({})
export class UserDetails extends Vue {
  @Prop({ required: true })
  readonly user!: UserEntity;

  render() {
    return (
      <div class="userDetailsContainer">
        <h1 class="userDitails--title title">{this.user.id}</h1>
        <h2 class="subtitle">
          <span>{this.formatDateCreated(this.user.created)} - </span>
          <span>{this.user.location}</span>
        </h2>
        <UserInfoPills devices={this.user.devices} sessions={this.user.sessions} events={this.user.events} />
        <AttributeList attributes={this.user.attributes} />
      </div>
    );
  }

  private formatDateCreated(timestamp: number) {
    const date = new Date(timestamp);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const day = date.getDate();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    const hour = date.getHours() < 12 ? `${date.getHours()}:${minutes} AM` : `${date.getHours() - 12}:${minutes} PM`;

    const dateString = `${month} ${day}, ${year}, ${hour}`;
    return dateString;
  }
}
