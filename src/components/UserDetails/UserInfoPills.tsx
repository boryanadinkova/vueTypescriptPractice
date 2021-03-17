import { Component, Prop, Vue } from "vue-property-decorator";

import "./UserDetails.scss";

@Component({})
export class UserInfoPills extends Vue {
  @Prop({ required: true })
  readonly devices!: string;
  @Prop({ required: true })
  readonly sessions!: string;
  @Prop({ required: true })
  readonly events!: string;

  render() {
    return (
      <div class="tileContainer itemContainer">
        <section class="tile subtitle">
          Devices
          <span class="tileValue">{this.devices}</span>
        </section>
        <section class="tile subtitle">
          Sessions
          <span class="tileValue">{this.sessions.length}</span>
        </section>
        <section class="tile subtitle">
          Events
          <span class="tileValue">{this.events}</span>
        </section>
      </div>
    );
  }
}
