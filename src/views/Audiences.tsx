import { Component, Vue } from "vue-property-decorator";
import { UserEntity, generateSampleData } from "../models/UsersEntity";
import { UsersList } from "../components/UsersList";
import { UserDetails } from "../components/UserDetails/UserDetails";

import "./Audiences.scss";

@Component({})
export default class Audiences extends Vue {
  users: Array<UserEntity> = generateSampleData();
  currentUser: UserEntity = this.users[0];

  onToggleUserDetails(id: any) {
    this.currentUser = this.users[id.split("_")[1]];
    return this.currentUser;
  }

  render() {
    return (
      <div class="audiencesContainer">
        <div class="sectionLeft">
          <div class="title">
            <h1>Users in Audience</h1>
            Total Users - Showing {this.users.length} matching users
          </div>
          <hr />
          <UsersList
            class="usersList"
            users={this.users}
            id={this.currentUser.id}
            toggleUserDetails={this.onToggleUserDetails}
            currentUser={this.currentUser}
          />
        </div>
        <UserDetails class="userDetails content" user={this.currentUser} />
      </div>
    );
  }
}
